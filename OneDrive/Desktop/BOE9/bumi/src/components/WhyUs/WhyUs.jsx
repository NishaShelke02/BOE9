// src/components/WhyUs.js
import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section className="whyus-section">
      <div className="whyus-header">
        <h1>Why Partner With BOE9?</h1>
        <p className="subtitle">The Cornerstones of Trust</p>
      </div>

      <div className="whyus-grid">
        <div className="whyus-card">
          <h3>Uncompromising Quality & Traceability</h3>
          <p>
            We believe trust is built on transparency. That’s why we trace every
            shipment to its source and maintain rigorous quality checks—so you
            always know exactly what you’re getting, and who produced it.
          </p>
        </div>

        <div className="whyus-card">
          <h3>Ethical, Impactful Sourcing</h3>
          <p>
            Our success is measured by the impact we create. Through fair
            partnerships with farmers and producers, your purchase supports rural
            livelihoods and sustainable agriculture.
          </p>
        </div>

        <div className="whyus-card">
          <h3>Reliability in Global Logistics</h3>
          <p>
            We navigate the complexities of international trade, ensuring timely
            delivery and product integrity—so you can rely on us as an extension
            of your own team.
          </p>
        </div>

        <div className="whyus-card">
          <h3>True Sector Expertise</h3>
          <p>
            We don’t just move goods; we understand the unique regulations and
            challenges of the industries we serve. Our knowledge is your
            competitive advantage.
          </p>
        </div>
      </div>

      <div className="whyus-promise">
        <h2>Our Promise: We Are Your Supply Chain Partner</h2>
        <p>
          BOE9 stands for partnership—not just transactions. When you align with
          us, you gain a collaborator who shares your vision for a future where
          business is both sustainable and profitable.
        </p>
        <p>
          Let’s connect. Let’s build trust. Let’s source consciously,
          together—so you can focus on what you do best: creating exceptional
          products that inspire pride, loyalty, and lasting impact.
        </p>
        <p>
          Tell us your specs, compliance needs, and timelines. We’ll design the
          sourcing plan and deliver.
        </p>
        <button className="whyus-btn">Contact BOE9</button>
      </div>
    </section>
  );
};

export default WhyUs;
