[medical-model-manager-apis](../README.md) > ["routes/users/users.model"](../modules/_routes_users_users_model_.md)

# External module: "routes/users/users.model"

## Index

### Classes

* [GoogleUser](../classes/_routes_users_users_model_.googleuser.md)
* [User](../classes/_routes_users_users_model_.user.md)

### Variables

* [LOG_TAG](_routes_users_users_model_.md#log_tag)
* [UserModel](_routes_users_users_model_.md#usermodel)

---

## Variables

<a id="log_tag"></a>

### `<Const>` LOG_TAG

**● LOG_TAG**: *"[Users.Model]"* = "[Users.Model]"

*Defined in [routes/users/users.model.ts:12](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/users/users.model.ts#L12)*

___
<a id="usermodel"></a>

### `<Const>` UserModel

**● UserModel**: * `Model`< [User](../classes/_routes_users_users_model_.user.md) & `Document`> & [User](../classes/_routes_users_users_model_.user.md) & [User](../classes/_routes_users_users_model_.user.md)
* =  new User().getModelForClass(User, { schemaOptions: { toJSON: {virtuals: true } } })

*Defined in [routes/users/users.model.ts:107](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/users/users.model.ts#L107)*

___

