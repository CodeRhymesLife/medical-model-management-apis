# Medical Model Management APIs

[![Build Status](https://travis-ci.com/drryanjames/medical-model-management-apis.svg?branch=master)](https://travis-ci.com/drryanjames/medical-model-management-apis)

###### [Documentation](docs/README.md)

> medmod-apis is a RESTful and scalable node cloud service that processes and manages medical images and 3D models behind secure APIs. It runs on docker and uses Blender and Unity to programatically prepare uploaded data for the web, desktop, mobile, virtual reality, and mixed reality (HoloLens).

I initially developed this service as a backend to support a virtual reality medical imaging viewer I was building (video below). I decided to open source it to give others a tool for managing medical imaging data. My hope is that this project supports medical research in, but not limited to, the following areas:
- Virtual and Mixed Reality
- AI / Machine Learning / Image Processing
- Medical Simulation / Training
- Surgical Planning
- Procedural Guidance
- 3D Printing

## Architectural Diagram
This architectural diagram gives a high level depiction of this service and shows example POST and GET requests to the ```/meshes``` API
![bosc apis architecture diagram 2](https://user-images.githubusercontent.com/2764891/44445775-386b4900-a597-11e8-83ec-59e75d2ae6b4.png)

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

## Generating Documentation
`yarn docs`

## Videos
Here are a few applications that use this service:

[![Bosc](https://img.youtube.com/vi/H1NS6GyttLg/0.jpg)](https://www.youtube.com/watch?v=H1NS6GyttLg "Bosc")

[![Baby Z](https://i.ytimg.com/vi_webp/8SUFeplhgBI/hqdefault.webp)](https://www.youtube.com/watch?v=8SUFeplhgBI, "Baby Z")

[![EP Procedural Guidance](https://user-images.githubusercontent.com/2764891/44436623-1eb40c80-a56b-11e8-949d-e2d1d00ff861.png)](https://drive.google.com/a/pyrusmedical.com/file/d/1Pss_oNLa64zbB8OdCJjUB1zj7Vb4KNYv/view?usp=drivesdk, "EP Procedural Guidance")

[![IR Procedural Guidance](https://user-images.githubusercontent.com/2764891/44436599-f7f5d600-a56a-11e8-9fde-1a2373b0f44c.png)](https://drive.google.com/a/pyrusmedical.com/file/d/1lUXK06cWIYIcm8cMJcoedTnnCohcmmdV/view?usp=drivesdk, "IR Procedural Guidance")
