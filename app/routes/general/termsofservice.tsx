import React from 'react'

export default function Terms() {
    return (
        <div>
            <div className="lg:mx-32 mx-2 text-justify my-12">
                <div className="text-center text-[2rem] font-bold mb-5">Term & Conditions</div>
                <div>
                    <p>
                        These Terms and Conditions ("Terms") govern your use of Cyptocoin ("Company"),
                        a cryptocurrency trading platform. By accessing or using the platform, you agree
                        to be bound by these Terms. If you do not agree, you must not use the platform.
                    </p>
                </div>

                <div className="my-8">
                    <h1 className="text-xl font-medium mb-4">Eligibility & Account Registration</h1>
                    <p>
                        To use Cyptocoin, you must be at least 18 years old and capable of entering into
                        legally binding agreements. You agree to provide accurate and complete information
                        during registration and to keep your account information updated.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="font-semibold mb-3">
                        Account Security & Responsibility
                    </h2>
                    <p>
                        You are responsible for maintaining the confidentiality of your account credentials.
                        Any activity conducted under your account is your responsibility.
                    </p>
                    <p>
                        You must notify us immediately of any unauthorized access or security breach.
                    </p>
                    <p>
                        Cyptocoin is not liable for losses resulting from unauthorized access due to user negligence.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Use of the Platform</h4>
                    <p>You agree to use the platform only for lawful purposes. You must not:</p>
                    <ul className="list-disc ml-6 font-medium mt-3 space-y-2">
                        <li>Engage in fraudulent or deceptive activities</li>
                        <li>Use the platform for money laundering or illegal transactions</li>
                        <li>Attempt to hack, disrupt, or compromise the platform</li>
                        <li>Violate any applicable laws or regulations</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Trading Risks</h4>
                    <p>
                        Cryptocurrency trading involves significant risk. Prices are highly volatile,
                        and you may lose part or all of your funds.
                    </p>
                    <p>
                        You acknowledge that you are solely responsible for your trading decisions and
                        that Cyptocoin does not provide financial advice.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Transactions</h4>
                    <p>
                        All transactions executed on the platform are final and irreversible once completed.
                        You are responsible for verifying transaction details before confirming.
                    </p>
                    <p>
                        Cyptocoin is not responsible for losses resulting from incorrect transaction details
                        provided by users.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Limitation of Liability</h4>
                    <p>
                        Cyptocoin shall not be liable for any indirect, incidental, or consequential damages,
                        including loss of profits, data, or funds resulting from the use of the platform.
                    </p>
                    <p>
                        The platform is provided "as is" without warranties of any kind.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Suspension & Termination</h4>
                    <p>
                        We reserve the right to suspend or terminate your account if you violate these Terms,
                        engage in suspicious activity, or as required by law.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Changes to These Terms</h4>
                    <p>
                        Cyptocoin may update these Terms at any time. Continued use of the platform after
                        changes means you accept the updated Terms.
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
                    <p>If you have any questions regarding these Terms, contact us at:</p>
                    <div className="mt-6">
                        <p className="mb-3">Cyptocoin</p>
                        <p className="mb-3">support@cyptocoin.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}