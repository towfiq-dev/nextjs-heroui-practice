import React from 'react';
import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";
const Task = ({task}) => {
  const {name, title, email, role, description, isActive, lastLogin} = task
  return (
    <Card>
      <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{email}</Card.Title>
        <Card.Title>{role}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Task;