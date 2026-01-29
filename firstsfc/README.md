# Vue.js Supabase App

A Vue.js application with Supabase backend for managing instruments and comments.

## Features

- **Instruments Management**: Add and view musical instruments with types
- **Comments System**: Add and view comments with names
- **Real-time Updates**: Lists refresh automatically when new items are added
- **Responsive Design**: Works on desktop and mobile devices

## Environment Variables

Make sure to set these environment variables in your Vercel deployment:

- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY`: Your Supabase public/anon key

## Database Schema

### Instruments Table
```sql
CREATE TABLE instruments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Comments Table
```sql
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Row Level Security Policies

Enable RLS and create policies for both tables:

```sql
-- Enable RLS
ALTER TABLE instruments ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public can read instruments" ON instruments FOR SELECT USING (TRUE);
CREATE POLICY "Public can read comments" ON comments FOR SELECT USING (TRUE);

-- Allow public insert (you may want to restrict this in production)
CREATE POLICY "Public can insert instruments" ON instruments FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Public can insert comments" ON comments FOR INSERT WITH CHECK (TRUE);
```

## Development

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

## Deployment

This app is configured to deploy automatically to Vercel. Make sure your environment variables are set up in your Vercel project settings.

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
