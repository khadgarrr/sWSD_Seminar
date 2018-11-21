using System;
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
using NLog.Web;


namespace smartSammlerAPI
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
                .AddDbContext<SammlerDBContext>(options => options.UseSqlServer(conStr));

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
                routes.MapHub<MarkerHub>("/markerhub");
            });
            
            app.UseMvcWithDefaultRoute();
        }
    }
}
