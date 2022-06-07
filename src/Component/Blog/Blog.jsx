import React from "react";
import Header from "../Header/Header";
function Blog() {
  return (
    <div>
      <Header />
      <div className=" container mx-auto px-9">
        <div className="qextion-1 py-12">
          <h1 className="font-bold text-left text-2xl">
            Q-1: Difference between Authorization and Authentication?
          </h1>
          <article className="text-justify text-center py-4">
            There is a Difference between authorization and authentication. For
            example, the process of verifying and confirming employees ID and
            passwords in an organization is called authentication, but
            determining which employee has access to which floor is called
            authorization. Let's say you are traveling and you're about to board
            a flight.
          </article>
        </div>
        <div className="qextion-2 py-12">
          <h1 className="font-bold text-left text-2xl">
            Q-2: Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <article className="text-justify text-center py-4">
            Firebase by Google can be used for the following: Firebase manages
            all data real-time in the database. So, the exchange of data to and
            fro from the database is easy and quick. Hence, if you are looking
            to develop mobile apps such as live streaming, chat messaging, etc.,
            I can query the location service running on a device, which may be
            using GPS or Wi-Fi to triangulate its position, and you can use a
            geolocation by IP database.
          </article>
        </div>
        <div className="qextion-3 py-12">
          <h1 className="font-bold text-left text-2xl">
            Q-3: What other services does firebase provide other than
            authentication?
          </h1>
          <article className="text-justify text-center py-4">
            <p className="font-bold"> Firebase Alternatives – </p>
            <p className="font-bold">Top 10+ Competitors Parse – Open Source</p>
            Backend Platform; Back4app – Parse Hosting Platform; Kinvey – Mobile
            Backend as a Service (mBaaS) for the Enterprise; Backendless –
            Mobile Backend and API Services Platform; Kuzzle – Backend for web,
            hybrid, or native mobile apps and IoT projects;
          </article>
        </div>
      </div>
    </div>
  );
}

export default Blog;
