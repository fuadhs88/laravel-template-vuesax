(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Users/Users.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Users/Users.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      visible: false,
      title: this.$route.meta.title || '',
      data: '',
      pagination: {},
      modalDelete: false,
      modalData: '',
      modalMessage: false,
      modalMessageData: '',
      currentPage: 1
    };
  },
  mounted: function mounted() {
    this.getUsers();
  },
  watch: {
    currentPage: function currentPage(val) {
      this.getUsers('?page=' + val);
    }
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      var filtro = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      axios.get('/api/v1/users' + filtro).then(function (response) {
        _this.pagination = response.data;
        _this.data = response.data.data;
      }).then(function () {
        _this.visible = true;
      });
    },
    deleteItem: function deleteItem(data) {
      this.modalData = data;
      this.modalDelete = true;
    },
    editUser: function editUser(uuid) {
      this.$router.push("/users/".concat(uuid, "/edit"));
    },
    sendDelete: function sendDelete(uuid) {
      var _this2 = this;

      this.modalDelete = false;
      axios["delete"]('/api/v1/users/' + uuid).then(function (response) {
        _this2.modalMessage = true;
        _this2.modalMessageData = response.data.data;

        _this2.getUsers();
      })["catch"](function (error) {
        _this2.modalMessage = true;
        _this2.modalMessageData = error.response.data.data;
      });
    },
    permission: function permission(rule) {
      return checkPermission(rule);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Users/Users.vue?vue&type=template&id=2895e49c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Users/Users.vue?vue&type=template&id=2895e49c& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h4", { staticClass: "title-page" }, [_vm._v(_vm._s(_vm.title))]),
      _vm._v(" "),
      _c("div", { staticClass: "card w-full mh-100" }, [
        _vm.visible
          ? _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "d-flex flex-row w-full pb-2" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Lista de usuários")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "ml-auto" }, [
                  _vm.permission("users-store")
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.$router.push("/users/create")
                            }
                          }
                        },
                        [_vm._v("Novo usuário")]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive-sm" }, [
                _vm.data.length
                  ? _c("div", [
                      _c("table", { staticClass: "table" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.data, function(item) {
                            return _c("tr", { key: item.id }, [
                              _c("td", [_vm._v(_vm._s(item.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.email))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.username))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.tipo_usuario))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(item.profile ? item.profile.name : "")
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  {
                                    class: [
                                      "badge p-2",
                                      item.status === "ativo"
                                        ? "badge-primary"
                                        : "badge-danger"
                                    ]
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(item.status) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                !_vm.permission("users-edit") &&
                                _vm.permission("users-view")
                                  ? _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-info btn-sm",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editUser(item.uuid)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    Visualizar\n                                "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.permission("users-edit")
                                  ? _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary btn-sm",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editUser(item.uuid)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Editar\n                                "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.permission("users-destroy")
                                  ? _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-danger btn-sm",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteItem(item)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Excluir\n                                "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ])
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _vm.pagination.total > _vm.pagination.per_page
                        ? _c(
                            "div",
                            { staticClass: "pagination" },
                            [
                              _c("vs-pagination", {
                                attrs: {
                                  sizeArray: _vm.pagination.last_page,
                                  total: _vm.pagination.last_page,
                                  maxItems: 5,
                                  "prev-icon": "arrow_back",
                                  "next-icon": "arrow_forward"
                                },
                                model: {
                                  value: _vm.currentPage,
                                  callback: function($$v) {
                                    _vm.currentPage = $$v
                                  },
                                  expression: "currentPage"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ])
                  : _c("div", [_c("p", [_vm._v("Nenhum usuário cadastrado")])])
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: { title: "Excluir usuário", active: _vm.modalDelete },
          on: {
            "update:active": function($event) {
              _vm.modalDelete = $event
            }
          }
        },
        [
          _c("p", [
            _vm._v("Deseja excluir o usuário "),
            _c("b", [_vm._v(_vm._s(_vm.modalData.name))]),
            _vm._v("?")
          ]),
          _vm._v(" "),
          _c("vs-divider"),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.sendDelete(_vm.modalData.uuid)
                }
              }
            },
            [_vm._v("Sim")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-danger btn-sm",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  _vm.modalDelete = false
                }
              }
            },
            [_vm._v("Não")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: { title: "Aviso", active: _vm.modalMessage },
          on: {
            "update:active": function($event) {
              _vm.modalMessage = $event
            }
          }
        },
        [
          _c("p", [_vm._v(_vm._s(_vm.modalMessageData))]),
          _vm._v(" "),
          _c("vs-divider"),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-danger btn-sm",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  _vm.modalMessage = false
                }
              }
            },
            [_vm._v("Ok")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("Nome")]),
        _vm._v(" "),
        _c("td", [_vm._v("Email")]),
        _vm._v(" "),
        _c("td", [_vm._v("Login")]),
        _vm._v(" "),
        _c("td", [_vm._v("Tipo")]),
        _vm._v(" "),
        _c("td", [_vm._v("Perfil")]),
        _vm._v(" "),
        _c("td", [_vm._v("Status")]),
        _vm._v(" "),
        _c("td", { staticClass: "text-right" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Users/Users.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/pages/Users/Users.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_2895e49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=2895e49c& */ "./resources/js/src/views/pages/Users/Users.vue?vue&type=template&id=2895e49c&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_2895e49c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_2895e49c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Users/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Users/Users.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/Users/Users.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Users/Users.vue?vue&type=template&id=2895e49c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Users/Users.vue?vue&type=template&id=2895e49c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_2895e49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=2895e49c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Users/Users.vue?vue&type=template&id=2895e49c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_2895e49c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_2895e49c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);