import React from 'react'

export default function Terms() {
    return (
        <div>
            <div className="lg:mx-32 mx-2 text-justify my-12">
                <div className="text-center text-[2rem] font-bold mb-5">Privacy Policy</div>
                <div>
                    <p>
                        This Privacy Policy ("Policy") applies to Cyptocoin ("Company") and governs data
                        collection and usage. For the purposes of this Privacy Policy, unless otherwise noted,
                        all references to the Company include Cyptocoin. The Company's application is an online
                        cryptocurrency trading platform. By using the Company application, you consent to the
                        data practices described in this statement.
                    </p>
                </div>

                <div className="my-8">
                    <h1 className="text-xl font-medium mb-4">Collection of your Personal Information</h1>
                    <p>
                        In order to provide you with secure trading services, the Company may collect personally
                        identifiable information such as:
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="font-semibold mb-3">
                        Full Name, Email Address, Phone Number, Residential Address, Government-issued ID,
                        Date of Birth
                    </h2>
                    <p>
                        If you engage in transactions on the platform, we may collect payment details,
                        wallet addresses, and transaction history to facilitate trading activities.
                    </p>
                    <p>
                        The Company may also collect non-personal information such as your:
                        <span className="font-medium"> Device information, IP address, Location data</span>
                    </p>
                    <p>
                        We do not collect personal information unless voluntarily provided. However, certain
                        services such as account verification (KYC), trading, or withdrawals require submission
                        of personal data.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Use of your Personal Information</h4>
                    <p>The Company uses your personal information for the following:</p>
                    <ul className="list-disc ml-6 font-medium mt-3 space-y-2">
                        <li>To operate and maintain the trading platform.</li>
                        <li>To verify your identity and comply with regulatory requirements.</li>
                        <li>To process transactions and manage your account.</li>
                        <li>To provide customer support.</li>
                        <li>To notify you about security updates or account activity.</li>
                        <li>To improve platform performance and user experience.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Sharing Information with Third Parties</h4>
                    <p>The Company does not sell your personal data.</p>
                    <p>
                        We may share your information with trusted partners such as payment processors,
                        compliance providers, and security services strictly for operational purposes.
                    </p>
                    <p>
                        We may disclose your information if required by law, regulatory authorities, or to
                        protect against fraud, security threats, or illegal activities.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Right to Deletion</h4>
                    <p>
                        You may request deletion of your personal data, subject to regulatory and legal
                        obligations such as financial record-keeping and fraud prevention.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Security of your Information</h4>
                    <p>
                        The Company uses industry-standard security measures including encryption,
                        authentication, and monitoring systems to protect your data and transactions.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Children Under 18</h4>
                    <p>
                        The Company does not provide services to individuals under the age of 18.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Changes to This Policy</h4>
                    <p>
                        The Company may update this Policy periodically. Continued use of the platform
                        after changes means you accept the updated terms.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
                    <p>If you have questions, contact us at:</p>
                    <div className="mt-6">
                        <p className="mb-3">Cyptocoin</p>
                        <p className="mb-3">support@cyptocoin.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}