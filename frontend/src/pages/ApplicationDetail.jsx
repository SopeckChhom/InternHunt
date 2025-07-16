import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ApplicationDetail() {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    // TODO: fetch application detail by id from backend API
    setApp(null);
  }, [id]);

  if (!app) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        {app.role} @ {app.company}
      </h2>
      {/* TODO: display application details and status */}
    </div>
  );
}
