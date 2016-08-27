---
layout: post
title: Careers
permalink: /about/careers
date:   2016-06-13 11:19:48 +0530

---

<div class="ui grid stackable">

    <div class="column ten wide">
      <p>
        A lot of companies talk about culture, their awesome office, fun events and great perks. But we view culture differently. We believe it's about rallying people who enjoy each other's company and respect each other's skill. It's about working alongside people you rely on to spar with you intellectually one moment, then grab tacos with you the next.
      </p>
      <p>
        We've created a culture that rewards bright, driven, and fun-loving people. We take our work seriously.
      </p>
      <strong>At {{ site.title }} you can...</strong>
      <ul>
        <li class="item">Power Customer Success</li>
        <li class="item">Solve Meaningful Problems</li>
        <li class="item">Build and Promote Great Technology</li>
        <li class="item">Work with Brilliant People</li>
        <li class="item">Work in the interesting new technologies</li>
      </ul>
      <div class="ui hidden big divider"></div>

      {% assign vacancies = site.pages | where: "ptype", "career" %}

      <h2>Open Positions</h2>
      <div class="ui middle bulleted aligned animated list">
        {% for post in vacancies %}
          <div class="item"><a href="{{ post.url }}">{{ post.title }}</a></div>
        {% endfor %}
      </div>

      <h2>How to Apply?</h2>
      <p>If you're applying for a developer position, then there is an easy way for you to apply. Check <a href="https://github.com/lightrainstech/join-us.git">this GitHub Repo</a> </p>
      <ul>
       <li>Fork <a href="https://github.com/lightrainstech/join-us.git">this repository.</a></li>
       <li>Read questions in `questions.md`</li>
       <li>Create a new file, name it `answers.md`</li>
       <li>Submit a `Pull Request` once you're finish with all the questions.</li>
      </ul>



    </div>
    <div class="column six wide">
      <img src="/assets/img/lightrains-team.jpg" alt="{{ site.title }} Team" class="ui image lazy fluid" />
      <div class="ui hidden divider"></div>
      {% include contact-detail.html %}
      <br>
    </div>

  </div>
