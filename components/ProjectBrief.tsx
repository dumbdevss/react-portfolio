"use client";

import { useState } from "react";
import { profile } from "../lib/data";

const projectTypes = ["A website", "A product", "A Web3 project"];
const scopes = [
  "A focused first version",
  "A few connected features",
  "An end-to-end experience",
];
const priorities = [
  "Frontend & motion",
  "Full-stack engineering",
  "Architecture & APIs",
];

export default function ProjectBrief() {
  const [type, setType] = useState(projectTypes[0]);
  const [scope, setScope] = useState(1);
  const [priority, setPriority] = useState(priorities[0]);
  const summary = [type, scopes[scope], priority].join(". ") + ".";
  const body = [
    "Hi Taiwo,",
    "",
    "I'd like to discuss a project.",
    "",
    "Project: " + type,
    "Scope: " + scopes[scope],
    "Focus: " + priority,
    "",
    "A little more about the idea:",
    "",
    "My ideal timeline:",
    "",
    "Thanks!",
  ].join("\n");
  const emailHref =
    "mailto:" +
    profile.email +
    "?subject=" +
    encodeURIComponent("Let's build: " + type.toLowerCase()) +
    "&body=" +
    encodeURIComponent(body);
  return (
    <div className="project-brief" data-reveal>
      <div className="brief-heading">
        <span className="micro-label">LET’S FIND A STARTING POINT</span>
        <span className="micro-label">YOUR NEXT GOOD IDEA ↙</span>
      </div>
      <div className="brief-controls">
        <fieldset>
          <legend>01 / I’m building</legend>
          <div className="brief-options">
            {projectTypes.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={type === option}
                onClick={() => setType(option)}
              >
                {option}
                <span aria-hidden>{type === option ? "↗" : "+"}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <div className="brief-scope">
          <label htmlFor="project-scope">02 / The scope</label>
          <p>{scopes[scope]}</p>
          <input
            id="project-scope"
            type="range"
            min="0"
            max="2"
            step="1"
            value={scope}
            aria-valuetext={scopes[scope]}
            onChange={(event) => setScope(Number(event.target.value))}
          />
          <div className="range-labels">
            <span>FOCUSED</span>
            <span>FULL EXPERIENCE</span>
          </div>
        </div>
        <div className="brief-focus">
          <label htmlFor="project-priority">03 / Where you need me</label>
          <select
            id="project-priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            {priorities.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <p>
            From a rough idea to the finer details — let&apos;s figure it out
            together.
          </p>
        </div>
      </div>
      <div className="brief-result">
        <p aria-live="polite">{summary}</p>
        <a href={emailHref} className="brief-send">
          Let&apos;s build this <span aria-hidden>↗</span>
        </a>
      </div>
      <p className="brief-note">
        Opens your email app with a starting brief. Add your details and send
        when you’re ready.
      </p>
    </div>
  );
}
