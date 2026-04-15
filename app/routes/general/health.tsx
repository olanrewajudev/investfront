import React from 'react'

export default function Health() {
    return (
        <div>
            <div className="lg:mx-32 mx-2 text-justify my-12">
                <div className="text-center text-[2rem] font-bold mb-5">Health Data Notice</div>
                <div>
                    <p>
                        This Policy applies to Cyptocoin ("Company") and governs data collection and platform usage.
                        The Company operates a cryptocurrency trading platform designed to facilitate secure digital asset transactions.
                        By using the platform, you agree to the practices described in this statement.
                    </p>
                </div>

                <div className="my-8">
                    <h1 className="text-xl font-medium mb-4">Platform Health & Security</h1>
                    <p>
                        Cyptocoin prioritizes the health, stability, and security of its trading infrastructure.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="font-semibold mb-3">
                        System Monitoring, Risk Controls, Fraud Detection, Transaction Integrity
                    </h2>
                    <p>
                        We continuously monitor platform activity to detect suspicious behavior, prevent fraud,
                        and ensure the integrity of all trading operations.
                    </p>
                    <p>
                        Automated systems and manual reviews are used to maintain a secure and reliable environment
                        for all users.
                    </p>
                    <p>
                        We may temporarily restrict or suspend accounts that violate our policies or pose risks to the platform.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Security Measures</h4>
                    <p>The Company implements the following safeguards:</p>
                    <ul className="list-disc ml-6 font-medium mt-3 space-y-2">
                        <li>Data encryption and secure storage</li>
                        <li>Two-factor authentication (2FA)</li>
                        <li>Real-time monitoring systems</li>
                        <li>Regular system audits and updates</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">User Responsibility</h4>
                    <p>
                        Users are responsible for maintaining the security of their accounts, including safeguarding
                        login credentials and enabling security features such as 2FA.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Service Availability</h4>
                    <p>
                        While we strive for uninterrupted service, the platform may occasionally undergo maintenance
                        or experience downtime due to technical or external factors.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
                    <p>If you notice any suspicious activity, contact us immediately:</p>
                    <div className="mt-6">
                        <p className='mb-3'>Cyptocoin</p>
                        <p className='mb-3'>support@cyptocoin.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}