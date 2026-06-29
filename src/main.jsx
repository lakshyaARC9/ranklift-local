import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapPin, Search, Star, Mail, ShieldCheck, ArrowRight, ClipboardCheck, Hammer, Truck } from 'lucide-react';
import './styles.css';

const niches = ['Septic service', 'Mobile RV repair', 'Gutter cleaning', 'Stump grinding', 'Garage door repair', 'Junk removal'];

function App() {
  return (
    <main>
      <section className="hero">
        <nav>
          <div className="brand"><MapPin size={24}/> RankLift Local</div>
          <a className="navCta" href="mailto:score.geo.yt@gmail.com?subject=Free%20Google%20Maps%20Audit">Request Free Audit</a>
        </nav>
        <div className="heroGrid">
          <div>
            <div className="eyebrow">USA local-contractor growth desk</div>
            <h1>Get more local calls from your Google Business Profile.</h1>
            <p className="lead">We help small-town service contractors spot simple Google Maps visibility gaps: weak descriptions, missing service keywords, review gaps, inactive posts, and competitor advantages.</p>
            <div className="actions">
              <a className="primary" href="mailto:score.geo.yt@gmail.com?subject=Free%20Google%20Maps%20Audit&body=Business%20name%3A%0ACity%2FState%3A%0AWebsite%20or%20Google%20profile%3A">Get a free 3-point audit <ArrowRight size={18}/></a>
              <a className="secondary" href="#offers">See launch offers</a>
            </div>
          </div>
          <div className="card scorecard">
            <div className="cardTitle"><ClipboardCheck size={22}/> Free mini-audit checks</div>
            <ul>
              <li>Review count/rating gap vs nearby competitors</li>
              <li>Missing services and keyword opportunities</li>
              <li>Google post/photo/activity quick wins</li>
              <li>Profile description rewrite opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="strip">
        {niches.map((n, i) => <span key={i}>{n}</span>)}
      </section>

      <section className="section" id="offers">
        <div className="sectionHead">
          <div className="eyebrow">Launch pricing</div>
          <h2>Low-cost fixes for overlooked local businesses.</h2>
          <p>Built for niches where a few simple profile improvements can matter more than expensive agencies.</p>
        </div>
        <div className="offers">
          <div className="offer free">
            <Search size={28}/>
            <h3>Free Google Maps Audit</h3>
            <p>3 practical observations about your profile and local competitor gap.</p>
            <strong>$0</strong>
          </div>
          <div className="offer">
            <Star size={28}/>
            <h3>Starter Fix Pack</h3>
            <p>Description rewrite, review request templates, review reply templates, and post ideas.</p>
            <strong>$5 launch price</strong>
          </div>
          <div className="offer">
            <ShieldCheck size={28}/>
            <h3>Full Visibility Pack</h3>
            <p>Competitor gap report, 30-day action plan, services/keyword recommendations, and content prompts.</p>
            <strong>$15 launch price</strong>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div>
          <div className="eyebrow">Why this model is durable</div>
          <h2>Local data, niche execution, and human follow-through.</h2>
          <p>Generic AI tools can write text. Local contractors still need someone to inspect their real listing, compare nearby competitors, package actions clearly, and follow up. RankLift Local focuses on underserved USA service niches rather than broad crowded marketing.</p>
        </div>
        <div className="durableGrid">
          <div><Hammer/> Specific contractor niches</div>
          <div><Truck/> Small-town USA targeting</div>
          <div><Mail/> Email-first client workflow</div>
        </div>
      </section>

      <section className="cta">
        <h2>Want a free Google profile audit?</h2>
        <p>Send your business name, city/state, and Google profile or website link. We will reply with 3 quick wins.</p>
        <a className="primary" href="mailto:score.geo.yt@gmail.com?subject=Free%20Google%20Maps%20Audit">Email RankLift Local</a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
