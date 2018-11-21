using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace smartSammlerAPI
{
    public class MarkerHub : Hub
    {
        public Task BroadcastMarkers(Marker[] markers)
        {
            return Clients.All.SendAsync("broadcastMarkers", markers);
        }
    }
}