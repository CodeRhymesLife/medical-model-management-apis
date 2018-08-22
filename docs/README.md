
Medical Model Management: APIs
==============================

> MedMod-APIs is a RESTful and scalable node cloud service that processes and manages medical images and 3D models. MedMod-APIs run on docker and process models programatically using Blender and Unity.

I initially developed these APIs as a backend to support a virtual reality medical imaging viewer (video below). I decided to open source this work to give others a foundational tool for medical model management and image processing. My hope is that this project supports medical research in, but not limited to, the following areas:

*   Virtual and Mixed Reality
*   AI / Machine Learning / Image Processing
*   Medical Simulation / Training
*   Surgical Planning
*   Procedural Guidance
*   3D Printing

Status
------

This project is unfinished but in active development. Please send me a message if you are interested in staying up to date.

Setup
-----

1.  Install [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
2.  Install [Docker Compose](https://docs.docker.com/compose/install/#install-compose)
3.  Install yarn `npm install yarn -g`
4.  Run setup `yarn setup`

Running a Dev Server
--------------------

`yarn start`

Testing
-------

`yarn test`

Deploying a Production Server
-----------------------------

`yarn deploy:prod`

Videos
------

Here are a few applications that use this service:

[![Bosc](https://img.youtube.com/vi/H1NS6GyttLg/0.jpg)](https://www.youtube.com/watch?v=H1NS6GyttLg "Bosc")

[![Baby Z](https://i.ytimg.com/vi_webp/8SUFeplhgBI/hqdefault.webp)](https://www.youtube.com/watch?v=8SUFeplhgBI, "Baby Z")

[![EP Procedural Guidance](https://user-images.githubusercontent.com/2764891/44436623-1eb40c80-a56b-11e8-949d-e2d1d00ff861.png)](https://drive.google.com/a/pyrusmedical.com/file/d/1Pss_oNLa64zbB8OdCJjUB1zj7Vb4KNYv/view?usp=drivesdk, "EP Procedural Guidance")

[![IR Procedural Guidance](https://user-images.githubusercontent.com/2764891/44436599-f7f5d600-a56a-11e8-9fde-1a2373b0f44c.png)](https://drive.google.com/a/pyrusmedical.com/file/d/1lUXK06cWIYIcm8cMJcoedTnnCohcmmdV/view?usp=drivesdk, "IR Procedural Guidance")

## Index

### External modules

* ["config/config"](modules/_config_config_.md)
* ["config/express"](modules/_config_express_.md)
* ["config/param-validation"](modules/_config_param_validation_.md)
* ["config/settings"](modules/_config_settings_.md)
* ["config/winston"](modules/_config_winston_.md)
* ["index"](modules/_index_.md)
* ["index.routes"](modules/_index_routes_.md)
* ["routes/helpers/APIError"](modules/_routes_helpers_apierror_.md)
* ["routes/meshes/blender/blender"](modules/_routes_meshes_blender_blender_.md)
* ["routes/meshes/blender/blender.test"](modules/_routes_meshes_blender_blender_test_.md)
* ["routes/meshes/blenderMeshProcessor/blenderMeshProcessor"](modules/_routes_meshes_blendermeshprocessor_blendermeshprocessor_.md)
* ["routes/meshes/blenderMeshProcessor/blenderMeshProcessor.test"](modules/_routes_meshes_blendermeshprocessor_blendermeshprocessor_test_.md)
* ["routes/meshes/meshProcessing/meshProcessor"](modules/_routes_meshes_meshprocessing_meshprocessor_.md)
* ["routes/meshes/meshProcessing/unityProcessor"](modules/_routes_meshes_meshprocessing_unityprocessor_.md)
* ["routes/meshes/meshes.controller"](modules/_routes_meshes_meshes_controller_.md)
* ["routes/meshes/meshes.model"](modules/_routes_meshes_meshes_model_.md)
* ["routes/meshes/meshes.route"](modules/_routes_meshes_meshes_route_.md)
* ["routes/meshes/meshes.storage"](modules/_routes_meshes_meshes_storage_.md)
* ["routes/meshes/meshes.test"](modules/_routes_meshes_meshes_test_.md)
* ["routes/users/users.auth"](modules/_routes_users_users_auth_.md)
* ["routes/users/users.controller"](modules/_routes_users_users_controller_.md)
* ["routes/users/users.model"](modules/_routes_users_users_model_.md)
* ["routes/users/users.route"](modules/_routes_users_users_route_.md)
* ["routes/users/users.test"](modules/_routes_users_users_test_.md)
* ["tests/setup.test"](modules/_tests_setup_test_.md)
* ["tests/testUtils"](modules/_tests_testutils_.md)

---

