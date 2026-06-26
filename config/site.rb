Site.for 'mountainhigh.codes' do |site|
  site.layout = './views/layout.erb'

# /
#
  site.route '/' do |route|
    route.call do |ctx|
      data = Page.index
      ctx.render string: data.body, data:
    end
  end

# top-level pages (e.g. /about) — driven by ro/pages/*
#
  site.route '/:id' do |route|
    route.call do |ctx|
      id = ctx.params.fetch(:id)
      page = site.ro.get("pages/#{ id }")

      if page
        ctx.render string: page.body, data: page
      end
    end

    route.urls do
      Page.top_level.map do |page|
        "/#{ page.id }"
      end
    end
  end

# /sitemap
#
  site.route '/sitemap' do |route|
    route.call do |ctx|
      urls = site.urls
      data = {urls:}
      ctx.render 'views/sitemap.erb', data:
    end
  end

# site.helpers
#
  require_relative '../lib/helpers'
  site.utils << Helpers
end
