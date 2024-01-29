import { useEffect } from "react";
import Head from "next/head";
import Newsletter from './newsletter'
import BlogRecent from "../../components/Blogs/blogrecent"
import Blogpopular from '../../components/Blogs/blogpopular';
import fetch from 'node-fetch';
import cheerio from 'cheerio';

function PostPage({ slug, post, metaTags, schema3, title }) {
  if (!post) {
    return <div>Loading...</div>;
  }
  // console.log(metaTags);
  const match = post.content.rendered.match(/src="([^"]+)"/);
  const firstImageUrl = match[1];
  // console.log(firstImageUrl);
  metaTags = metaTags.map(element => {
    if (element.name === 'og:url') {
      element.content = element.content.replace('https://blogs.tripzygo.in/uncategorized', 'https://tripzygo.in/blogs');
    }
    return element;
  });
  
  // console.log(metaTags);
  const dateObject = new Date(post.date);
  const day = dateObject.getDate().toString().padStart(2, '0'); // Ensure two-digit day
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = dateObject.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  const excerpt = post.excerpt.rendered;
  // console.log(schema3);
  const schema_description = schema3['@graph'][6].description;
  const schema_keywords = schema3['@graph'][6].keywords;
  const schema1 = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "Organization"],
        "@id": "https://tripzygo.in/blogs#organization",
        "name": "TripzyGo International",
        "url": "https://tripzygo.in/blogs",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://tripzygo.in/blogs#logo",
          "url": "https://www.tripzygo.in/logo.webp",
          "contentUrl": "https://www.tripzygo.in/logo.webp",
          "caption": "TripzyGo",
          "inLanguage": "en",
          "width": "724",
          "height": "483"
        },
        "openingHours": [
          "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00"
        ],
        "image": { "@id": "https://tripzygo.in/blogs#logo" }
      },
      {
        "@type": "WebSite",
        "@id": "https://tripzygo.in/blogs#website",
        "url": "https://tripzygo.in/blogs",
        "name": "TripzyGo",
        "publisher": { "@id": "https://tripzygo.in/blogs#organization" },
        "inLanguage": "en"
      },
      {
        "@type": "ImageObject",
        "@id": firstImageUrl,
        "url": firstImageUrl,
        "width": "200",
        "height": "200",
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://tripzygo.in/blogs/${slug}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": "1",
            "item": { "@id": "https://tripzygo.in/blogs", "name": "Home" }
          },
          {
            "@type": "ListItem",
            "position": "2",
            "item": {
              "@id": `https://tripzygo.in/blogs/${slug}/`,
              "name": `Incredible India: ${title}`
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `https://tripzygo.in/blogs/${slug}/#webpage`,
        "url": `https://tripzygo.in/blogs/${slug}/`,
        "name": `${title}`,
        "datePublished": "2023-10-19T07:44:24+00:00",
        "dateModified": "2023-10-20T10:17:11+00:00",
        "isPartOf": { "@id": "https://tripzygo.in/blogs#website" },
        "primaryImageOfPage": {
          "@id": firstImageUrl
        },
        "inLanguage": "en",
        "breadcrumb": {
          "@id": `https://tripzygo.in/blogs/${slug}/#breadcrumb`
        }
      },
      {
        "@type": "Person",
        "@id": "https://tripzygo.in/blogs/",
        "name": "admin",
        "url": "https://tripzygo.in/blogs/",
        "image": {
          "@type": "ImageObject",
          "@id": "https://secure.gravatar.com/avatar/512548183c126f3f5cad78e231de1ebb?s=96&amp;d=mm&amp;r=g",
          "url": "https://secure.gravatar.com/avatar/512548183c126f3f5cad78e231de1ebb?s=96&amp;d=mm&amp;r=g",
          "caption": "admin",
          "inLanguage": "en"
        },
        "sameAs": ["https://tripzygo.in/blogs"],
        "worksFor": { "@id": "https://tripzygo.in/blogs#organization" }
      },
      {
        "headline": title,
        "description": schema_description,
        "keywords": schema_keywords,
        "@type": "BlogPosting",
        "author": {
          "@id": "https://tripzygo.in/blogs/",
          "name": "admin"
        },
        "datePublished": "2023-10-19T07:44:24+00:00",
        "dateModified": "2023-10-20T10:17:11+00:00",
        "name": title,
        "@id": `https://tripzygo.in/blogs/${slug}/#schema-2078`,
        "isPartOf": {
          "@id": `https://tripzygo.in/blogs/${slug}/#webpage`
        },
        "publisher": { "@id": "https://tripzygo.in/blogs#organization" },
        "image": {
          "@id": firstImageUrl
        },
        "inLanguage": "en",
        "mainEntityOfPage": {
          "@id": `https://tripzygo.in/blogs/${slug}/#webpage`
        }
      }
    ]
  }

