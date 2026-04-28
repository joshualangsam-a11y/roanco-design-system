FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY index.html ./
COPY colors_and_type.css ./
COPY Primitives.jsx ProjectRail.jsx HorizontalBands.jsx VerticalRails.jsx Sections.jsx Sections2.jsx ./
COPY hero.webm hero.mp4 hero-poster.jpg ./
COPY assets ./assets
COPY preview ./preview

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
