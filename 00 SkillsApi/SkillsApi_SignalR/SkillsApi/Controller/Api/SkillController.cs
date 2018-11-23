using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace SkillsApi
{
    [Authorize]
    [Route("api/skills")]
    public class SkillController : Microsoft.AspNetCore.Mvc.Controller
    {
        private IHubContext<SkillHub> skillHub;
        private SkillDBContext ctx;

        public SkillController(IHubContext<SkillHub> hub, SkillDBContext dbctx)
        {
            skillHub = hub;
            ctx = dbctx;
        }

        [HttpGet]
        public Skill[] Get()
        {
            return this.ctx.Skills.ToArray();
        }

        [HttpGet]
        [Route("init")]
        public IActionResult Init()
        {
            BroadcastMarkers();
            return Ok();
        }

        //Sample payload for POST
        //{
        //  "imgURL": "/assets/images/schnitzelbaum.png",
        //  "lable": "Schnitzelbaum",
        //  "type": 1,
        //  "lat": 48.5839237,
        //  "lng": 15.4276355,
        //  "remark": "Welcome to Schlaraffenland"
        //}
        [HttpPost]
        public IActionResult Post([FromBody]Skill m)
        {
            if (m.id == 0)
            {
                ctx.Skills.Add(m);
            }
            else
            {
                ctx.Skills.Attach(m);
                ctx.Entry(m).State = EntityState.Modified;
            }

            ctx.SaveChanges();
            BroadcastMarkers();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var v = ctx.Skills.FirstOrDefault(m => m.id == id);
            if (v != null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
            BroadcastMarkers();
            return Ok();
        }

        private void BroadcastMarkers()
        {
            Skill[] markers = this.ctx.Skills.ToArray();
            skillHub.Clients.All.SendAsync("skillsChanged", markers);
        }
    }
}
