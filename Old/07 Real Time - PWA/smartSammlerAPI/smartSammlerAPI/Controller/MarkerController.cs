using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace smartSammlerAPI
{
    [Route("api/markers")]
    public class MarkerController : Microsoft.AspNetCore.Mvc.Controller
    {
        private IHubContext<MarkerHub> markerHub;
        private SammlerDBContext ctx;

        public MarkerController(IHubContext<MarkerHub> hub, SammlerDBContext dbctx)
        {
            markerHub = hub;
            ctx = dbctx;
        }

        [HttpGet]
        public Marker[] Get()
        {
            return this.ctx.Markers.ToArray();
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
        public IActionResult Post([FromBody]Marker m)
        {
            if (m.id == 0)
            {
                ctx.Markers.Add(m);
            }
            else
            {
                ctx.Markers.Attach(m);
                ctx.Entry(m).State = EntityState.Modified;
            }

            ctx.SaveChanges();
            BroadcastMarkers();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var v = ctx.Markers.FirstOrDefault(m => m.id == id);
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
            Marker[] markers = this.ctx.Markers.ToArray();
            markerHub.Clients.All.SendAsync("broadcastMarkers", markers);
        }
    }
}
