import React from 'react';

const Blogs = () => {
    return (
        <blogs className='blogs'>
            <div className='blogs-container'>
                <div className='row'>
                    <div className='blogs-col'>
                        <h4 className='mt-5 p-4'>Authentication</h4>
                        <p className='mt-0 m-3'>
                            <small>Authentication (AuthN) is a process that verifies that someone or something is who they say they are. Technology systems typically use some form of authentication to secure access to an application or its data. For example, when you need to access an online site or service, you usually have to enter your username and password. Then, behind the scenes, it compares the username and password you entered with a record it has on its database. If the information you submitted matches, the system assumes you are a valid user and grants you access. System authentication in this example presumes that only you would know the correct username and password. It, therefore, authenticates you by using the principle of something only you would know.</small>
                        </p>
                        <h4 className='mt-2 p-3'>Authorization</h4>
                        <p className='m-3'>
                            <small>Authorization is the security process that determines a user or service's level of access. In technology, we use authorization to give users or services permission to access some data or perform a particular action. If we revisit our coffee shop example, Rahul and Lucia have different roles in the coffee shop. As Rahul is a barista, he may only place and view orders. Lucia, on the other hand, in her role as manager, may also have access to the daily sales totals. Since Rahul and Lucia have different jobs in the coffee shop, the system would use their verified identity to provide each user with individual permissions. It is vital to note the difference here between authentication and authorization. Authentication verifies the user (Lucia) before allowing them access, and authorization determines what they can do once the system has granted them access (view sales information).</small>
                        </p>

                    </div>
                    <div className='blogs-col m-3'>
                        <h4>Causes of using Firebase</h4>
                        <p><small>The Firebase Realtime Database lets we build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</small></p>
                        <h4>Other option replace Firebase</h4>
                        <p><small>Supabase. Supabase is another open source alternative to Firebase, and the main difference is that it is a SQL database rather than NoSQL. Many users love it because it also offers real-time data, authentication for multiple services, file storage, and more.</small></p>
                    </div>
                    <div className='blogs-col m-3'>
                        <h4>Different Products and Services Offered by Google Firebase for App Development</h4>
                        <p><small>Now that we know what Firebase is and how to utilize it for app development, let’s get into what products are worth trying for your project:</small></p>

                        <h4>1. Cloud Firestore</h4>
                        <small> Cloud Firestore helps store, sync, and query app data at a global scale. It’s a NoSQL database built specifically for global-level applications. It enables you to query and structure your data the way you like it.

                            You can use collections and documents to build hierarchies to store related data and easily retrieve it using expressive queries. All queries come with the ability to scale with the size of the result set making your app ready to scale from day one.</small>

                        <h4 className='mb-2'>2. Firebase Realtime Database</h4>
                        <small>
                            Firebase Realtime Database is a cloud-hosted NoSQL database that helps you store and sync data in real-time. Here’s a detailed guide on the same to advance your learning further.
                        </small>

                        <h4 className='mb-2'>3. Remote Config</h4>
                        <p><small>Remote Config helps you control and optimize your app on the go. You can control the app’s behavior and appearance to make changes by updating the configuration from the Firebase Console.

                            Further, it lets you dynamically turn features on and off, personalize by audience groups, and run experiments that too without setting up any complex infrastructure.

                            It also allows you to implement feature flags so you can gradually roll out new and exciting features for stable performance.</small></p>

                        <h4 className='mb-2'>4. App Check</h4>
                        <p><small>App check is an additional layer of security to protect your APIs. It protects your data and your customers by attesting that incoming traffic is from your app and blocks traffic that doesn’t have valid credentials.

                            Also, App Check helps protect your app backend from abuse, like phishing, billing fraud, data poisoning, app impersonation, etc.</small></p>

                        <h4 className='mb-2'>5. Firebase Cloud Functions</h4>
                        <p><small>Cloud functions allow you to develop backend without servers. It helps create functions that get triggered by Firebase functions, for instance, changes in data of the Realtime Database, new user sign-ups, and conversion events.

                            The best thing about Cloud Functions is you can run your mobile backend code without managing servers. Moreover, they are single-purpose JavaScript functions that are executed in a secure and managed NodeJS environment.</small></p>
                    </div>
                </div>
            </div>
        </blogs>
    );
};

export default Blogs;