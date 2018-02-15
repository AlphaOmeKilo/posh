<?php
/**
 * Template Name: Home
 *
 * @package posh
 * @since posh 0.1
 */

get_header() ?>

<div class="home">
  <div class="home-intro">
    <div class="container">     
      <h1 class="title h1">My name is <span class="home-intro-name">Alex</span>.<br>I build <span class="home-intro-expertise">websites</span>. <span class="purple">Simple.</span></h1> 
    </div>
  </div>
  
  <div id="home-projects" class="home-projects">
    <div class="container">
      
      <div class="info">
        <div class="p1">I'm a front end developer from London, UK.</div>
        <div class="p1">I specialise in the creation of custom WordPress themes.</div>
        <div class="p1">What can I do? See for yourself.</div>
      </div>
      
      <div class="examples col-xs-12">
        <div class="example col-xs-12">
          <div class="site clearfix">
            <a href="https://staging.loveandmoney.agency/adi/" target="_blank" class="col-xs-6 site-link"><img src="<?php posh_include('img/adi.png'); ?>" class="col-xs-12"></a>
            <div class="col-xs-6 project-details">
              <div class="arrow-right project-details-arrow"></div>
              <div class="project-name uppercase h2">African Dream Initiative (ADI) - Love + Money Agency</div>
            </div> 
          </div>
        </div>
        
        <div class="example col-xs-12">
          <div class="site clearfix">
            <a href="https://thisishey.com/" target="_blank" class="col-xs-6 site-link"><img src="<?php posh_include('img/thisishey.png'); ?>" class="col-xs-12"></a>
            <div class="col-xs-6 project-details">
              <div class="arrow-right project-details-arrow"></div>
              <div class="project-name uppercase h2">Hey Microsite - Love + Money Agency</div>
            </div> 
          </div>
        </div>
        
        
      </div>
      
    </div>
  </div>
</div>

<?php get_footer() ?>
