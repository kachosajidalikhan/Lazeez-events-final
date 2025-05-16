// components/RefundCancellationPolicy.jsx
export default function RefundCancellationPolicy() {
    return (
        <section className="bg-white/60 Poppins max-w-5xl mx-auto px-4 py-10 text-[#333]">
            <br />
            <h2 className="text-3xl Poppins-bold font-bold text-center text-[#ED004F] mb-6">Refund and Cancellation Policy</h2>

            <div className="space-y-10">
                <div>
                    <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">For Users</h3>
                    <ol className="space-y-3 text-base" type={1}>
                        <li><strong className='Poppins-bold text-[#1E1500]'>1. Order Cancellation:</strong><br /> Users may cancel their order within 24 hours of placing it. <br />

                            Upon successful cancellation, Lazeez will initiate the refund process.
                        </li>
                        <li><strong className='Poppins-bold text-[#1E1500]'>2. Refund Timeline:</strong><br /> Refunds will be processed and transferred to the user's account within 3 working days after the cancellation request is approved. <br />Refunds are subject to internal audits to ensure compliance with Lazeez policies.</li>
                        <li><strong className='Poppins-bold text-[#1E1500]'>3. No Refunds After 3 Days:</strong><br /> Users will not be eligible for a refund if the cancellation request is made after 3 days of order placement.</li>
                        <li><strong className='Poppins-bold text-[#1E1500]'>4. Vendor-Initiated Cancellations:</strong><br /> If a vendor cancels an order, the user will receive a full refund, processed and transferred within 3 working days after the cancellation. <br />Lazeez will ensure the refund is subject to audit and proper verification.</li>
                    </ol>
                </div>

                <div>
                    <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">For Vendors</h3>
                    <ul className="space-y-3 text-base">
                        <li><strong className="text-[#1E1500] Poppins-bold">1. Payment Release:</strong><br /> Payments to vendors will be released 3 days after the order completion, following an internal audit. <br />This delay ensures the transaction is legitimate and in compliance with Lazeez policies.</li>
                        <li><strong className="text-[#1E1500] Poppins-bold">2. Order Cancellations:</strong><br /> If a vendor cancels an order, they will not receive payment for the canceled order. <br />Lazeez reserves the right to take action against repeated cancellations, including potential suspension of the vendor's account.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">General Terms</h3>
                    <ul className="space-y-3 text-base">
                        <li>Lazeez holds the right to withhold or deny refunds if fraudulent or abusive activity is detected.</li>
                        <li>Any disputes regarding refunds or cancellations must be reported to Lazeez within 7 working days of the transaction.</li>
                        <li>Lazeez reserves the right to amend or update this policy at any time. Users and vendors will be notified of significant changes.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
