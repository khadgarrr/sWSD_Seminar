﻿using System;
using System.Collections.Generic;
using System.Linq;
using JSNLog;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NLog.Extensions.Logging;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using NLog.Web;
using Microsoft.IdentityModel.Tokens;

namespace SkillsApi
{
    public class Startup
    {

        private readonly IHostingEnvironment env;

        public Startup(IHostingEnvironment environment)
        {
            env = environment;
        }


        public void ConfigureServices(IServiceCollection services)
        {
            IConfigurationBuilder cfgBuilder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json");
            IConfigurationRoot configuration = cfgBuilder.Build();

            services.AddSingleton(typeof(IConfigurationRoot), configuration);
            var conStr = configuration["ConnectionStrings:SQLServerDBConnection"];

            //EF
            services.AddEntityFrameworkSqlServer()
                .AddDbContext<SkillDBContext>(options => options.UseSqlServer(conStr));

            services.AddSignalR();

            //Cors
            var corsBuilder = new CorsPolicyBuilder();
            corsBuilder.AllowAnyHeader();
            corsBuilder.AllowAnyMethod();
            corsBuilder.AllowAnyOrigin();
            // For specific URL take:
            // corsBuilder.WithOrigins("http://localhost:4200")
            corsBuilder.AllowCredentials();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            //Firebase
            // services
            // .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            // .AddJwtBearer(options =>
            // {
            //     options.Authority = "https://securetoken.google.com/yourfbproject";
            //     options.TokenValidationParameters = new TokenValidationParameters
            //     {
            //         ValidateIssuer = true,
            //         ValidIssuer = "https://securetoken.google.com/yourfbproject",
            //         ValidateAudience = true,
            //         ValidAudience = "angulardemo-1a474",
            //         ValidateLifetime = true
            //     };
            // });

            //Facebook Auth
            //services.AddAuthentication(options =>
            //{
            //    options.DefaultChallengeScheme = FacebookDefaults.AuthenticationScheme;
            //    options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            //    options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            //}).AddFacebook(options =>
            //{
            //    options.AppId = configuration["Authentication:Facebook:AppId"];
            //    options.AppSecret = configuration["Authentication:Facebook:AppSecret"];
            //}).AddCookie();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            //Logging
            //Logging
            loggerFactory.AddNLog();
            env.ConfigureNLog("nlog.config");

            var jsnlogConfiguration = new JsnlogConfiguration();
            app.UseJSNLog(new LoggingAdapter(loggerFactory), jsnlogConfiguration);

            if (env.IsDevelopment())
            {
                loggerFactory.AddConsole();
                loggerFactory.AddDebug();
                app.UseDeveloperExceptionPage();
                app.UseStatusCodePages();
            }

            //Startup File
            var options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("index.html");
            app.UseDefaultFiles(options);

            if (env.IsDevelopment())
            {
                app.UseStaticFiles(new StaticFileOptions
                {
                    OnPrepareResponse = context =>
                    {
                        context.Context.Response.Headers["Cache-Control"] = "no-cache, no-store";
                        context.Context.Response.Headers["Pragma"] = "no-cache";
                        context.Context.Response.Headers["Expires"] = "-1";
                    }
                });
            }
            else
            { app.UseStaticFiles(); }

            //Cors
            app.UseCors("AllowAll");

            app.UseSignalR(routes =>
            {
                routes.MapHub<SkillHub>("/skillhub");
            });

            app.UseMvcWithDefaultRoute();
        }
    }
}
