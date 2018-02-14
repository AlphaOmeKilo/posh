<?php
/**
 * The template for individual posts
 *
 * @package posh
 * @since posh 0.1
 */

get_header() ?>

<?php while ( have_posts() ) : the_post() ?>

<?php endwhile ?>

<?php get_footer() ?>
