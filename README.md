# Medical Model Management: APIs
> MedMod-APIs is a RESTful and scalable node cloud service that processes and manages medical images and 3D models. MedMod-APIs run on docker and process models programatically using Blender and Unity.

I initially developed these APIs as a backend to support a virtual reality medical imaging viewer (video below). I decided to open source this work to give others a foundational tool for medical model management and image processing. My hope is that this project supports medical research in, but not limited to, the following areas:
- Virtual and Mixed Reality
- AI / Machine Learning / Image Processing
- Medical Simulation / Training
- Surgical Planning
- Procedural Guidance
- 3D Printing

## Status
This project is unfinished but in active development. Please send me a message if you are interested in staying up to date.

## Setup
1. Install [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
2. Install [Docker Compose](https://docs.docker.com/compose/install/#install-compose)
3. Install yarn `npm install yarn -g`
4. Run setup `yarn setup`

## Running a Dev Server
`yarn start`

## Testing
`yarn test`

## Deploying a Production Server
`yarn deploy:prod`

## Videos
Here are a few applications that use this service:

[![Bosc](https://img.youtube.com/vi/H1NS6GyttLg/0.jpg)](https://www.youtube.com/watch?v=H1NS6GyttLg "Bosc")

[![Baby Z](https://i.ytimg.com/vi_webp/8SUFeplhgBI/hqdefault.webp)](https://www.youtube.com/watch?v=8SUFeplhgBI, "Baby Z")

[![EP Procedural Guidance](https://lh4.googleusercontent.com/smVXEiOO_DcIATnPBqQMlCq8VomcvzKyWJBAt28wBfXf5zdJ3gZDwnoorvMSmJlaDaqYp777XE-fcfjKgK2Z=w640-h360-n-k-rw)](https://drive.google.com/a/pyrusmedical.com/file/d/1Pss_oNLa64zbB8OdCJjUB1zj7Vb4KNYv/view?usp=drivesdk, "EP Procedural Guidance")
