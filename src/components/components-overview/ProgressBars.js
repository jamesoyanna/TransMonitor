import React from "react";
import { ListGroupItem, Progress } from "shards-react";

const ProgressBars = () => (
  <ListGroupItem className="px-3">
    <div className="mb-2">
      <strong className="text-muted d-block mb-3">Orders</strong>
      <Progress multi>
        <Progress bar theme="success" value="80" />
        <Progress theme="warning" bar value="20" />
      </Progress>

      <p className="text-muted d-block mb-3">Pending Orders:{20}</p>
      <p className="text-muted d-block mb-3">Reconcilled Orders:{20}</p>
      <p className="text-muted d-block mb-3">Total Orders:{20}</p>
      <strong className="text-muted d-block mb-3">Payments</strong>

      <Progress multi>
        <Progress bar theme="success" value="80" />
        <Progress theme="warning" bar value="20" />

        <Progress
          theme="success"
          style={{ height: "5px" }}
          className="mb-3"
          value={70}
        />
      </Progress>
      <p className="text-muted d-block mb-3">Unreconciled Payments:{}</p>
      <p className="text-muted d-block mb-3">Reconciled Payments:{}</p>
      <p className="text-muted d-block mb-3">Total Payments:{}</p>
    </div>
  </ListGroupItem>
);

export default ProgressBars;
