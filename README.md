# Yaama Tech Website

This repository contains the source code for the Yamatek website. The website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator optimized for technical and documentation websites.

## Project Structure

The source code is available under the `src` directory, which contains:

- `docs/`: Documentation content in Markdown/MDX format
- `blog/`: Blog posts in Markdown/MDX format
- `src/`: Custom React components and pages
- `static/`: Static assets like images
- `docusaurus.config.ts`: Main configuration file
- `sidebars.ts`: Sidebar configuration for documentation

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Creating Blog Posts

To create a new blog post:

1. First, ensure you're added as an author in `src/blog/authors.yml`:
   ```yaml
   your_name:
     name: Your Full Name
     title: Your Role
     url: https://github.com/yourusername
     image_url: https://github.com/yourusername.png
     page: true  # Optional: set to true if you want an author page
     socials:
       github: yourusername
       x: yourhandle  # Optional
       linkedin: yourprofile  # Optional
   ```

2. If you're using new tags, define them in `src/blog/tags.yml`:
   ```yaml
   your_tag:
     label: Your Tag Label
     permalink: /your-tag
     description: Description of what this tag represents
   ```

3. Create your blog post in one of two ways:

   a. For posts without images:
   - Create a file named `YYYY-MM-DD-title.md` in the `blog` directory
   - Example: `2024-03-20-introducing-yaama.md`

   b. For posts with images:
   - Create a new directory in `blog` named `YYYY-MM-DD-title`
   - Place an `index.md` file inside this directory
   - Put all related images in the same directory
   - Example structure:
     ```
     blog/
     └── 2024-03-20-introducing-yaama/
         ├── index.md
         ├── demo.png
         └── architecture.png
     ```

4. Add the required front matter at the top of your file:
   ```md
   ---
   title: Your Blog Post Title
   description: A brief description of your post
   slug: your-custom-url-slug
   authors: [your_name]  # Must match your ID in authors.yml
   tags: [your_tag]  # Must be defined in tags.yml
   ---
   ```

5. Write your blog content in Markdown/MDX format below the front matter.

6. To create a post summary, add the `<!-- truncate -->` marker after your introduction:
   ```md
   This is my introduction that will appear in the preview.

   <!-- truncate -->

   This is the rest of my post.
   ```

7. Reference images in your post:
   - For posts with a dedicated directory:
     ```md
     ![Alt text](./demo.png)
     ```
   - For images in the static directory:
     ```md
     ![Alt text](/img/blog/your-image.png)
     ```

The blog post will be automatically added to the website and will be available at `http://localhost:3000/blog/your-custom-url-slug` when running the development server.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Feature Branch Deployments

When you push a feature branch, it will be automatically deployed to a preview environment. The deployment will be available at:

```
{branch-name}.yaama-website-v1.pages.dev
```

For example, if your branch is named `feature/contact-us`, after 3-5 minutes the deployment will be available at:

```
feature-contact-us.yaama-website-v1.pages.dev
```


