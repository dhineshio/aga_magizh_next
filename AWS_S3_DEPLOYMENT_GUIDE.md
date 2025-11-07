# AWS S3 Static Website Hosting Guide for AGA MAGIZH TRUST

## Why AWS S3 for Your Charity Website?

### Benefits:
- ✅ **Ultra-reliable** - 99.999999999% (11 9's) durability
- ✅ **Global reach** - CloudFront CDN integration
- ✅ **Cost-effective** - Pay only for what you use (~$1-5/month)
- ✅ **Professional** - Used by major organizations
- ✅ **Scalable** - Handles traffic spikes automatically
- ✅ **Secure** - Enterprise-grade security

## Prerequisites

### What You Need:
1. **AWS Account** (free tier available)
2. **Your static files** (the `out/` folder)
3. **Domain name** (optional - agamagiztrust.org)
4. **AWS CLI** (optional - for advanced users)

## Step-by-Step Deployment

### Step 1: Create AWS Account
1. Go to [aws.amazon.com](https://aws.amazon.com)
2. Click "Create an AWS Account"
3. Sign up (free tier includes 12 months free)
4. Verify your account with credit card (no charges for static hosting)

### Step 2: Create S3 Bucket
1. **Login to AWS Console**
2. **Search for "S3"** in services
3. **Click "Create bucket"**
4. **Bucket name**: `agamagiztrust-website` (must be globally unique)
5. **Region**: Choose closest to your users (e.g., Asia Pacific Mumbai)
6. **Uncheck "Block all public access"** ⚠️ Important!
7. **Check acknowledgment** about public access
8. **Click "Create bucket"**

### Step 3: Configure Bucket for Static Hosting
1. **Click on your bucket name**
2. **Go to "Properties" tab**
3. **Scroll to "Static website hosting"**
4. **Click "Edit"**
5. **Enable static website hosting**
6. **Index document**: `index.html`
7. **Error document**: `404.html`
8. **Click "Save changes"**

### Step 4: Set Bucket Policy (Make Public)
1. **Go to "Permissions" tab**
2. **Click "Bucket policy"**
3. **Add this policy** (replace YOUR-BUCKET-NAME):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::agamagiztrust-website/*"
        }
    ]
}
```

4. **Click "Save changes"**

### Step 5: Upload Your Website Files
1. **Go to "Objects" tab**
2. **Click "Upload"**
3. **Upload ALL contents** of your `out/` folder:
   - index.html
   - about/ folder (with index.html inside)
   - icons/ folder
   - _next/ folder
   - All images (logo.png, founder.jpg, etc.)
   - All other files

4. **Click "Upload"**

### Step 6: Test Your Website
1. **Go back to "Properties" tab**
2. **Find "Static website hosting" section**
3. **Copy the "Bucket website endpoint"**
4. **Example**: `http://agamagiztrust-website.s3-website.ap-south-1.amazonaws.com`
5. **Test both pages**:
   - Homepage: `http://your-endpoint/`
   - About: `http://your-endpoint/about/`

## Advanced Configuration

### Custom Domain Setup (Optional)

#### Option 1: Using Route 53 (AWS DNS)
1. **Go to Route 53** in AWS Console
2. **Create hosted zone** for your domain
3. **Create CNAME record**:
   - Name: `www.agamagiztrust.org`
   - Value: `agamagiztrust-website.s3-website.ap-south-1.amazonaws.com`
4. **Update domain nameservers** to Route 53 nameservers

#### Option 2: Using Your Existing DNS Provider
1. **Add CNAME record** in your DNS settings:
   - Name: `www`
   - Value: `agamagiztrust-website.s3-website.ap-south-1.amazonaws.com`

### SSL Certificate (HTTPS) Setup
1. **Use CloudFront** (AWS CDN) for HTTPS
2. **Go to CloudFront** in AWS Console
3. **Create distribution**
4. **Origin domain**: Your S3 website endpoint
5. **Request SSL certificate** through AWS Certificate Manager
6. **Configure custom domain** with SSL

## File Structure in S3

Your S3 bucket should look like this:
```
agamagiztrust-website/
├── index.html
├── 404.html
├── about/
│   └── index.html
├── icons/
│   ├── ic_heart.svg
│   ├── ic_handshake.svg
│   └── [all other icons]
├── _next/
│   └── [Next.js assets]
├── logo.png
├── founder.jpg
├── award_govt.jpeg
└── [all other files]
```

## Cost Estimation

### Monthly Costs (Approximate):
- **Storage**: $0.023 per GB (~$0.05 for your site)
- **Requests**: $0.0004 per 1,000 requests (~$0.40 for 1M visits)
- **Data Transfer**: $0.09 per GB (first 1GB free)
- **Total**: ~$1-5 per month for typical charity website

### Free Tier (First 12 months):
- 5GB storage
- 20,000 GET requests
- 2,000 PUT requests
- 15GB data transfer out

## Backup & Updates

### Updating Your Website:
1. **Rebuild locally**: `npm run build`
2. **Upload new files** to S3 bucket
3. **Overwrite existing files**
4. **Changes are live immediately**

### Backup Strategy:
- **Version control**: Keep source code in GitHub
- **S3 versioning**: Enable bucket versioning
- **Cross-region backup**: Optional for critical sites

## Security Best Practices

### Recommended Settings:
- ✅ **Enable bucket versioning**
- ✅ **Enable access logging**
- ✅ **Use CloudFront** for caching and security
- ✅ **Monitor with CloudWatch**
- ✅ **Regular security reviews**

## Troubleshooting

### Common Issues:
1. **"Access Denied"**: Check bucket policy and public access settings
2. **404 errors**: Verify index.html is in root and about/index.html exists
3. **Images not loading**: Check file paths and upload status
4. **CSS not working**: Ensure _next/ folder is uploaded completely

### Support Resources:
- AWS Documentation
- AWS Support (business plan)
- AWS Community Forums
- AWS re:Post

## Performance Optimization

### Recommended Enhancements:
1. **CloudFront CDN**: Global content delivery
2. **Gzip compression**: Faster loading
3. **Image optimization**: Smaller file sizes
4. **Cache headers**: Better performance

Your AGA MAGIZH TRUST website will be hosted on world-class infrastructure, providing excellent performance and reliability for your charity's online presence!