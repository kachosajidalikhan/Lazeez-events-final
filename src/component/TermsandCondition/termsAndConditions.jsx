export default function TermsAndConditions() {
    return (
        <div className="bg-white/60 Poppins px-6 py-12 max-w-5xl mx-auto text-[#333]">
            <br />
            <h1 className="text-4xl Poppins-bold font-bold text-center text-[#ED004F] mb-10">Lazeez Event Website Terms and Conditions</h1>

            <Section>
                <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">Introduction</h3>
                <p>
                Welcome to Lazeez! By accessing or using our website and services, 
                you agree to abide by the following terms and conditions.
                 Please read these terms carefully as they govern your use of our platform. 
                If you do not agree to these terms, please refrain from using our services.
                </p>
            </Section>

            <Section>
            <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">Jurisdiction (might have a possibility to be changed!)</h3>
                <p>
                Lazeez is registered as an LLC in the United States, specifically in Texas. 
                However, as our operations are based in Pakistan, all transactions, disputes, 
                and legal matters shall be governed by the laws of Pakistan. 
                Any disputes arising from these terms will be subject to the exclusive jurisdiction 
                of courts in Karachi, Pakistan.
                </p>
            </Section>

            <Section>
            <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">Chatting Feature</h3>
            <p>Lazeez provides a chatting feature to facilitate communication 
                between users and vendors. 
                To ensure compliance and avoid misuse, the following rules apply:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>The chat can only be initiated by vendors. Users do not have the option to start a conversation.</li>
                    <li>Messages sent by vendors will appear in the user's notification tab for ease of access.</li>
                    <li>Users and vendors must not exchange personal contact information (e.g., phone numbers or email addresses).</li>
                    <li>Only the user's location, name, and details of the package they have ordered will be visible to vendors. Phone numbers and email addresses will not be displayed.</li>
                    <li>Conducting transactions or communications outside the Lazeez platform is strictly prohibited and may result in account suspension or legal action.</li>
                </ul>
            </Section>

            <Section>
            <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">Data Protection</h3>
                <p>
                We are committed to protecting your data and ensuring its confidentiality. 
                Lazeez collects and stores only the information necessary to facilitate transactions 
                and improve user experience. By using Lazeez, you agree to our 
                collection and use of data as outlined in our Privacy Policy. 
                We do not share or sell personal information to third parties
                </p>
            </Section>

            <Section>
            <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">Prohibited Activities</h3>
            <p>Users and vendors are prohibited from:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Conducting transactions or agreements outside the Lazeez platform. Such actions are strictly against our policy and may lead to account termination and potential legal consequences.</li>
                    <li>Misusing the chatting feature for purposes other than discussing orders or resolving queries related to packages.</li>
                    <li>Providing false or misleading information about packages, services, or user identities.</li>
                </ul>
            </Section>

            <Section >
            <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">Liability Disclaimer</h3>
            <p>Lazeez acts as a platform connecting users and vendors. While we strive to ensure accurate and reliable service, Lazeez is not responsible for:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Any damages or disputes arising from transactions conducted outside the platform.</li>
                    <li>The quality, safety, or legality of packages offered by vendors.</li>
                </ul>
            </Section>

            <Section >
            <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">Vendor Obligations</h3>
            <p>Vendors agree to:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>OOffer services and packages exclusively through the Lazeez platform.</li>
                    <li>Refrain from sharing or soliciting user contact information outside the platform.</li>
                    <li>Abide by all applicable local laws and Lazeez policies.</li>
                </ul>
            </Section>

            <Section >
            <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">User Obligations</h3>
            <p>Users agree to:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Provide accurate information during registration and while placing orders.</li>
                    <li>Use the chatting feature responsibly and adhere to Lazeez policies.</li>
                    <li>Report any suspicious activities or breaches of these terms immediately.</li>
                </ul>
            </Section>

            <Section>
            <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">Monitoring and Enforcement</h3>
            <p>Lazeez reserves the right to:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Monitor all communications conducted through the chatting feature to ensure compliance.</li>
                    <li>Suspend or terminate accounts involved in prohibited activities.</li>
                    <li>Pursue legal action against users or vendors violating these terms.</li>
                </ul>
            </Section>

            <Section>
            <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">Amendments</h3>
                <p>
                Lazeez reserves the right to modify these terms and conditions at any time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of the updated terms.
                </p>
            </Section>

            <Section>
            <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">Contact Information</h3>
                <p>
                For any questions or concerns regarding these terms, please contact us through the provided channels on the Lazeez website.
                </p>
            </Section>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#ED004F] mb-4">{title}</h2>
            <div className="text-base leading-relaxed text-gray-700">{children}</div>
        </div>
    );
}
