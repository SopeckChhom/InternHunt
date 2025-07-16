import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Applications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    // TODO: fetch list of applications from backend API
    setApps([]);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Applications</h2>
      <ul className="space-y-2">
        {apps.map((app) => (
          <li key={app.id} className="bg-white shadow p-4 rounded">
            <Link to={`/applications/${app.id}`}>
              {app.role} @ {app.company}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