const schema2 = {
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://tripzygo.in/blogs/${slug}/`
    },
    "url": `https://tripzygo.in/blogs/${slug}/`,
    "headline": `Incredible India: ${title}`,
    "datePublished": "2023-10-19T07:44:24+00:00",
    "dateModified": "2023-10-20T10:17:11+00:00",
    "publisher": {
      "@type": "Organization",
      "@id": "https://tripzygo.in/blogs#organization",
      "name": "TripzyGo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tripzygo.in/logo.webp",
        "width": 600,
        "height": 60
      }
    },
    "articleSection": "Uncategorized",
    "description": `${excerpt}`,
    "author": {
      "@type": "Person",
      "name": "admin",
      "url": "https://tripzygo.in/blogs/",
      "image": {
        "@type": "ImageObject",
        "url": "https://secure.gravatar.com/avatar/512548183c126f3f5cad78e231de1ebb?s=96&d=mm&r=g",
        "height": 96,
        "width": 96
      },
      "sameAs": ["https://tripzygo.in/blogs"]
    }
  }

  // console.log(schema1);
  // console.log(schema2);

    

  return (
    <div>
      <Head>
        <title>
          TripzyGo - {title}
        </title>

        <link
          rel="canonical"
          href={`https://tripzygo.in/blogs/${slug}/`}
        />
        
        {metaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}

        
        <link rel="icon" href="/icon.png" />
       
      </Head>
      <section style={{ padding: "2.5rem 0 5rem" }} className="blogwp">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-8 mb-4">
              <div className="blog-single">
                <div className="blog-wrapper blog_a">
                  <li key={post.id}>
                    {/* <h6 className="float-right" style={{fontSize:"10px"}}>Post Date: {formattedDate} </h6> */}
                    <div className="entry-author mb-2 r float-right">
                                        <img src="/images/reviewer/images.webp" alt="" className="rounded-circle me-1" />
                                        <span style={{fontSize:"10px"}}>{formattedDate}</span>
                                    </div>
                     <br/>
                    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}/>
                    <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                  </li>
                </div>
              </div>
            </div>

            {/* <!-- sidebar starts --> */}
            <div className="col-lg-4 pe-lg-3">
              <div className="sidebar-sticky">
                <div className="popular-post sidebar-item mb-2">
                  <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                    <ul
                      className="nav nav-tabs nav-pills nav-fill"
                      id="postsTab1"
                      role="tablist"
                    >
                      <li
                        className="nav-item d-inline-block popularSectionHeading"
                        role="presentation"
                      >
                        <button
                          aria-selected="false"
                          className="nav-link active"
                          data-bs-target="#popular"
                          data-bs-toggle="tab"
                          id="popular-tab"
                          role="tab"
                          type="button"
                        >
                          Popular
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="postsTabContent1">
                      <div
                        aria-labelledby="popular-tab"
                        className="tab-pane fade active show"
                        id="popular"
                        role="tabpanel"
                      >
                        <Blogpopular></Blogpopular>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recent-post sidebar-item mb-1">
                  <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                    <div className="post-tabs">
                      <ul
                        className="nav nav-tabs nav-pills nav-fill"
                        id="postsTab1"
                        role="tablist"
                      >
                        <li
                          className="nav-item d-inline-block"
                          role="presentation"
                        >
                          <button
                            aria-selected="false"
                            className="nav-link active"
                            data-bs-target="#recent"
                            data-bs-toggle="tab"
                            id="recent-tab"
                            role="tab"
                            type="button"
                          >
                            Recent
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="postsTabContent1">
                        <div
                          aria-labelledby="recent-tab"
                          className="tab-pane fade active show"
                          id="recent"
                          role="tabpanel"
                        >
                          <BlogRecent></BlogRecent>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Newsletter></Newsletter>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }} />
      <script src="/js/jquery-3.5.1.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/particles.js"></script>
      <script src="/js/particlerun.js"></script>
      <script src="/js/plugin.js"></script>
      {/* <script src="/js/main.js"></script> */}
      <script src="/js/custom-accordian.js"></script>
      <script src="/js/custom-nav.js"></script>
      <script src="/js/custom-navscroll.js"></script>
    </div>
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  // console.log(slug);
  try {
    const response = await fetch(`https://blogs.tripzygo.in/wp-json/wp/v2/posts?slug=${slug}`);
    const data = await response.json();
    const post = data[0] || {}; // Use the first post or an empty object if not found

    const response_meta_and_schema = await fetch(`https://blogs.tripzygo.in/uncategorized/${slug}`);
    const html = await response_meta_and_schema.text();
    const $ = cheerio.load(html);
    
    const metaTags = $('meta').toArray().map(tag => ({
      name: $(tag).attr('name') || $(tag).attr('property'),
      content: $(tag).attr('content')
    })).filter(tag => tag.name !== undefined && tag.content !== undefined);;
    // Extract schema information (if available)
    const schema3 = JSON.parse($('script[type="application/ld+json"]').html() || null);
    const title = $('title').text();
    console.log(slug);
    return {
      props: {
        slug,
        post,
        metaTags,
        schema3,
        title,
      },
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      props: {
        post: null,
      },
    };
  }
}

export default PostPage;
