import React from "react";
import PropTypes from "prop-types";
import "./Faculty.css";

/**
 * AccessibleLink:
 * - Renders a real anchor when a valid href is provided.
 * - Otherwise renders a button (semantically correct) that can be styled to look like a link.
 * This avoids the `jsx-a11y/anchor-is-valid` lint error.
 */
const AccessibleLink = ({ href, children, className, onClick, ...rest }) => {
  const hasValidHref = typeof href === "string" && href.trim() !== "";

  if (hasValidHref) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Render a button if there is no valid href. Buttons are keyboard-accessible by default.
  // Style with CSS (e.g. .link-button) to look like a link if needed.
  return (
    <button
      type="button"
      className={className ? `${className} link-button` : "link-button"}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

AccessibleLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

AccessibleLink.defaultProps = {
  href: "",
  className: "",
  onClick: undefined,
};

const Faculty = ({ members = [] }) => {
  return (
    <section className="faculty">
      <h2>Our Faculty</h2>
      <div className="faculty-grid">
        {members.map((m, idx) => (
          <article key={m.id || idx} className="faculty-card">
            {m.photo && <img src={m.photo} alt={`${m.name} photo`} className="faculty-photo" />}
            <h3>{m.name}</h3>
            <p className="faculty-role">{m.role}</p>

            <div className="faculty-contact">
              {/* Use AccessibleLink so we never render an <a> without a valid href */}
              <AccessibleLink
                href={m.profileUrl || ""}
                className="faculty-link"
                onClick={() => {
                  // Optional fallback behaviour when no profile URL:
                  if (!m.profileUrl && m.email) {
                    window.location.href = `mailto:${m.email}`;
                  }
                }}
              >
                View profile
              </AccessibleLink>

              <AccessibleLink href={m.email ? `mailto:${m.email}` : ""} className="faculty-link">
                {m.email || "Email not available"}
              </AccessibleLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

Faculty.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object),
};

export default Faculty;
