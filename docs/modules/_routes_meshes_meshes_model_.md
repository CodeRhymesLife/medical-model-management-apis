[medical-model-manager-apis](../README.md) > ["routes/meshes/meshes.model"](../modules/_routes_meshes_meshes_model_.md)

# External module: "routes/meshes/meshes.model"

## Index

### Enumerations

* [ResourceStates](../enums/_routes_meshes_meshes_model_.resourcestates.md)

### Classes

* [GridFSFile](../classes/_routes_meshes_meshes_model_.gridfsfile.md)
* [Mesh](../classes/_routes_meshes_meshes_model_.mesh.md)
* [MeshFileCollection](../classes/_routes_meshes_meshes_model_.meshfilecollection.md)
* [OBJMTLPair](../classes/_routes_meshes_meshes_model_.objmtlpair.md)

### Variables

* [GridFSFileModel](_routes_meshes_meshes_model_.md#gridfsfilemodel)
* [LOG_TAG](_routes_meshes_meshes_model_.md#log_tag)
* [MeshFileCollectionModel](_routes_meshes_meshes_model_.md#meshfilecollectionmodel)
* [MeshModel](_routes_meshes_meshes_model_.md#meshmodel)
* [OBJMTLPairModel](_routes_meshes_meshes_model_.md#objmtlpairmodel)

---

## Variables

<a id="gridfsfilemodel"></a>

### `<Const>` GridFSFileModel

**● GridFSFileModel**: * `Model`< [GridFSFile](../classes/_routes_meshes_meshes_model_.gridfsfile.md) & `Document`> & [GridFSFile](../classes/_routes_meshes_meshes_model_.gridfsfile.md) & [GridFSFile](../classes/_routes_meshes_meshes_model_.gridfsfile.md)
* =  new GridFSFile().getModelForClass(GridFSFile, {
    schemaOptions: {
        collection: 'fs.files',
        toJSON: { virtuals: true }
    },
})

*Defined in [routes/meshes/meshes.model.ts:398](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L398)*

___
<a id="log_tag"></a>

### `<Const>` LOG_TAG

**● LOG_TAG**: *"[MeshModels.Model]"* = "[MeshModels.Model]"

*Defined in [routes/meshes/meshes.model.ts:26](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L26)*

___
<a id="meshfilecollectionmodel"></a>

### `<Const>` MeshFileCollectionModel

**● MeshFileCollectionModel**: * `Model`< [MeshFileCollection](../classes/_routes_meshes_meshes_model_.meshfilecollection.md) & `Document`> & [MeshFileCollection](../classes/_routes_meshes_meshes_model_.meshfilecollection.md) & [MeshFileCollection](../classes/_routes_meshes_meshes_model_.meshfilecollection.md)
* =  new MeshFileCollection().getModelForClass(MeshFileCollection, {
    schemaOptions: { toJSON: { virtuals: true } },
})

*Defined in [routes/meshes/meshes.model.ts:394](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L394)*

___
<a id="meshmodel"></a>

### `<Const>` MeshModel

**● MeshModel**: * `Model`< [Mesh](../classes/_routes_meshes_meshes_model_.mesh.md) & `Document`> & [Mesh](../classes/_routes_meshes_meshes_model_.mesh.md) & [Mesh](../classes/_routes_meshes_meshes_model_.mesh.md)
* =  new Mesh().getModelForClass(Mesh, {
    schemaOptions: { toJSON: { virtuals: true } },
})

*Defined in [routes/meshes/meshes.model.ts:390](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L390)*

___
<a id="objmtlpairmodel"></a>

### `<Const>` OBJMTLPairModel

**● OBJMTLPairModel**: * `Model`< [OBJMTLPair](../classes/_routes_meshes_meshes_model_.objmtlpair.md) & `Document`> & [OBJMTLPair](../classes/_routes_meshes_meshes_model_.objmtlpair.md) & [OBJMTLPair](../classes/_routes_meshes_meshes_model_.objmtlpair.md)
* =  new OBJMTLPair().getModelForClass(OBJMTLPair)

*Defined in [routes/meshes/meshes.model.ts:405](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L405)*

___

