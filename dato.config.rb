social_profiles = dato.social_profiles.map do |profile|
  {
    url: profile.url,
    type: profile.profile_type.downcase.gsub(/ +/, '-'),
  }
end

quotes = dato.testimonials.map do |testimonial|
  {
    quote: testimonial.quote,
    name: testimonial.name,
  }
end

create_data_file "src/_data/settings.yml", :yaml,
  name: dato.site.global_seo.site_name,
  logo: dato.header.logo.url,
  language: dato.site.locales.first,
  social_profiles: social_profiles,
  favicon_meta_tags: dato.site.favicon_meta_tags

create_post "src/index.md" do
  frontmatter :yaml, {
    title: dato.home.title,
    image: dato.home.image.url(h: 400, fm: :png),
    who: dato.home.who_we_are,
    what: dato.home.what_we_do,
    image2: dato.home.second_image.url(h: 600, fm: :png),
    layout: 'home',
    testimonial: quotes,
    affiliate: dato.footer.affiliations.to_hash,
    seo_meta_tags: dato.home.seo_meta_tags,
    redirect_from: "/dc-event-production-services",
  }
end

# Create a markdown file from the content of the `about_page` item type
create_post "src/about.md" do
  frontmatter :yaml, {
    title: dato.about.title,
    image: dato.about.image.url(h: 500, fm: :png),
    layout: 'about',
    permalink: /about/,
    seo_settings: dato.about.seo_settings,
    redirect_from: "/about-nomad-events",
  }

  content dato.about.text
end

create_post "src/contact.md" do
  frontmatter :yaml, {
    title: dato.contact.title,
    image: dato.contact.image.url(h: 500, fm: :png),
    layout: 'contact',
    permalink: /contact/,
    seo_settings: dato.contact.seo_settings,
    redirect_from: "/contact-nomad-events",
  }

  content dato.about.text
end

create_post "src/contactlanding.md" do
  frontmatter :yaml, {
    title: dato.contact_landing.title,
    image: dato.contact_landing.image.url(h: 500, fm: :png),
    layout: 'contactlanding',
    permalink: /contactlanding/,
  }

  content dato.contact_landing.text
end

create_post "src/services.md" do
  frontmatter :yaml, {
    title: dato.service.title,
    image: dato.service.image.url(h: 500, fm: :png),
    layout: 'services',
    permalink: /services/,
    seo_settings: dato.service.seo_settings,
  }

  content dato.service.text
end

create_post "src/portfolio.md" do
  frontmatter :yaml, {
    title: dato.portfolio.title,
    image: dato.portfolio.image.url(h: 500, fm: :png),
    layout: 'portfolio',
    permalink: /portfolio/,
    land_gallery: dato.portfolio.landscape_gallery.to_hash,
    port_gallery: dato.portfolio.portrait_gallery.to_hash,
    seo_settings: dato.portfolio.seo_settings,
    }

  content dato.service.text
end
