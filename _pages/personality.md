---
layout: page
title: Personality
permalink: /personality/
nav: false
---

<div class="personality-wrapper">
  <img
    src="{{ '/assets/img/esfj.jpg' | relative_url }}"
    alt="ESFJ-A illustration"
    class="personality-hero"
  />
  <h2>ESFJ-A · Personality Traits</h2>

  <p class="personality-subtitle">
    Based on the 16Personalities assessment.
  </p>

  <!-- Energy -->
  <div class="trait-block">
    <div class="trait-header">
      <span class="trait-name">Energy</span>
      <span class="trait-score"><strong>75% Extraverted</strong></span>
    </div>
    <div class="trait-scale-labels">
      <span>Extraverted</span>
      <span>Introverted</span>
    </div>
    <div class="trait-bar trait-bar-blue">
      <div class="trait-bar-fill" style="width: 75%;"></div>
    </div>
  </div>

  <!-- Mind -->
  <div class="trait-block">
    <div class="trait-header">
      <span class="trait-name">Mind</span>
      <span class="trait-score"><strong>79% Observant</strong></span>
    </div>
    <div class="trait-scale-labels">
      <span>Intuitive</span>
      <span>Observant</span>
    </div>
    <div class="trait-bar trait-bar-gold">
      <div class="trait-bar-fill" style="width: 79%;"></div>
    </div>
  </div>

  <!-- Nature -->
  <div class="trait-block">
    <div class="trait-header">
      <span class="trait-name">Nature</span>
      <span class="trait-score"><strong>58% Feeling</strong></span>
    </div>
    <div class="trait-scale-labels">
      <span>Thinking</span>
      <span>Feeling</span>
    </div>
    <div class="trait-bar trait-bar-green">
      <div class="trait-bar-fill" style="width: 58%;"></div>
    </div>
  </div>

  <!-- Tactics -->
  <div class="trait-block">
    <div class="trait-header">
      <span class="trait-name">Tactics</span>
      <span class="trait-score"><strong>97% Judging</strong></span>
    </div>
    <div class="trait-scale-labels">
      <span>Judging</span>
      <span>Prospecting</span>
    </div>
    <div class="trait-bar trait-bar-purple">
      <div class="trait-bar-fill" style="width: 97%;"></div>
    </div>
  </div>

  <!-- Identity -->
  <div class="trait-block">
    <div class="trait-header">
      <span class="trait-name">Identity</span>
      <span class="trait-score"><strong>58% Assertive</strong></span>
    </div>
    <div class="trait-scale-labels">
      <span>Assertive</span>
      <span>Turbulent</span>
    </div>
    <div class="trait-bar trait-bar-red">
      <div class="trait-bar-fill" style="width: 58%;"></div>
    </div>
  </div>

</div>

<style>
.personality-wrapper {
  max-width: 700px;
  margin: 0 auto;
}

.personality-hero {
  max-width: 100%;
  border-radius: 16px;
  display: block;
  margin: 0 auto 1.5rem auto; /* 居中 + 底部留点空隙 */
}

.personality-subtitle {
  color: var(--global-muted-text, #6c757d);
  margin-bottom: 1.5rem;
}

.trait-block {
  margin-bottom: 1.8rem;
}

.trait-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.98rem;
  margin-bottom: 0.15rem;
}

.trait-name {
  font-weight: 600;
}

.trait-scale-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
  color: var(--global-muted-text, #6c757d);
}

.trait-bar {
  width: 100%;
  height: 12px;
  border-radius: 999px;
  background: #e9ecef;
  overflow: hidden;
}

.trait-bar-fill {
  height: 100%;
  border-radius: 999px;
}

/* 颜色大致还原截图风格 */
.trait-bar-blue  .trait-bar-fill { background: #10a8c8; }
.trait-bar-gold  .trait-bar-fill { background: #f2b63c; }
.trait-bar-green .trait-bar-fill { background: #49b87c; }
.trait-bar-purple .trait-bar-fill { background: #7a4fb4; }
.trait-bar-red   .trait-bar-fill { background: #f26f6f; }
</style>
