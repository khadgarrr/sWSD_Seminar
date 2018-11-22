using Vouchers;

namespace VouchersNetCore.Common
{
    public class ApiResponse
    {
        public bool Status { get; set; }

        public string Message { get; set; }
        public Voucher Voucher { get; set; }
    }

}
