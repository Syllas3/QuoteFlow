import {
  DOCUMENT,
  getDOM
} from "./chunk-MLFPJGJO.js";
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Optional,
  Output,
  Pipe,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Version,
  booleanAttribute,
  computed,
  forkJoin,
  forwardRef,
  from,
  inject,
  isPromise,
  isSubscribable,
  makeEnvironmentProviders,
  map,
  setClassMetadata,
  signal,
  untracked,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵlistener
} from "./chunk-C7ZNULGT.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// node_modules/@angular/forms/fesm2022/forms.mjs
var _BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
};
_BaseControlValueAccessor.ɵfac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BaseControlValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_BaseControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _BaseControlValueAccessor
});
var BaseControlValueAccessor = _BaseControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var _BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
};
_BuiltInControlValueAccessor.ɵfac = /* @__PURE__ */ (() => {
  let ɵBuiltInControlValueAccessor_BaseFactory;
  return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
    return (ɵBuiltInControlValueAccessor_BaseFactory || (ɵBuiltInControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
  };
})();
_BuiltInControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _BuiltInControlValueAccessor,
  features: [ɵɵInheritDefinitionFeature]
});
var BuiltInControlValueAccessor = _BuiltInControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var _CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
};
_CheckboxControlValueAccessor.ɵfac = /* @__PURE__ */ (() => {
  let ɵCheckboxControlValueAccessor_BaseFactory;
  return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
    return (ɵCheckboxControlValueAccessor_BaseFactory || (ɵCheckboxControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
  };
})();
_CheckboxControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var CheckboxControlValueAccessor = _CheckboxControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var _DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
};
_DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(COMPOSITION_BUFFER_MODE, 8));
};
_DefaultValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [ɵɵProvidersFeature([DEFAULT_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var DefaultValueAccessor = _DefaultValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var _NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatus.ɵfac = function NgControlStatus_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgControlStatus)(ɵɵdirectiveInject(NgControl, 2));
};
_NgControlStatus.ɵdir = ɵɵdefineDirective({
  type: _NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
    }
  },
  features: [ɵɵInheritDefinitionFeature]
});
var NgControlStatus = _NgControlStatus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var _NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgControlStatusGroup)(ɵɵdirectiveInject(ControlContainer, 10));
};
_NgControlStatusGroup.ɵdir = ɵɵdefineDirective({
  type: _NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 16,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
    }
  },
  features: [ɵɵInheritDefinitionFeature]
});
var NgControlStatusGroup = _NgControlStatusGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = null;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this._status = computed(() => this.statusReactive());
    this.statusReactive = signal(void 0);
    this._pristine = computed(() => this.pristineReactive());
    this.pristineReactive = signal(true);
    this._touched = computed(() => this.touchedReactive());
    this.touchedReactive = signal(false);
    this._events = new Subject();
    this.events = this._events.asObservable();
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * The validation status of the control.
   *
   * @see {@link FormControlStatus}
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `pristine` if the user has not yet changed
   * the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `emitEvent`: When true or not supplied (the default), the `events`
   * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
   * When false, no events are emitted.
   */
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
   * `valueChanges` and `events`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = this._hasOwnPendingAsyncValidator?.emitEvent ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  /** @internal */
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var _NgForm = class _NgForm extends ControlContainer {
  /**
   * @description
   * Returns whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this.submittedReactive);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this.submittedReactive());
    this.submittedReactive = signal(false);
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
};
_NgForm.ɵfac = function NgForm_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgForm)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgForm.ɵdir = ɵɵdefineDirective({
  type: _NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: [0, "ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [ɵɵProvidersFeature([formDirectiveProvider$1]), ɵɵInheritDefinitionFeature]
});
var NgForm = _NgForm;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var _AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
};
_AbstractFormGroupDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵAbstractFormGroupDirective_BaseFactory;
  return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
    return (ɵAbstractFormGroupDirective_BaseFactory || (ɵAbstractFormGroupDirective_BaseFactory = ɵɵgetInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
  };
})();
_AbstractFormGroupDirective.ɵdir = ɵɵdefineDirective({
  type: _AbstractFormGroupDirective,
  features: [ɵɵInheritDefinitionFeature]
});
var AbstractFormGroupDirective = _AbstractFormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var _NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
};
_NgModelGroup.ɵfac = function NgModelGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgModelGroup)(ɵɵdirectiveInject(ControlContainer, 5), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
};
_NgModelGroup.ɵdir = ɵɵdefineDirective({
  type: _NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: [0, "ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [ɵɵProvidersFeature([modelGroupProvider]), ɵɵInheritDefinitionFeature]
});
var NgModelGroup = _NgModelGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var _NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
};
_NgModel.ɵfac = function NgModel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgModel)(ɵɵdirectiveInject(ControlContainer, 9), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(ChangeDetectorRef, 8), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgModel.ɵdir = ɵɵdefineDirective({
  type: _NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: [0, "disabled", "isDisabled"],
    model: [0, "ngModel", "model"],
    options: [0, "ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [ɵɵProvidersFeature([formControlBinding$1]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var NgModel = _NgModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var _ɵNgNoValidate = class _ɵNgNoValidate {
};
_ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ɵNgNoValidate)();
};
_ɵNgNoValidate.ɵdir = ɵɵdefineDirective({
  type: _ɵNgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
var ɵNgNoValidate = _ɵNgNoValidate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var _NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_NumberValueAccessor.ɵfac = /* @__PURE__ */ (() => {
  let ɵNumberValueAccessor_BaseFactory;
  return function NumberValueAccessor_Factory(__ngFactoryType__) {
    return (ɵNumberValueAccessor_BaseFactory || (ɵNumberValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
  };
})();
_NumberValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [ɵɵProvidersFeature([NUMBER_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var NumberValueAccessor = _NumberValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var _RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
};
_RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RadioControlRegistry)();
};
_RadioControlRegistry.ɵprov = ɵɵdefineInjectable({
  token: _RadioControlRegistry,
  factory: _RadioControlRegistry.ɵfac,
  providedIn: "root"
});
var RadioControlRegistry = _RadioControlRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
};
_RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RadioControlValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(RadioControlRegistry), ɵɵdirectiveInject(Injector));
};
_RadioControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var RadioControlValueAccessor = _RadioControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var _RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_RangeValueAccessor.ɵfac = /* @__PURE__ */ (() => {
  let ɵRangeValueAccessor_BaseFactory;
  return function RangeValueAccessor_Factory(__ngFactoryType__) {
    return (ɵRangeValueAccessor_BaseFactory || (ɵRangeValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
  };
})();
_RangeValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [ɵɵProvidersFeature([RANGE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var RangeValueAccessor = _RangeValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var _FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
};
_FormControlDirective._ngModelWarningSentOnce = false;
_FormControlDirective.ɵfac = function FormControlDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormControlDirective)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormControlDirective.ɵdir = ɵɵdefineDirective({
  type: _FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    form: [0, "formControl", "form"],
    isDisabled: [0, "disabled", "isDisabled"],
    model: [0, "ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [ɵɵProvidersFeature([formControlBinding]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var FormControlDirective = _FormControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var _FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this._submittedReactive);
  }
  // TODO(atscott): Remove once invalid API usage is cleaned up internally
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this._submittedReactive());
    this._submittedReactive = signal(false);
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this._submittedReactive.set(true);
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this._submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
};
_FormGroupDirective.ɵfac = function FormGroupDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormGroupDirective)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormGroupDirective.ɵdir = ɵɵdefineDirective({
  type: _FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: [0, "formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [ɵɵProvidersFeature([formDirectiveProvider]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var FormGroupDirective = _FormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var _FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
};
_FormGroupName.ɵfac = function FormGroupName_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormGroupName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormGroupName.ɵdir = ɵɵdefineDirective({
  type: _FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: [0, "formGroupName", "name"]
  },
  features: [ɵɵProvidersFeature([formGroupNameProvider]), ɵɵInheritDefinitionFeature]
});
var FormGroupName = _FormGroupName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var _FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
};
_FormArrayName.ɵfac = function FormArrayName_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormArrayName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormArrayName.ɵdir = ɵɵdefineDirective({
  type: _FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: [0, "formArrayName", "name"]
  },
  features: [ɵɵProvidersFeature([formArrayNameProvider]), ɵɵInheritDefinitionFeature]
});
var FormArrayName = _FormArrayName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var _FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException(this.name);
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
};
_FormControlName._ngModelWarningSentOnce = false;
_FormControlName.ɵfac = function FormControlName_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormControlName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};
_FormControlName.ɵdir = ɵɵdefineDirective({
  type: _FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    name: [0, "formControlName", "name"],
    isDisabled: [0, "disabled", "isDisabled"],
    model: [0, "ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [ɵɵProvidersFeature([controlNameBinding]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var FormControlName = _FormControlName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var _SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
};
_SelectControlValueAccessor.ɵfac = /* @__PURE__ */ (() => {
  let ɵSelectControlValueAccessor_BaseFactory;
  return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
    return (ɵSelectControlValueAccessor_BaseFactory || (ɵSelectControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
  };
})();
_SelectControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [ɵɵProvidersFeature([SELECT_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var SelectControlValueAccessor = _SelectControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_NgSelectOption.ɵfac = function NgSelectOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgSelectOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SelectControlValueAccessor, 9));
};
_NgSelectOption.ɵdir = ɵɵdefineDirective({
  type: _NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var NgSelectOption = _NgSelectOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var _SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
};
_SelectMultipleControlValueAccessor.ɵfac = /* @__PURE__ */ (() => {
  let ɵSelectMultipleControlValueAccessor_BaseFactory;
  return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
    return (ɵSelectMultipleControlValueAccessor_BaseFactory || (ɵSelectMultipleControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
  };
})();
_SelectMultipleControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [ɵɵProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var SelectMultipleControlValueAccessor = _SelectMultipleControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _ɵNgSelectMultipleOption = class _ɵNgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ɵNgSelectMultipleOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SelectMultipleControlValueAccessor, 9));
};
_ɵNgSelectMultipleOption.ɵdir = ɵɵdefineDirective({
  type: _ɵNgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var ɵNgSelectMultipleOption = _ɵNgSelectMultipleOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var _AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
};
_AbstractValidatorDirective.ɵfac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbstractValidatorDirective)();
};
_AbstractValidatorDirective.ɵdir = ɵɵdefineDirective({
  type: _AbstractValidatorDirective,
  features: [ɵɵNgOnChangesFeature]
});
var AbstractValidatorDirective = _AbstractValidatorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var _MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
};
_MaxValidator.ɵfac = /* @__PURE__ */ (() => {
  let ɵMaxValidator_BaseFactory;
  return function MaxValidator_Factory(__ngFactoryType__) {
    return (ɵMaxValidator_BaseFactory || (ɵMaxValidator_BaseFactory = ɵɵgetInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
  };
})();
_MaxValidator.ɵdir = ɵɵdefineDirective({
  type: _MaxValidator,
  selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("max", ctx._enabled ? ctx.max : null);
    }
  },
  inputs: {
    max: "max"
  },
  features: [ɵɵProvidersFeature([MAX_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var MaxValidator = _MaxValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var _MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
};
_MinValidator.ɵfac = /* @__PURE__ */ (() => {
  let ɵMinValidator_BaseFactory;
  return function MinValidator_Factory(__ngFactoryType__) {
    return (ɵMinValidator_BaseFactory || (ɵMinValidator_BaseFactory = ɵɵgetInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
  };
})();
_MinValidator.ɵdir = ɵɵdefineDirective({
  type: _MinValidator,
  selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("min", ctx._enabled ? ctx.min : null);
    }
  },
  inputs: {
    min: "min"
  },
  features: [ɵɵProvidersFeature([MIN_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var MinValidator = _MinValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var _RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_RequiredValidator.ɵfac = /* @__PURE__ */ (() => {
  let ɵRequiredValidator_BaseFactory;
  return function RequiredValidator_Factory(__ngFactoryType__) {
    return (ɵRequiredValidator_BaseFactory || (ɵRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
  };
})();
_RequiredValidator.ɵdir = ɵɵdefineDirective({
  type: _RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("required", ctx._enabled ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [ɵɵProvidersFeature([REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var RequiredValidator = _RequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var _CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
};
_CheckboxRequiredValidator.ɵfac = /* @__PURE__ */ (() => {
  let ɵCheckboxRequiredValidator_BaseFactory;
  return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
    return (ɵCheckboxRequiredValidator_BaseFactory || (ɵCheckboxRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
  };
})();
_CheckboxRequiredValidator.ɵdir = ɵɵdefineDirective({
  type: _CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("required", ctx._enabled ? "" : null);
    }
  },
  features: [ɵɵProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var CheckboxRequiredValidator = _CheckboxRequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var _EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_EmailValidator.ɵfac = /* @__PURE__ */ (() => {
  let ɵEmailValidator_BaseFactory;
  return function EmailValidator_Factory(__ngFactoryType__) {
    return (ɵEmailValidator_BaseFactory || (ɵEmailValidator_BaseFactory = ɵɵgetInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
  };
})();
_EmailValidator.ɵdir = ɵɵdefineDirective({
  type: _EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [ɵɵProvidersFeature([EMAIL_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var EmailValidator = _EmailValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var _MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
};
_MinLengthValidator.ɵfac = /* @__PURE__ */ (() => {
  let ɵMinLengthValidator_BaseFactory;
  return function MinLengthValidator_Factory(__ngFactoryType__) {
    return (ɵMinLengthValidator_BaseFactory || (ɵMinLengthValidator_BaseFactory = ɵɵgetInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
  };
})();
_MinLengthValidator.ɵdir = ɵɵdefineDirective({
  type: _MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("minlength", ctx._enabled ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [ɵɵProvidersFeature([MIN_LENGTH_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var MinLengthValidator = _MinLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var _MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
};
_MaxLengthValidator.ɵfac = /* @__PURE__ */ (() => {
  let ɵMaxLengthValidator_BaseFactory;
  return function MaxLengthValidator_Factory(__ngFactoryType__) {
    return (ɵMaxLengthValidator_BaseFactory || (ɵMaxLengthValidator_BaseFactory = ɵɵgetInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
  };
})();
_MaxLengthValidator.ɵdir = ɵɵdefineDirective({
  type: _MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("maxlength", ctx._enabled ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [ɵɵProvidersFeature([MAX_LENGTH_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var MaxLengthValidator = _MaxLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var _PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
};
_PatternValidator.ɵfac = /* @__PURE__ */ (() => {
  let ɵPatternValidator_BaseFactory;
  return function PatternValidator_Factory(__ngFactoryType__) {
    return (ɵPatternValidator_BaseFactory || (ɵPatternValidator_BaseFactory = ɵɵgetInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
  };
})();
_PatternValidator.ɵdir = ɵɵdefineDirective({
  type: _PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("pattern", ctx._enabled ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [ɵɵProvidersFeature([PATTERN_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var PatternValidator = _PatternValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var _ɵInternalFormsSharedModule = class _ɵInternalFormsSharedModule {
};
_ɵInternalFormsSharedModule.ɵfac = function ɵInternalFormsSharedModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ɵInternalFormsSharedModule)();
};
_ɵInternalFormsSharedModule.ɵmod = ɵɵdefineNgModule({
  type: _ɵInternalFormsSharedModule,
  declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
  exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
});
_ɵInternalFormsSharedModule.ɵinj = ɵɵdefineInjector({});
var ɵInternalFormsSharedModule = _ɵInternalFormsSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵInternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var _FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
};
_FormBuilder.ɵfac = function FormBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormBuilder)();
};
_FormBuilder.ɵprov = ɵɵdefineInjectable({
  token: _FormBuilder,
  factory: _FormBuilder.ɵfac,
  providedIn: "root"
});
var FormBuilder = _FormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NonNullableFormBuilder = class _NonNullableFormBuilder {
};
_NonNullableFormBuilder.ɵfac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NonNullableFormBuilder)();
};
_NonNullableFormBuilder.ɵprov = ɵɵdefineInjectable({
  token: _NonNullableFormBuilder,
  factory: () => (() => inject(FormBuilder).nonNullable)(),
  providedIn: "root"
});
var NonNullableFormBuilder = _NonNullableFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var _UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
};
_UntypedFormBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵUntypedFormBuilder_BaseFactory;
  return function UntypedFormBuilder_Factory(__ngFactoryType__) {
    return (ɵUntypedFormBuilder_BaseFactory || (ɵUntypedFormBuilder_BaseFactory = ɵɵgetInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
  };
})();
_UntypedFormBuilder.ɵprov = ɵɵdefineInjectable({
  token: _UntypedFormBuilder,
  factory: _UntypedFormBuilder.ɵfac,
  providedIn: "root"
});
var UntypedFormBuilder = _UntypedFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("18.2.0");
var _FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_FormsModule.ɵfac = function FormsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormsModule)();
};
_FormsModule.ɵmod = ɵɵdefineNgModule({
  type: _FormsModule,
  declarations: [NgModel, NgModelGroup, NgForm],
  exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
});
_FormsModule.ɵinj = ɵɵdefineInjector({
  imports: [ɵInternalFormsSharedModule]
});
var FormsModule = _FormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var _ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_ReactiveFormsModule.ɵfac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReactiveFormsModule)();
};
_ReactiveFormsModule.ɵmod = ɵɵdefineNgModule({
  type: _ReactiveFormsModule,
  declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
  exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
});
_ReactiveFormsModule.ɵinj = ɵɵdefineInjector({
  imports: [ɵInternalFormsSharedModule]
});
var ReactiveFormsModule = _ReactiveFormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/ngx-mask/fesm2022/ngx-mask.mjs
var NGX_MASK_CONFIG = new InjectionToken("ngx-mask config");
var NEW_CONFIG = new InjectionToken("new ngx-mask config");
var INITIAL_CONFIG = new InjectionToken("initial ngx-mask config");
var initialConfig = {
  suffix: "",
  prefix: "",
  thousandSeparator: " ",
  decimalMarker: [".", ","],
  clearIfNotMatch: false,
  showTemplate: false,
  showMaskTyped: false,
  placeHolderCharacter: "_",
  dropSpecialCharacters: true,
  hiddenInput: void 0,
  shownMaskExpression: "",
  separatorLimit: "",
  allowNegativeNumbers: false,
  validation: true,
  specialCharacters: ["-", "/", "(", ")", ".", ":", " ", "+", ",", "@", "[", "]", '"', "'"],
  leadZeroDateTime: false,
  apm: false,
  leadZero: false,
  keepCharacterPositions: false,
  triggerOnMaskChange: false,
  inputTransformFn: (value) => value,
  outputTransformFn: (value) => value,
  maskFilled: new EventEmitter(),
  patterns: {
    "0": {
      pattern: new RegExp("\\d")
    },
    "9": {
      pattern: new RegExp("\\d"),
      optional: true
    },
    X: {
      pattern: new RegExp("\\d"),
      symbol: "*"
    },
    A: {
      pattern: new RegExp("[a-zA-Z0-9]")
    },
    S: {
      pattern: new RegExp("[a-zA-Z]")
    },
    U: {
      pattern: new RegExp("[A-Z]")
    },
    L: {
      pattern: new RegExp("[a-z]")
    },
    d: {
      pattern: new RegExp("\\d")
    },
    m: {
      pattern: new RegExp("\\d")
    },
    M: {
      pattern: new RegExp("\\d")
    },
    H: {
      pattern: new RegExp("\\d")
    },
    h: {
      pattern: new RegExp("\\d")
    },
    s: {
      pattern: new RegExp("\\d")
    }
  }
};
var timeMasks = [
  "Hh:m0:s0",
  "Hh:m0",
  "m0:s0"
  /* MaskExpression.MINUTES_SECONDS */
];
var withoutValidation = [
  "percent",
  "Hh",
  "s0",
  "m0",
  "separator",
  "d0/M0/0000",
  "d0/M0",
  "d0",
  "M0"
  /* MaskExpression.MONTHS */
];
var _NgxMaskApplierService = class _NgxMaskApplierService {
  constructor() {
    this._config = inject(NGX_MASK_CONFIG);
    this.dropSpecialCharacters = this._config.dropSpecialCharacters;
    this.hiddenInput = this._config.hiddenInput;
    this.clearIfNotMatch = this._config.clearIfNotMatch;
    this.specialCharacters = this._config.specialCharacters;
    this.patterns = this._config.patterns;
    this.prefix = this._config.prefix;
    this.suffix = this._config.suffix;
    this.thousandSeparator = this._config.thousandSeparator;
    this.decimalMarker = this._config.decimalMarker;
    this.showMaskTyped = this._config.showMaskTyped;
    this.placeHolderCharacter = this._config.placeHolderCharacter;
    this.validation = this._config.validation;
    this.separatorLimit = this._config.separatorLimit;
    this.allowNegativeNumbers = this._config.allowNegativeNumbers;
    this.leadZeroDateTime = this._config.leadZeroDateTime;
    this.leadZero = this._config.leadZero;
    this.apm = this._config.apm;
    this.inputTransformFn = this._config.inputTransformFn;
    this.outputTransformFn = this._config.outputTransformFn;
    this.keepCharacterPositions = this._config.keepCharacterPositions;
    this._shift = /* @__PURE__ */ new Set();
    this.plusOnePosition = false;
    this.maskExpression = "";
    this.actualValue = "";
    this.showKeepCharacterExp = "";
    this.shownMaskExpression = "";
    this.deletedSpecialCharacter = false;
    this._formatWithSeparators = (str, thousandSeparatorChar, decimalChars, precision) => {
      let x = [];
      let decimalChar = "";
      if (Array.isArray(decimalChars)) {
        const regExp = new RegExp(decimalChars.map((v) => "[\\^$.|?*+()".indexOf(v) >= 0 ? `\\${v}` : v).join("|"));
        x = str.split(regExp);
        decimalChar = str.match(regExp)?.[0] ?? "";
      } else {
        x = str.split(decimalChars);
        decimalChar = decimalChars;
      }
      const decimals = x.length > 1 ? `${decimalChar}${x[1]}` : "";
      let res = x[0] ?? "";
      const separatorLimit = this.separatorLimit.replace(
        /\s/g,
        ""
        /* MaskExpression.EMPTY_STRING */
      );
      if (separatorLimit && +separatorLimit) {
        if (res[0] === "-") {
          res = `-${res.slice(1, res.length).slice(0, separatorLimit.length)}`;
        } else {
          res = res.slice(0, separatorLimit.length);
        }
      }
      const rgx = /(\d+)(\d{3})/;
      while (thousandSeparatorChar && rgx.test(res)) {
        res = res.replace(rgx, "$1" + thousandSeparatorChar + "$2");
      }
      if (precision === void 0) {
        return res + decimals;
      } else if (precision === 0) {
        return res;
      }
      return res + decimals.substring(0, precision + 1);
    };
    this.percentage = (str) => {
      const sanitizedStr = str.replace(",", ".");
      const value = Number(this.allowNegativeNumbers && str.includes(
        "-"
        /* MaskExpression.MINUS */
      ) ? sanitizedStr.slice(1, str.length) : sanitizedStr);
      return !isNaN(value) && value >= 0 && value <= 100;
    };
    this.getPrecision = (maskExpression) => {
      const x = maskExpression.split(
        "."
        /* MaskExpression.DOT */
      );
      if (x.length > 1) {
        return Number(x[x.length - 1]);
      }
      return Infinity;
    };
    this.checkAndRemoveSuffix = (inputValue) => {
      for (let i = this.suffix?.length - 1; i >= 0; i--) {
        const substr = this.suffix.substring(i, this.suffix?.length);
        if (inputValue.includes(substr) && i !== this.suffix?.length - 1 && (i - 1 < 0 || !inputValue.includes(this.suffix.substring(i - 1, this.suffix?.length)))) {
          return inputValue.replace(
            substr,
            ""
            /* MaskExpression.EMPTY_STRING */
          );
        }
      }
      return inputValue;
    };
    this.checkInputPrecision = (inputValue, precision, decimalMarker) => {
      if (precision < Infinity) {
        if (Array.isArray(decimalMarker)) {
          const marker = decimalMarker.find((dm) => dm !== this.thousandSeparator);
          decimalMarker = marker ? marker : decimalMarker[0];
        }
        const precisionRegEx = new RegExp(this._charToRegExpExpression(decimalMarker) + `\\d{${precision}}.*$`);
        const precisionMatch = inputValue.match(precisionRegEx);
        const precisionMatchLength = (precisionMatch && precisionMatch[0]?.length) ?? 0;
        if (precisionMatchLength - 1 > precision) {
          const diff = precisionMatchLength - 1 - precision;
          inputValue = inputValue.substring(0, inputValue.length - diff);
        }
        if (precision === 0 && this._compareOrIncludes(inputValue[inputValue.length - 1], decimalMarker, this.thousandSeparator)) {
          inputValue = inputValue.substring(0, inputValue.length - 1);
        }
      }
      return inputValue;
    };
  }
  applyMaskWithPattern(inputValue, maskAndPattern) {
    const [mask, customPattern] = maskAndPattern;
    this.customPattern = customPattern;
    return this.applyMask(inputValue, mask);
  }
  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false, cb = () => {
  }) {
    if (!maskExpression || typeof inputValue !== "string") {
      return "";
    }
    let cursor = 0;
    let result = "";
    let multi = false;
    let backspaceShift = false;
    let shift = 1;
    let stepBack = false;
    if (inputValue.slice(0, this.prefix.length) === this.prefix) {
      inputValue = inputValue.slice(this.prefix.length, inputValue.length);
    }
    if (!!this.suffix && inputValue?.length > 0) {
      inputValue = this.checkAndRemoveSuffix(inputValue);
    }
    if (inputValue === "(" && this.prefix) {
      inputValue = "";
    }
    const inputArray = inputValue.toString().split(
      ""
      /* MaskExpression.EMPTY_STRING */
    );
    if (this.allowNegativeNumbers && inputValue.slice(cursor, cursor + 1) === "-") {
      result += inputValue.slice(cursor, cursor + 1);
    }
    if (maskExpression === "IP") {
      const valuesIP = inputValue.split(
        "."
        /* MaskExpression.DOT */
      );
      this.ipError = this._validIP(valuesIP);
      maskExpression = "099.099.099.099";
    }
    const arr = [];
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i]?.match("\\d")) {
        arr.push(
          inputValue[i] ?? ""
          /* MaskExpression.EMPTY_STRING */
        );
      }
    }
    if (maskExpression === "CPF_CNPJ") {
      this.cpfCnpjError = arr.length !== 11 && arr.length !== 14;
      if (arr.length > 11) {
        maskExpression = "00.000.000/0000-00";
      } else {
        maskExpression = "000.000.000-00";
      }
    }
    if (maskExpression.startsWith(
      "percent"
      /* MaskExpression.PERCENT */
    )) {
      if (inputValue.match("[a-z]|[A-Z]") || // eslint-disable-next-line no-useless-escape
      inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/) && !backspaced) {
        inputValue = this._stripToDecimal(inputValue);
        const precision = this.getPrecision(maskExpression);
        inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
      }
      const decimalMarker = typeof this.decimalMarker === "string" ? this.decimalMarker : ".";
      if (inputValue.indexOf(decimalMarker) > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf(decimalMarker)))) {
        let base = inputValue.substring(0, inputValue.indexOf(decimalMarker) - 1);
        if (this.allowNegativeNumbers && inputValue.slice(cursor, cursor + 1) === "-" && !backspaced) {
          base = inputValue.substring(0, inputValue.indexOf(decimalMarker));
        }
        inputValue = `${base}${inputValue.substring(inputValue.indexOf(decimalMarker), inputValue.length)}`;
      }
      let value = "";
      this.allowNegativeNumbers && inputValue.slice(cursor, cursor + 1) === "-" ? value = `${"-"}${inputValue.slice(cursor + 1, cursor + inputValue.length)}` : value = inputValue;
      if (this.percentage(value)) {
        result = this._splitPercentZero(inputValue);
      } else {
        result = this._splitPercentZero(inputValue.substring(0, inputValue.length - 1));
      }
    } else if (maskExpression.startsWith(
      "separator"
      /* MaskExpression.SEPARATOR */
    )) {
      if (inputValue.match("[wа-яА-Я]") || inputValue.match("[ЁёА-я]") || inputValue.match("[a-z]|[A-Z]") || inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\]:";<>.?/]/) || inputValue.match("[^A-Za-z0-9,]")) {
        inputValue = this._stripToDecimal(inputValue);
      }
      const precision = this.getPrecision(maskExpression);
      const decimalMarker = Array.isArray(this.decimalMarker) ? "." : this.decimalMarker;
      if (precision === 0) {
        inputValue = this.allowNegativeNumbers ? inputValue.length > 2 && inputValue[0] === "-" && inputValue[1] === "0" && inputValue[2] !== this.thousandSeparator && inputValue[2] !== "," && inputValue[2] !== "." ? "-" + inputValue.slice(2, inputValue.length) : inputValue[0] === "0" && inputValue.length > 1 && inputValue[1] !== this.thousandSeparator && inputValue[1] !== "," && inputValue[1] !== "." ? inputValue.slice(1, inputValue.length) : inputValue : inputValue.length > 1 && inputValue[0] === "0" && inputValue[1] !== this.thousandSeparator && inputValue[1] !== "," && inputValue[1] !== "." ? inputValue.slice(1, inputValue.length) : inputValue;
      } else {
        if (inputValue[0] === decimalMarker && inputValue.length > 1) {
          inputValue = "0" + inputValue.slice(0, inputValue.length + 1);
          this.plusOnePosition = true;
        }
        if (inputValue[0] === "0" && inputValue[1] !== decimalMarker && inputValue[1] !== this.thousandSeparator) {
          inputValue = inputValue.length > 1 ? inputValue.slice(0, 1) + decimalMarker + inputValue.slice(1, inputValue.length + 1) : inputValue;
          this.plusOnePosition = true;
        }
        if (this.allowNegativeNumbers && inputValue[0] === "-" && (inputValue[1] === decimalMarker || inputValue[1] === "0")) {
          inputValue = inputValue[1] === decimalMarker && inputValue.length > 2 ? inputValue.slice(0, 1) + "0" + inputValue.slice(1, inputValue.length) : inputValue[1] === "0" && inputValue.length > 2 && inputValue[2] !== decimalMarker ? inputValue.slice(0, 2) + decimalMarker + inputValue.slice(2, inputValue.length) : inputValue;
          this.plusOnePosition = true;
        }
      }
      if (backspaced) {
        const inputValueAfterZero = inputValue.slice(this._findFirstNonZeroDigitIndex(inputValue), inputValue.length);
        const positionOfZeroOrDecimalMarker = inputValue[position] === "0" || inputValue[position] === decimalMarker;
        const zeroIndexNumberZero = inputValue[0] === "0";
        const zeroIndexMinus = inputValue[0] === "-";
        const zeroIndexThousand = inputValue[0] === this.thousandSeparator;
        const firstIndexDecimalMarker = inputValue[1] === decimalMarker;
        const firstIndexNumberZero = inputValue[1] === "0";
        const secondIndexDecimalMarker = inputValue[2] === decimalMarker;
        if (zeroIndexNumberZero && firstIndexDecimalMarker && positionOfZeroOrDecimalMarker && position < 2) {
          inputValue = inputValueAfterZero;
        }
        if (zeroIndexMinus && firstIndexNumberZero && secondIndexDecimalMarker && positionOfZeroOrDecimalMarker && position < 3) {
          inputValue = "-" + inputValueAfterZero;
        }
        if (inputValueAfterZero !== "-" && (position === 0 && (zeroIndexNumberZero || zeroIndexThousand) || this.allowNegativeNumbers && position === 1 && zeroIndexMinus && !firstIndexNumberZero)) {
          inputValue = zeroIndexMinus ? "-" + inputValueAfterZero : inputValueAfterZero;
        }
      }
      const thousandSeparatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);
      let invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(thousandSeparatorCharEscaped, "");
      if (Array.isArray(this.decimalMarker)) {
        for (const marker of this.decimalMarker) {
          invalidChars = invalidChars.replace(
            this._charToRegExpExpression(marker),
            ""
            /* MaskExpression.EMPTY_STRING */
          );
        }
      } else {
        invalidChars = invalidChars.replace(this._charToRegExpExpression(this.decimalMarker), "");
      }
      const invalidCharRegexp = new RegExp("[" + invalidChars + "]");
      if (inputValue.match(invalidCharRegexp)) {
        inputValue = inputValue.substring(0, inputValue.length - 1);
      }
      inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
      const strForSep = inputValue.replace(new RegExp(thousandSeparatorCharEscaped, "g"), "");
      result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, precision);
      const commaShift = result.indexOf(
        ","
        /* MaskExpression.COMMA */
      ) - inputValue.indexOf(
        ","
        /* MaskExpression.COMMA */
      );
      const shiftStep = result.length - inputValue.length;
      if (result[position - 1] === this.thousandSeparator && this.prefix && backspaced) {
        position = position - 1;
      } else if (shiftStep > 0 && result[position] !== this.thousandSeparator) {
        backspaceShift = true;
        let _shift = 0;
        do {
          this._shift.add(position + _shift);
          _shift++;
        } while (_shift < shiftStep);
      } else if (result[position - 1] === this.decimalMarker || shiftStep === -4 || shiftStep === -3 || result[position] === this.thousandSeparator) {
        this._shift.clear();
        this._shift.add(position - 1);
      } else if (commaShift !== 0 && position > 0 && !(result.indexOf(
        ","
        /* MaskExpression.COMMA */
      ) >= position && position > 3) || !(result.indexOf(
        "."
        /* MaskExpression.DOT */
      ) >= position && position > 3) && shiftStep <= 0) {
        this._shift.clear();
        backspaceShift = true;
        shift = shiftStep;
        position += shiftStep;
        this._shift.add(position);
      } else {
        this._shift.clear();
      }
    } else {
      for (let i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i] ?? "") {
        if (cursor === maskExpression.length) {
          break;
        }
        const symbolStarInPattern = "*" in this.patterns;
        if (this._checkSymbolMask(
          inputSymbol,
          maskExpression[cursor] ?? ""
          /* MaskExpression.EMPTY_STRING */
        ) && maskExpression[cursor + 1] === "?") {
          result += inputSymbol;
          cursor += 2;
        } else if (maskExpression[cursor + 1] === "*" && multi && this._checkSymbolMask(
          inputSymbol,
          maskExpression[cursor + 2] ?? ""
          /* MaskExpression.EMPTY_STRING */
        )) {
          result += inputSymbol;
          cursor += 3;
          multi = false;
        } else if (this._checkSymbolMask(
          inputSymbol,
          maskExpression[cursor] ?? ""
          /* MaskExpression.EMPTY_STRING */
        ) && maskExpression[cursor + 1] === "*" && !symbolStarInPattern) {
          result += inputSymbol;
          multi = true;
        } else if (maskExpression[cursor + 1] === "?" && this._checkSymbolMask(
          inputSymbol,
          maskExpression[cursor + 2] ?? ""
          /* MaskExpression.EMPTY_STRING */
        )) {
          result += inputSymbol;
          cursor += 3;
        } else if (this._checkSymbolMask(
          inputSymbol,
          maskExpression[cursor] ?? ""
          /* MaskExpression.EMPTY_STRING */
        )) {
          if (maskExpression[cursor] === "H") {
            if (this.apm ? Number(inputSymbol) > 9 : Number(inputSymbol) > 2) {
              position = !this.leadZeroDateTime ? position + 1 : position;
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += "0";
              }
              continue;
            }
          }
          if (maskExpression[cursor] === "h") {
            if (this.apm ? result.length === 1 && Number(result) > 1 || result === "1" && Number(inputSymbol) > 2 || inputValue.slice(cursor - 1, cursor).length === 1 && Number(inputValue.slice(cursor - 1, cursor)) > 2 || inputValue.slice(cursor - 1, cursor) === "1" && Number(inputSymbol) > 2 : result === "2" && Number(inputSymbol) > 3 || (result.slice(cursor - 2, cursor) === "2" || result.slice(cursor - 3, cursor) === "2" || result.slice(cursor - 4, cursor) === "2" || result.slice(cursor - 1, cursor) === "2") && Number(inputSymbol) > 3 && cursor > 10) {
              position = position + 1;
              cursor += 1;
              i--;
              continue;
            }
          }
          if (maskExpression[cursor] === "m" || maskExpression[cursor] === "s") {
            if (Number(inputSymbol) > 5) {
              position = !this.leadZeroDateTime ? position + 1 : position;
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += "0";
              }
              continue;
            }
          }
          const daysCount = 31;
          const inputValueCursor = inputValue[cursor];
          const inputValueCursorPlusOne = inputValue[cursor + 1];
          const inputValueCursorPlusTwo = inputValue[cursor + 2];
          const inputValueCursorMinusOne = inputValue[cursor - 1];
          const inputValueCursorMinusTwo = inputValue[cursor - 2];
          const inputValueSliceMinusThreeMinusOne = inputValue.slice(cursor - 3, cursor - 1);
          const inputValueSliceMinusOnePlusOne = inputValue.slice(cursor - 1, cursor + 1);
          const inputValueSliceCursorPlusTwo = inputValue.slice(cursor, cursor + 2);
          const inputValueSliceMinusTwoCursor = inputValue.slice(cursor - 2, cursor);
          if (maskExpression[cursor] === "d") {
            const maskStartWithMonth = maskExpression.slice(0, 2) === "M0";
            const startWithMonthInput = maskExpression.slice(0, 2) === "M0" && this.specialCharacters.includes(inputValueCursorMinusTwo);
            if (Number(inputSymbol) > 3 && this.leadZeroDateTime || !maskStartWithMonth && (Number(inputValueSliceCursorPlusTwo) > daysCount || Number(inputValueSliceMinusOnePlusOne) > daysCount || this.specialCharacters.includes(inputValueCursorPlusOne)) || (startWithMonthInput ? Number(inputValueSliceMinusOnePlusOne) > daysCount || !this.specialCharacters.includes(inputValueCursor) && this.specialCharacters.includes(inputValueCursorPlusTwo) || this.specialCharacters.includes(inputValueCursor) : Number(inputValueSliceCursorPlusTwo) > daysCount || this.specialCharacters.includes(inputValueCursorPlusOne))) {
              position = !this.leadZeroDateTime ? position + 1 : position;
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += "0";
              }
              continue;
            }
          }
          if (maskExpression[cursor] === "M") {
            const monthsCount = 12;
            const withoutDays = cursor === 0 && (Number(inputSymbol) > 2 || Number(inputValueSliceCursorPlusTwo) > monthsCount || this.specialCharacters.includes(inputValueCursorPlusOne) && !backspaced);
            const specialChart = maskExpression.slice(cursor + 2, cursor + 3);
            const day1monthInput = inputValueSliceMinusThreeMinusOne.includes(specialChart) && maskExpression.includes("d0") && (this.specialCharacters.includes(inputValueCursorMinusTwo) && Number(inputValueSliceMinusOnePlusOne) > monthsCount && !this.specialCharacters.includes(inputValueCursor) || this.specialCharacters.includes(inputValueCursor));
            const day2monthInput = Number(inputValueSliceMinusThreeMinusOne) <= daysCount && !this.specialCharacters.includes(inputValueSliceMinusThreeMinusOne) && this.specialCharacters.includes(inputValueCursorMinusOne) && (Number(inputValueSliceCursorPlusTwo) > monthsCount || this.specialCharacters.includes(inputValueCursorPlusOne));
            const day2monthInputDot = Number(inputValueSliceCursorPlusTwo) > monthsCount && cursor === 5 || this.specialCharacters.includes(inputValueCursorPlusOne) && cursor === 5;
            const day1monthPaste = Number(inputValueSliceMinusThreeMinusOne) > daysCount && !this.specialCharacters.includes(inputValueSliceMinusThreeMinusOne) && !this.specialCharacters.includes(inputValueSliceMinusTwoCursor) && Number(inputValueSliceMinusTwoCursor) > monthsCount && maskExpression.includes("d0");
            const day2monthPaste = Number(inputValueSliceMinusThreeMinusOne) <= daysCount && !this.specialCharacters.includes(inputValueSliceMinusThreeMinusOne) && !this.specialCharacters.includes(inputValueCursorMinusOne) && Number(inputValueSliceMinusOnePlusOne) > monthsCount;
            if (Number(inputSymbol) > 1 && this.leadZeroDateTime || withoutDays || day1monthInput || day2monthPaste || day1monthPaste || day2monthInput || day2monthInputDot && !this.leadZeroDateTime) {
              position = !this.leadZeroDateTime ? position + 1 : position;
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += "0";
              }
              continue;
            }
          }
          result += inputSymbol;
          cursor++;
        } else if (this.specialCharacters.includes(inputSymbol) && maskExpression[cursor] === inputSymbol) {
          result += inputSymbol;
          cursor++;
        } else if (this.specialCharacters.indexOf(
          maskExpression[cursor] ?? ""
          /* MaskExpression.EMPTY_STRING */
        ) !== -1) {
          result += maskExpression[cursor];
          cursor++;
          this._shiftStep(maskExpression, cursor, inputArray.length);
          i--;
        } else if (maskExpression[cursor] === "9" && this.showMaskTyped) {
          this._shiftStep(maskExpression, cursor, inputArray.length);
        } else if (this.patterns[
          maskExpression[cursor] ?? ""
          /* MaskExpression.EMPTY_STRING */
        ] && this.patterns[
          maskExpression[cursor] ?? ""
          /* MaskExpression.EMPTY_STRING */
        ]?.optional) {
          if (!!inputArray[cursor] && maskExpression !== "099.099.099.099" && maskExpression !== "000.000.000-00" && maskExpression !== "00.000.000/0000-00" && !maskExpression.match(/^9+\.0+$/) && !this.patterns[
            maskExpression[cursor] ?? ""
            /* MaskExpression.EMPTY_STRING */
          ]?.optional) {
            result += inputArray[cursor];
          }
          if (maskExpression.includes(
            "9*"
            /* MaskExpression.SYMBOL_STAR */
          ) && maskExpression.includes(
            "0*"
            /* MaskExpression.SYMBOL_STAR */
          )) {
            cursor++;
          }
          cursor++;
          i--;
        } else if (this.maskExpression[cursor + 1] === "*" && this._findSpecialChar(
          this.maskExpression[cursor + 2] ?? ""
          /* MaskExpression.EMPTY_STRING */
        ) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.maskExpression[cursor + 1] === "?" && this._findSpecialChar(
          this.maskExpression[cursor + 2] ?? ""
          /* MaskExpression.EMPTY_STRING */
        ) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.showMaskTyped && this.specialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter && this.placeHolderCharacter.length === 1) {
          stepBack = true;
        }
      }
    }
    if (result.length + 1 === maskExpression.length && this.specialCharacters.indexOf(
      maskExpression[maskExpression.length - 1] ?? ""
      /* MaskExpression.EMPTY_STRING */
    ) !== -1) {
      result += maskExpression[maskExpression.length - 1];
    }
    let newPosition = position + 1;
    while (this._shift.has(newPosition)) {
      shift++;
      newPosition++;
    }
    let actualShift = justPasted && !maskExpression.startsWith(
      "separator"
      /* MaskExpression.SEPARATOR */
    ) ? cursor : this._shift.has(position) ? shift : 0;
    if (stepBack) {
      actualShift--;
    }
    cb(actualShift, backspaceShift);
    if (shift < 0) {
      this._shift.clear();
    }
    let onlySpecial = false;
    if (backspaced) {
      onlySpecial = inputArray.every((char) => this.specialCharacters.includes(char));
    }
    let res = `${this.prefix}${onlySpecial ? "" : result}${this.showMaskTyped ? "" : this.suffix}`;
    if (result.length === 0) {
      res = !this.dropSpecialCharacters ? `${this.prefix}${result}` : `${result}`;
    }
    const isSpecialCharacterMaskFirstSymbol = inputValue.length === 1 && this.specialCharacters.includes(maskExpression[0]) && inputValue !== maskExpression[0];
    if (!this._checkSymbolMask(inputValue, maskExpression[1]) && isSpecialCharacterMaskFirstSymbol) {
      return "";
    }
    if (result.includes(
      "-"
      /* MaskExpression.MINUS */
    ) && this.prefix && this.allowNegativeNumbers) {
      if (backspaced && result === "-") {
        return "";
      }
      res = `${"-"}${this.prefix}${result.split(
        "-"
        /* MaskExpression.MINUS */
      ).join(
        ""
        /* MaskExpression.EMPTY_STRING */
      )}${this.suffix}`;
    }
    return res;
  }
  _findDropSpecialChar(inputSymbol) {
    if (Array.isArray(this.dropSpecialCharacters)) {
      return this.dropSpecialCharacters.find((val) => val === inputSymbol);
    }
    return this._findSpecialChar(inputSymbol);
  }
  _findSpecialChar(inputSymbol) {
    return this.specialCharacters.find((val) => val === inputSymbol);
  }
  _checkSymbolMask(inputSymbol, maskSymbol) {
    this.patterns = this.customPattern ? this.customPattern : this.patterns;
    return (this.patterns[maskSymbol]?.pattern && this.patterns[maskSymbol]?.pattern.test(inputSymbol)) ?? false;
  }
  _stripToDecimal(str) {
    return str.split(
      ""
      /* MaskExpression.EMPTY_STRING */
    ).filter((i, idx) => {
      const isDecimalMarker = typeof this.decimalMarker === "string" ? i === this.decimalMarker : (
        // TODO (inepipenko) use utility type
        this.decimalMarker.includes(i)
      );
      return i.match("^-?\\d") || i === this.thousandSeparator || isDecimalMarker || i === "-" && idx === 0 && this.allowNegativeNumbers;
    }).join(
      ""
      /* MaskExpression.EMPTY_STRING */
    );
  }
  _charToRegExpExpression(char) {
    if (char) {
      const charsToEscape = "[\\^$.|?*+()";
      return char === " " ? "\\s" : charsToEscape.indexOf(char) >= 0 ? `\\${char}` : char;
    }
    return char;
  }
  _shiftStep(maskExpression, cursor, inputLength) {
    const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputLength : cursor;
    this._shift.add(shiftStep + this.prefix.length || 0);
  }
  _compareOrIncludes(value, comparedValue, excludedValue) {
    return Array.isArray(comparedValue) ? comparedValue.filter((v) => v !== excludedValue).includes(value) : value === comparedValue;
  }
  _validIP(valuesIP) {
    return !(valuesIP.length === 4 && !valuesIP.some((value, index) => {
      if (valuesIP.length !== index + 1) {
        return value === "" || Number(value) > 255;
      }
      return value === "" || Number(value.substring(0, 3)) > 255;
    }));
  }
  _splitPercentZero(value) {
    if (value === "-" && this.allowNegativeNumbers) {
      return value;
    }
    const decimalIndex = typeof this.decimalMarker === "string" ? value.indexOf(this.decimalMarker) : value.indexOf(
      "."
      /* MaskExpression.DOT */
    );
    const emptyOrMinus = this.allowNegativeNumbers && value.includes(
      "-"
      /* MaskExpression.MINUS */
    ) ? "-" : "";
    if (decimalIndex === -1) {
      const parsedValue = parseInt(emptyOrMinus ? value.slice(1, value.length) : value, 10);
      return isNaN(parsedValue) ? "" : `${emptyOrMinus}${parsedValue}`;
    } else {
      const integerPart = parseInt(value.replace("-", "").substring(0, decimalIndex), 10);
      const decimalPart = value.substring(decimalIndex + 1);
      const integerString = isNaN(integerPart) ? "" : integerPart.toString();
      const decimal = typeof this.decimalMarker === "string" ? this.decimalMarker : ".";
      return integerString === "" ? "" : `${emptyOrMinus}${integerString}${decimal}${decimalPart}`;
    }
  }
  _findFirstNonZeroDigitIndex(inputString) {
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (char && char >= "1" && char <= "9") {
        return i;
      }
    }
    return -1;
  }
};
_NgxMaskApplierService.ɵfac = function NgxMaskApplierService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMaskApplierService)();
};
_NgxMaskApplierService.ɵprov = ɵɵdefineInjectable({
  token: _NgxMaskApplierService,
  factory: _NgxMaskApplierService.ɵfac
});
var NgxMaskApplierService = _NgxMaskApplierService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMaskApplierService, [{
    type: Injectable
  }], null, null);
})();
var _NgxMaskService = class _NgxMaskService extends NgxMaskApplierService {
  constructor() {
    super(...arguments);
    this.isNumberValue = false;
    this.maskIsShown = "";
    this.selStart = null;
    this.selEnd = null;
    this.writingValue = false;
    this.maskChanged = false;
    this._maskExpressionArray = [];
    this.triggerOnMaskChange = false;
    this._previousValue = "";
    this._currentValue = "";
    this._emitValue = false;
    this.onChange = (_) => {
    };
    this._elementRef = inject(ElementRef, {
      optional: true
    });
    this.document = inject(DOCUMENT);
    this._config = inject(NGX_MASK_CONFIG);
    this._renderer = inject(Renderer2, {
      optional: true
    });
  }
  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false, cb = () => {
  }) {
    if (!maskExpression) {
      return inputValue !== this.actualValue ? this.actualValue : inputValue;
    }
    this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : "";
    if (this.maskExpression === "IP" && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(
        inputValue || "#"
        /* MaskExpression.HASH */
      );
    }
    if (this.maskExpression === "CPF_CNPJ" && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(
        inputValue || "#"
        /* MaskExpression.HASH */
      );
    }
    if (!inputValue && this.showMaskTyped) {
      this.formControlResult(this.prefix);
      return `${this.prefix}${this.maskIsShown}${this.suffix}`;
    }
    const getSymbol = !!inputValue && typeof this.selStart === "number" ? inputValue[this.selStart] ?? "" : "";
    let newInputValue = "";
    if (this.hiddenInput !== void 0 && !this.writingValue) {
      let actualResult = inputValue && inputValue.length === 1 ? inputValue.split(
        ""
        /* MaskExpression.EMPTY_STRING */
      ) : this.actualValue.split(
        ""
        /* MaskExpression.EMPTY_STRING */
      );
      if (typeof this.selStart === "object" && typeof this.selEnd === "object") {
        this.selStart = Number(this.selStart);
        this.selEnd = Number(this.selEnd);
      } else {
        inputValue !== "" && actualResult.length ? typeof this.selStart === "number" && typeof this.selEnd === "number" ? inputValue.length > actualResult.length ? actualResult.splice(this.selStart, 0, getSymbol) : inputValue.length < actualResult.length ? actualResult.length - inputValue.length === 1 ? backspaced ? actualResult.splice(this.selStart - 1, 1) : actualResult.splice(inputValue.length - 1, 1) : actualResult.splice(this.selStart, this.selEnd - this.selStart) : null : null : actualResult = [];
      }
      if (this.showMaskTyped) {
        if (!this.hiddenInput) {
          inputValue = this.removeMask(inputValue);
        }
      }
      newInputValue = this.actualValue.length && actualResult.length <= inputValue.length ? this.shiftTypedSymbols(actualResult.join(
        ""
        /* MaskExpression.EMPTY_STRING */
      )) : inputValue;
    }
    if (justPasted && (this.hiddenInput || !this.hiddenInput)) {
      newInputValue = inputValue;
    }
    if (backspaced && this.specialCharacters.indexOf(
      this.maskExpression[position] ?? ""
      /* MaskExpression.EMPTY_STRING */
    ) !== -1 && this.showMaskTyped && !this.prefix) {
      newInputValue = this._currentValue;
    }
    if (this.deletedSpecialCharacter && position) {
      if (this.specialCharacters.includes(this.actualValue.slice(position, position + 1))) {
        position = position + 1;
      } else if (maskExpression.slice(position - 1, position + 1) !== "M0") {
        position = position - 2;
      }
      this.deletedSpecialCharacter = false;
    }
    if (this.showMaskTyped && this.placeHolderCharacter.length === 1 && !this.leadZeroDateTime) {
      inputValue = this.removeMask(inputValue);
    }
    if (this.maskChanged) {
      newInputValue = inputValue;
    } else {
      newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
    }
    if (this.showMaskTyped && this.keepCharacterPositions && this.actualValue && !justPasted && !this.writingValue) {
      const value = this.dropSpecialCharacters ? this.removeMask(this.actualValue) : this.actualValue;
      this.formControlResult(value);
      return this.actualValue ? this.actualValue : `${this.prefix}${this.maskIsShown}${this.suffix}`;
    }
    const result = super.applyMask(newInputValue, maskExpression, position, justPasted, backspaced, cb);
    this.actualValue = this.getActualValue(result);
    if (this.thousandSeparator === "." && this.decimalMarker === ".") {
      this.decimalMarker = ",";
    }
    if (this.maskExpression.startsWith(
      "separator"
      /* MaskExpression.SEPARATOR */
    ) && this.dropSpecialCharacters === true) {
      this.specialCharacters = this.specialCharacters.filter(
        (item) => !this._compareOrIncludes(item, this.decimalMarker, this.thousandSeparator)
        //item !== this.decimalMarker, // !
      );
    }
    if (result || result === "") {
      this._previousValue = this._currentValue;
      this._currentValue = result;
      this._emitValue = this._previousValue !== this._currentValue || this.maskChanged || this._previousValue === this._currentValue && justPasted;
    }
    this._emitValue ? this.writingValue && this.triggerOnMaskChange ? requestAnimationFrame(() => this.formControlResult(result)) : this.formControlResult(result) : "";
    if (!this.showMaskTyped || this.showMaskTyped && this.hiddenInput) {
      if (this.hiddenInput) {
        if (backspaced) {
          return this.hideInput(result, this.maskExpression);
        }
        return `${this.hideInput(result, this.maskExpression)}${this.maskIsShown.slice(result.length)}`;
      }
      return result;
    }
    const resLen = result.length;
    const prefNmask = `${this.prefix}${this.maskIsShown}${this.suffix}`;
    if (this.maskExpression.includes(
      "H"
      /* MaskExpression.HOURS */
    )) {
      const countSkipedSymbol = this._numberSkipedSymbols(result);
      return `${result}${prefNmask.slice(resLen + countSkipedSymbol)}`;
    } else if (this.maskExpression === "IP" || this.maskExpression === "CPF_CNPJ") {
      return `${result}${prefNmask}`;
    }
    return `${result}${prefNmask.slice(resLen)}`;
  }
  // get the number of characters that were shifted
  _numberSkipedSymbols(value) {
    const regex = /(^|\D)(\d\D)/g;
    let match = regex.exec(value);
    let countSkipedSymbol = 0;
    while (match != null) {
      countSkipedSymbol += 1;
      match = regex.exec(value);
    }
    return countSkipedSymbol;
  }
  applyValueChanges(position, justPasted, backspaced, cb = () => {
  }) {
    const formElement = this._elementRef?.nativeElement;
    if (!formElement) {
      return;
    }
    formElement.value = this.applyMask(formElement.value, this.maskExpression, position, justPasted, backspaced, cb);
    if (formElement === this._getActiveElement()) {
      return;
    }
    this.clearIfNotMatchFn();
  }
  hideInput(inputValue, maskExpression) {
    return inputValue.split(
      ""
      /* MaskExpression.EMPTY_STRING */
    ).map((curr, index) => {
      if (this.patterns && this.patterns[
        maskExpression[index] ?? ""
        /* MaskExpression.EMPTY_STRING */
      ] && this.patterns[
        maskExpression[index] ?? ""
        /* MaskExpression.EMPTY_STRING */
      ]?.symbol) {
        return this.patterns[
          maskExpression[index] ?? ""
          /* MaskExpression.EMPTY_STRING */
        ]?.symbol;
      }
      return curr;
    }).join(
      ""
      /* MaskExpression.EMPTY_STRING */
    );
  }
  // this function is not necessary, it checks result against maskExpression
  getActualValue(res) {
    const compare = res.split(
      ""
      /* MaskExpression.EMPTY_STRING */
    ).filter((symbol, i) => {
      const maskChar = this.maskExpression[i] ?? "";
      return this._checkSymbolMask(symbol, maskChar) || this.specialCharacters.includes(maskChar) && symbol === maskChar;
    });
    if (compare.join(
      ""
      /* MaskExpression.EMPTY_STRING */
    ) === res) {
      return compare.join(
        ""
        /* MaskExpression.EMPTY_STRING */
      );
    }
    return res;
  }
  shiftTypedSymbols(inputValue) {
    let symbolToReplace = "";
    const newInputValue = inputValue && inputValue.split(
      ""
      /* MaskExpression.EMPTY_STRING */
    ).map((currSymbol, index) => {
      if (this.specialCharacters.includes(
        inputValue[index + 1] ?? ""
        /* MaskExpression.EMPTY_STRING */
      ) && inputValue[index + 1] !== this.maskExpression[index + 1]) {
        symbolToReplace = currSymbol;
        return inputValue[index + 1];
      }
      if (symbolToReplace.length) {
        const replaceSymbol = symbolToReplace;
        symbolToReplace = "";
        return replaceSymbol;
      }
      return currSymbol;
    }) || [];
    return newInputValue.join(
      ""
      /* MaskExpression.EMPTY_STRING */
    );
  }
  /**
   * Convert number value to string
   * 3.1415 -> '3.1415'
   * 1e-7 -> '0.0000001'
   */
  numberToString(value) {
    if (!value && value !== 0 || this.maskExpression.startsWith(
      "separator"
      /* MaskExpression.SEPARATOR */
    ) && (this.leadZero || !this.dropSpecialCharacters) || this.maskExpression.startsWith(
      "separator"
      /* MaskExpression.SEPARATOR */
    ) && this.separatorLimit.length > 14 && String(value).length > 14) {
      return String(value);
    }
    return Number(value).toLocaleString("fullwide", {
      useGrouping: false,
      maximumFractionDigits: 20
    }).replace(
      `/${"-"}/`,
      "-"
      /* MaskExpression.MINUS */
    );
  }
  showMaskInInput(inputVal) {
    if (this.showMaskTyped && !!this.shownMaskExpression) {
      if (this.maskExpression.length !== this.shownMaskExpression.length) {
        throw new Error("Mask expression must match mask placeholder length");
      } else {
        return this.shownMaskExpression;
      }
    } else if (this.showMaskTyped) {
      if (inputVal) {
        if (this.maskExpression === "IP") {
          return this._checkForIp(inputVal);
        }
        if (this.maskExpression === "CPF_CNPJ") {
          return this._checkForCpfCnpj(inputVal);
        }
      }
      if (this.placeHolderCharacter.length === this.maskExpression.length) {
        return this.placeHolderCharacter;
      }
      return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
    }
    return "";
  }
  clearIfNotMatchFn() {
    const formElement = this._elementRef?.nativeElement;
    if (!formElement) {
      return;
    }
    if (this.clearIfNotMatch && this.prefix.length + this.maskExpression.length + this.suffix.length !== formElement.value.replace(
      this.placeHolderCharacter,
      ""
      /* MaskExpression.EMPTY_STRING */
    ).length) {
      this.formElementProperty = [
        "value",
        ""
        /* MaskExpression.EMPTY_STRING */
      ];
      this.applyMask("", this.maskExpression);
    }
  }
  set formElementProperty([name, value]) {
    if (!this._renderer || !this._elementRef) {
      return;
    }
    Promise.resolve().then(() => this._renderer?.setProperty(this._elementRef?.nativeElement, name, value));
  }
  checkDropSpecialCharAmount(mask) {
    const chars = mask.split(
      ""
      /* MaskExpression.EMPTY_STRING */
    ).filter((item) => this._findDropSpecialChar(item));
    return chars.length;
  }
  removeMask(inputValue) {
    return this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.specialCharacters.concat("_").concat(this.placeHolderCharacter));
  }
  _checkForIp(inputVal) {
    if (inputVal === "#") {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    const arr = [];
    for (let i = 0; i < inputVal.length; i++) {
      const value = inputVal[i] ?? "";
      if (!value) {
        continue;
      }
      if (value.match("\\d")) {
        arr.push(value);
      }
    }
    if (arr.length <= 3) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    if (arr.length > 3 && arr.length <= 6) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    if (arr.length > 6 && arr.length <= 9) {
      return this.placeHolderCharacter;
    }
    if (arr.length > 9 && arr.length <= 12) {
      return "";
    }
    return "";
  }
  _checkForCpfCnpj(inputVal) {
    const cpf = `${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
    const cnpj = `${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
    if (inputVal === "#") {
      return cpf;
    }
    const arr = [];
    for (let i = 0; i < inputVal.length; i++) {
      const value = inputVal[i] ?? "";
      if (!value) {
        continue;
      }
      if (value.match("\\d")) {
        arr.push(value);
      }
    }
    if (arr.length <= 3) {
      return cpf.slice(arr.length, cpf.length);
    }
    if (arr.length > 3 && arr.length <= 6) {
      return cpf.slice(arr.length + 1, cpf.length);
    }
    if (arr.length > 6 && arr.length <= 9) {
      return cpf.slice(arr.length + 2, cpf.length);
    }
    if (arr.length > 9 && arr.length < 11) {
      return cpf.slice(arr.length + 3, cpf.length);
    }
    if (arr.length === 11) {
      return "";
    }
    if (arr.length === 12) {
      if (inputVal.length === 17) {
        return cnpj.slice(16, cnpj.length);
      }
      return cnpj.slice(15, cnpj.length);
    }
    if (arr.length > 12 && arr.length <= 14) {
      return cnpj.slice(arr.length + 4, cnpj.length);
    }
    return "";
  }
  /**
   * Recursively determine the current active element by navigating the Shadow DOM until the Active Element is found.
   */
  _getActiveElement(document = this.document) {
    const shadowRootEl = document?.activeElement?.shadowRoot;
    if (!shadowRootEl?.activeElement) {
      return document.activeElement;
    } else {
      return this._getActiveElement(shadowRootEl);
    }
  }
  /**
   * Propogates the input value back to the Angular model by triggering the onChange function. It won't do this if writingValue
   * is true. If that is true it means we are currently in the writeValue function, which is supposed to only update the actual
   * DOM element based on the Angular model value. It should be a one way process, i.e. writeValue should not be modifying the Angular
   * model value too. Therefore, we don't trigger onChange in this scenario.
   * @param inputValue the current form input value
   */
  formControlResult(inputValue) {
    if (this.writingValue || !this.triggerOnMaskChange && this.maskChanged) {
      this.triggerOnMaskChange && this.maskChanged ? this.onChange(this.outputTransformFn(this._toNumber(this._checkSymbols(this._removeSuffix(this._removePrefix(inputValue)))))) : "";
      this.maskChanged = false;
      return;
    }
    if (Array.isArray(this.dropSpecialCharacters)) {
      this.onChange(this.outputTransformFn(this._toNumber(this._checkSymbols(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters)))));
    } else if (this.dropSpecialCharacters || !this.dropSpecialCharacters && this.prefix === inputValue) {
      this.onChange(this.outputTransformFn(this._toNumber(this._checkSymbols(this._removeSuffix(this._removePrefix(inputValue))))));
    } else {
      this.onChange(this.outputTransformFn(this._toNumber(inputValue)));
    }
  }
  _toNumber(value) {
    if (!this.isNumberValue || value === "") {
      return value;
    }
    if (this.maskExpression.startsWith(
      "separator"
      /* MaskExpression.SEPARATOR */
    ) && (this.leadZero || !this.dropSpecialCharacters)) {
      return value;
    }
    if (String(value).length > 16 && this.separatorLimit.length > 14) {
      return String(value);
    }
    const num = Number(value);
    if (this.maskExpression.startsWith(
      "separator"
      /* MaskExpression.SEPARATOR */
    ) && Number.isNaN(num)) {
      const val = String(value).replace(",", ".");
      return Number(val);
    }
    return Number.isNaN(num) ? value : num;
  }
  _removeMask(value, specialCharactersForRemove) {
    if (this.maskExpression.startsWith(
      "percent"
      /* MaskExpression.PERCENT */
    ) && value.includes(
      "."
      /* MaskExpression.DOT */
    )) {
      return value;
    }
    return value ? value.replace(
      this._regExpForRemove(specialCharactersForRemove),
      ""
      /* MaskExpression.EMPTY_STRING */
    ) : value;
  }
  _removePrefix(value) {
    if (!this.prefix) {
      return value;
    }
    return value ? value.replace(
      this.prefix,
      ""
      /* MaskExpression.EMPTY_STRING */
    ) : value;
  }
  _removeSuffix(value) {
    if (!this.suffix) {
      return value;
    }
    return value ? value.replace(
      this.suffix,
      ""
      /* MaskExpression.EMPTY_STRING */
    ) : value;
  }
  _retrieveSeparatorValue(result) {
    let specialCharacters = Array.isArray(this.dropSpecialCharacters) ? this.specialCharacters.filter((v) => {
      return this.dropSpecialCharacters.includes(v);
    }) : this.specialCharacters;
    if (!this.deletedSpecialCharacter && this._checkPatternForSpace() && result.includes(
      " "
      /* MaskExpression.WHITE_SPACE */
    ) && this.maskExpression.includes(
      "*"
      /* MaskExpression.SYMBOL_STAR */
    )) {
      specialCharacters = specialCharacters.filter(
        (char) => char !== " "
        /* MaskExpression.WHITE_SPACE */
      );
    }
    return this._removeMask(result, specialCharacters);
  }
  _regExpForRemove(specialCharactersForRemove) {
    return new RegExp(specialCharactersForRemove.map((item) => `\\${item}`).join("|"), "gi");
  }
  _replaceDecimalMarkerToDot(value) {
    const markers = Array.isArray(this.decimalMarker) ? this.decimalMarker : [this.decimalMarker];
    return value.replace(
      this._regExpForRemove(markers),
      "."
      /* MaskExpression.DOT */
    );
  }
  _checkSymbols(result) {
    if (result === "") {
      return result;
    }
    if (this.maskExpression.startsWith(
      "percent"
      /* MaskExpression.PERCENT */
    ) && this.decimalMarker === ",") {
      result = result.replace(
        ",",
        "."
        /* MaskExpression.DOT */
      );
    }
    const separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);
    const separatorValue = this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(result));
    if (!this.isNumberValue) {
      return separatorValue;
    }
    if (separatorPrecision) {
      if (result === this.decimalMarker) {
        return null;
      }
      if (this.separatorLimit.length > 14) {
        return String(separatorValue);
      }
      return this._checkPrecision(this.maskExpression, separatorValue);
    } else {
      return separatorValue;
    }
  }
  _checkPatternForSpace() {
    for (const key in this.patterns) {
      if (this.patterns[key] && this.patterns[key]?.hasOwnProperty("pattern")) {
        const patternString = this.patterns[key]?.pattern.toString();
        const pattern = this.patterns[key]?.pattern;
        if (patternString?.includes(
          " "
          /* MaskExpression.WHITE_SPACE */
        ) && pattern?.test(this.maskExpression)) {
          return true;
        }
      }
    }
    return false;
  }
  // TODO should think about helpers or separting decimal precision to own property
  _retrieveSeparatorPrecision(maskExpretion) {
    const matcher = maskExpretion.match(new RegExp(`^separator\\.([^d]*)`));
    return matcher ? Number(matcher[1]) : null;
  }
  _checkPrecision(separatorExpression, separatorValue) {
    const separatorPrecision = separatorExpression.slice(10, 11);
    if (separatorExpression.indexOf("2") > 0 || this.leadZero && Number(separatorPrecision) > 0) {
      if (this.decimalMarker === "," && this.leadZero) {
        separatorValue = separatorValue.replace(",", ".");
      }
      return this.leadZero ? Number(separatorValue).toFixed(Number(separatorPrecision)) : Number(separatorValue).toFixed(2);
    }
    return this.numberToString(separatorValue);
  }
  _repeatPatternSymbols(maskExp) {
    return maskExp.match(/{[0-9]+}/) && maskExp.split(
      ""
      /* MaskExpression.EMPTY_STRING */
    ).reduce((accum, currVal, index) => {
      this._start = currVal === "{" ? index : this._start;
      if (currVal !== "}") {
        return this._findSpecialChar(currVal) ? accum + currVal : accum;
      }
      this._end = index;
      const repeatNumber = Number(maskExp.slice(this._start + 1, this._end));
      const replaceWith = new Array(repeatNumber + 1).join(maskExp[this._start - 1]);
      if (maskExp.slice(0, this._start).length > 1 && maskExp.includes(
        "S"
        /* MaskExpression.LETTER_S */
      )) {
        const symbols = maskExp.slice(0, this._start - 1);
        return symbols.includes(
          "{"
          /* MaskExpression.CURLY_BRACKETS_LEFT */
        ) ? accum + replaceWith : symbols + accum + replaceWith;
      } else {
        return accum + replaceWith;
      }
    }, "") || maskExp;
  }
  currentLocaleDecimalMarker() {
    return 1.1.toLocaleString().substring(1, 2);
  }
};
_NgxMaskService.ɵfac = /* @__PURE__ */ (() => {
  let ɵNgxMaskService_BaseFactory;
  return function NgxMaskService_Factory(__ngFactoryType__) {
    return (ɵNgxMaskService_BaseFactory || (ɵNgxMaskService_BaseFactory = ɵɵgetInheritedFactory(_NgxMaskService)))(__ngFactoryType__ || _NgxMaskService);
  };
})();
_NgxMaskService.ɵprov = ɵɵdefineInjectable({
  token: _NgxMaskService,
  factory: _NgxMaskService.ɵfac
});
var NgxMaskService = _NgxMaskService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMaskService, [{
    type: Injectable
  }], null, null);
})();
function _configFactory() {
  const initConfig = inject(INITIAL_CONFIG);
  const configValue = inject(NEW_CONFIG);
  return configValue instanceof Function ? __spreadValues(__spreadValues({}, initConfig), configValue()) : __spreadValues(__spreadValues({}, initConfig), configValue);
}
function provideNgxMask(configValue) {
  return [{
    provide: NEW_CONFIG,
    useValue: configValue
  }, {
    provide: INITIAL_CONFIG,
    useValue: initialConfig
  }, {
    provide: NGX_MASK_CONFIG,
    useFactory: _configFactory
  }, NgxMaskService];
}
function provideEnvironmentNgxMask(configValue) {
  return makeEnvironmentProviders(provideNgxMask(configValue));
}
var _NgxMaskDirective = class _NgxMaskDirective {
  constructor() {
    this.maskExpression = "";
    this.specialCharacters = [];
    this.patterns = {};
    this.prefix = "";
    this.suffix = "";
    this.thousandSeparator = " ";
    this.decimalMarker = ".";
    this.dropSpecialCharacters = null;
    this.hiddenInput = null;
    this.showMaskTyped = null;
    this.placeHolderCharacter = null;
    this.shownMaskExpression = null;
    this.showTemplate = null;
    this.clearIfNotMatch = null;
    this.validation = null;
    this.separatorLimit = null;
    this.allowNegativeNumbers = null;
    this.leadZeroDateTime = null;
    this.leadZero = null;
    this.triggerOnMaskChange = null;
    this.apm = null;
    this.inputTransformFn = null;
    this.outputTransformFn = null;
    this.keepCharacterPositions = null;
    this.maskFilled = new EventEmitter();
    this._maskValue = "";
    this._position = null;
    this._maskExpressionArray = [];
    this._allowFewMaskChangeMask = false;
    this._justPasted = false;
    this._isFocused = false;
    this._isComposing = false;
    this.document = inject(DOCUMENT);
    this._maskService = inject(NgxMaskService, {
      self: true
    });
    this._config = inject(NGX_MASK_CONFIG);
    this.onChange = (_) => {
    };
    this.onTouch = () => {
    };
  }
  ngOnChanges(changes) {
    const {
      maskExpression,
      specialCharacters,
      patterns,
      prefix,
      suffix,
      thousandSeparator,
      decimalMarker,
      dropSpecialCharacters,
      hiddenInput,
      showMaskTyped,
      placeHolderCharacter,
      shownMaskExpression,
      showTemplate,
      clearIfNotMatch,
      validation,
      separatorLimit,
      allowNegativeNumbers,
      leadZeroDateTime,
      leadZero,
      triggerOnMaskChange,
      apm,
      inputTransformFn,
      outputTransformFn,
      keepCharacterPositions
    } = changes;
    if (maskExpression) {
      if (maskExpression.currentValue !== maskExpression.previousValue && !maskExpression.firstChange) {
        this._maskService.maskChanged = true;
      }
      if (maskExpression.currentValue && maskExpression.currentValue.split(
        "||"
        /* MaskExpression.OR */
      ).length > 1) {
        this._maskExpressionArray = maskExpression.currentValue.split(
          "||"
          /* MaskExpression.OR */
        ).sort((a, b) => {
          return a.length - b.length;
        });
        this._setMask();
      } else {
        this._maskExpressionArray = [];
        this._maskValue = maskExpression.currentValue || "";
        this._maskService.maskExpression = this._maskValue;
      }
    }
    if (specialCharacters) {
      if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
        return;
      } else {
        this._maskService.specialCharacters = specialCharacters.currentValue || [];
      }
    }
    if (allowNegativeNumbers) {
      this._maskService.allowNegativeNumbers = allowNegativeNumbers.currentValue;
      if (this._maskService.allowNegativeNumbers) {
        this._maskService.specialCharacters = this._maskService.specialCharacters.filter(
          (c) => c !== "-"
          /* MaskExpression.MINUS */
        );
      }
    }
    if (patterns && patterns.currentValue) {
      this._maskService.patterns = patterns.currentValue;
    }
    if (apm && apm.currentValue) {
      this._maskService.apm = apm.currentValue;
    }
    if (prefix) {
      this._maskService.prefix = prefix.currentValue;
    }
    if (suffix) {
      this._maskService.suffix = suffix.currentValue;
    }
    if (thousandSeparator) {
      this._maskService.thousandSeparator = thousandSeparator.currentValue;
    }
    if (decimalMarker) {
      this._maskService.decimalMarker = decimalMarker.currentValue;
    }
    if (dropSpecialCharacters) {
      this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
    }
    if (hiddenInput) {
      this._maskService.hiddenInput = hiddenInput.currentValue;
    }
    if (showMaskTyped) {
      this._maskService.showMaskTyped = showMaskTyped.currentValue;
      if (showMaskTyped.previousValue === false && showMaskTyped.currentValue === true && this._isFocused) {
        requestAnimationFrame(() => {
          this._maskService._elementRef?.nativeElement.click();
        });
      }
    }
    if (placeHolderCharacter) {
      this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
    }
    if (shownMaskExpression) {
      this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
    }
    if (showTemplate) {
      this._maskService.showTemplate = showTemplate.currentValue;
    }
    if (clearIfNotMatch) {
      this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
    }
    if (validation) {
      this._maskService.validation = validation.currentValue;
    }
    if (separatorLimit) {
      this._maskService.separatorLimit = separatorLimit.currentValue;
    }
    if (leadZeroDateTime) {
      this._maskService.leadZeroDateTime = leadZeroDateTime.currentValue;
    }
    if (leadZero) {
      this._maskService.leadZero = leadZero.currentValue;
    }
    if (triggerOnMaskChange) {
      this._maskService.triggerOnMaskChange = triggerOnMaskChange.currentValue;
    }
    if (inputTransformFn) {
      this._maskService.inputTransformFn = inputTransformFn.currentValue;
    }
    if (outputTransformFn) {
      this._maskService.outputTransformFn = outputTransformFn.currentValue;
    }
    if (keepCharacterPositions) {
      this._maskService.keepCharacterPositions = keepCharacterPositions.currentValue;
    }
    this._applyMask();
  }
  validate({
    value
  }) {
    if (!this._maskService.validation || !this._maskValue) {
      return null;
    }
    if (this._maskService.ipError) {
      return this._createValidationError(value);
    }
    if (this._maskService.cpfCnpjError) {
      return this._createValidationError(value);
    }
    if (this._maskValue.startsWith(
      "separator"
      /* MaskExpression.SEPARATOR */
    )) {
      return null;
    }
    if (withoutValidation.includes(this._maskValue)) {
      return null;
    }
    if (this._maskService.clearIfNotMatch) {
      return null;
    }
    if (timeMasks.includes(this._maskValue)) {
      return this._validateTime(value);
    }
    if (value && value.toString().length >= 1) {
      let counterOfOpt = 0;
      if (this._maskValue.includes(
        "{"
        /* MaskExpression.CURLY_BRACKETS_LEFT */
      ) && this._maskValue.includes(
        "}"
        /* MaskExpression.CURLY_BRACKETS_RIGHT */
      )) {
        const lengthInsideCurlyBrackets = this._maskValue.slice(this._maskValue.indexOf(
          "{"
          /* MaskExpression.CURLY_BRACKETS_LEFT */
        ) + 1, this._maskValue.indexOf(
          "}"
          /* MaskExpression.CURLY_BRACKETS_RIGHT */
        ));
        return lengthInsideCurlyBrackets === String(value.length) ? null : this._createValidationError(value);
      }
      if (this._maskValue.startsWith(
        "percent"
        /* MaskExpression.PERCENT */
      )) {
        return null;
      }
      for (const key in this._maskService.patterns) {
        if (this._maskService.patterns[key]?.optional) {
          if (this._maskValue.indexOf(key) !== this._maskValue.lastIndexOf(key)) {
            const opt = this._maskValue.split(
              ""
              /* MaskExpression.EMPTY_STRING */
            ).filter((i) => i === key).join(
              ""
              /* MaskExpression.EMPTY_STRING */
            );
            counterOfOpt += opt.length;
          } else if (this._maskValue.indexOf(key) !== -1) {
            counterOfOpt++;
          }
          if (this._maskValue.indexOf(key) !== -1 && value.toString().length >= this._maskValue.indexOf(key)) {
            return null;
          }
          if (counterOfOpt === this._maskValue.length) {
            return null;
          }
        }
      }
      if (this._maskValue.indexOf(
        "*"
        /* MaskExpression.SYMBOL_STAR */
      ) > 1 && value.toString().length < this._maskValue.indexOf(
        "*"
        /* MaskExpression.SYMBOL_STAR */
      ) || this._maskValue.indexOf(
        "?"
        /* MaskExpression.SYMBOL_QUESTION */
      ) > 1 && value.toString().length < this._maskValue.indexOf(
        "?"
        /* MaskExpression.SYMBOL_QUESTION */
      )) {
        return this._createValidationError(value);
      }
      if (this._maskValue.indexOf(
        "*"
        /* MaskExpression.SYMBOL_STAR */
      ) === -1 || this._maskValue.indexOf(
        "?"
        /* MaskExpression.SYMBOL_QUESTION */
      ) === -1) {
        value = typeof value === "number" ? String(value) : value;
        const array = this._maskValue.split("*");
        const length = this._maskService.dropSpecialCharacters ? this._maskValue.length - this._maskService.checkDropSpecialCharAmount(this._maskValue) - counterOfOpt : this.prefix ? this._maskValue.length + this.prefix.length - counterOfOpt : this._maskValue.length - counterOfOpt;
        if (array.length === 1) {
          if (value.toString().length < length) {
            return this._createValidationError(value);
          }
        }
        if (array.length > 1) {
          const lastIndexArray = array[array.length - 1];
          if (lastIndexArray && this._maskService.specialCharacters.includes(lastIndexArray[0]) && String(value).includes(lastIndexArray[0] ?? "") && !this.dropSpecialCharacters) {
            const special = value.split(lastIndexArray[0]);
            return special[special.length - 1].length === lastIndexArray.length - 1 ? null : this._createValidationError(value);
          } else if ((lastIndexArray && !this._maskService.specialCharacters.includes(lastIndexArray[0]) || !lastIndexArray || this._maskService.dropSpecialCharacters) && value.length >= length - 1) {
            return null;
          } else {
            return this._createValidationError(value);
          }
        }
      }
      if (this._maskValue.indexOf(
        "*"
        /* MaskExpression.SYMBOL_STAR */
      ) === 1 || this._maskValue.indexOf(
        "?"
        /* MaskExpression.SYMBOL_QUESTION */
      ) === 1) {
        return null;
      }
    }
    if (value) {
      this.maskFilled.emit();
      return null;
    }
    return null;
  }
  onPaste() {
    this._justPasted = true;
  }
  onFocus() {
    this._isFocused = true;
  }
  onModelChange(value) {
    if ((value === "" || value === null || value === void 0) && this._maskService.actualValue) {
      this._maskService.actualValue = this._maskService.getActualValue(
        ""
        /* MaskExpression.EMPTY_STRING */
      );
    }
  }
  onInput(e) {
    if (this._isComposing) return;
    const el = e.target;
    const transformedValue = this._maskService.inputTransformFn(el.value);
    if (el.type !== "number") {
      if (typeof transformedValue === "string" || typeof transformedValue === "number") {
        el.value = transformedValue.toString();
        this._inputValue = el.value;
        this._setMask();
        if (!this._maskValue) {
          this.onChange(el.value);
          return;
        }
        let position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
        if (this.showMaskTyped && this.keepCharacterPositions && this._maskService.placeHolderCharacter.length === 1) {
          const inputSymbol = el.value.slice(position - 1, position);
          const prefixLength = this.prefix.length;
          const checkSymbols = this._maskService._checkSymbolMask(
            inputSymbol,
            this._maskService.maskExpression[position - 1 - prefixLength] ?? ""
            /* MaskExpression.EMPTY_STRING */
          );
          const checkSpecialCharacter = this._maskService._checkSymbolMask(
            inputSymbol,
            this._maskService.maskExpression[position + 1 - prefixLength] ?? ""
            /* MaskExpression.EMPTY_STRING */
          );
          const selectRangeBackspace = this._maskService.selStart === this._maskService.selEnd;
          const selStart = Number(this._maskService.selStart) - prefixLength;
          const selEnd = Number(this._maskService.selEnd) - prefixLength;
          if (this._code === "Backspace") {
            if (!selectRangeBackspace) {
              if (this._maskService.selStart === prefixLength) {
                this._maskService.actualValue = `${this.prefix}${this._maskService.maskIsShown.slice(0, selEnd)}${this._inputValue.split(this.prefix).join("")}`;
              } else if (this._maskService.selStart === this._maskService.maskIsShown.length + prefixLength) {
                this._maskService.actualValue = `${this._inputValue}${this._maskService.maskIsShown.slice(selStart, selEnd)}`;
              } else {
                this._maskService.actualValue = `${this.prefix}${this._inputValue.split(this.prefix).join("").slice(0, selStart)}${this._maskService.maskIsShown.slice(selStart, selEnd)}${this._maskService.actualValue.slice(selEnd + prefixLength, this._maskService.maskIsShown.length + prefixLength)}${this.suffix}`;
              }
            } else if (!this._maskService.specialCharacters.includes(this._maskService.maskExpression.slice(position - this.prefix.length, position + 1 - this.prefix.length)) && selectRangeBackspace) {
              if (selStart === 1 && this.prefix) {
                this._maskService.actualValue = `${this.prefix}${this._maskService.placeHolderCharacter}${el.value.split(this.prefix).join("").split(this.suffix).join("")}${this.suffix}`;
                position = position - 1;
              } else {
                const part1 = el.value.substring(0, position);
                const part2 = el.value.substring(position);
                this._maskService.actualValue = `${part1}${this._maskService.placeHolderCharacter}${part2}`;
              }
            }
          }
          if (this._code !== "Backspace") {
            if (!checkSymbols && !checkSpecialCharacter && selectRangeBackspace) {
              position = Number(el.selectionStart) - 1;
            } else if (this._maskService.specialCharacters.includes(el.value.slice(position, position + 1)) && checkSpecialCharacter && !this._maskService.specialCharacters.includes(el.value.slice(position + 1, position + 2))) {
              this._maskService.actualValue = `${el.value.slice(0, position - 1)}${el.value.slice(position, position + 1)}${inputSymbol}${el.value.slice(position + 2)}`;
              position = position + 1;
            } else if (checkSymbols) {
              if (el.value.length === 1 && position === 1) {
                this._maskService.actualValue = `${this.prefix}${inputSymbol}${this._maskService.maskIsShown.slice(1, this._maskService.maskIsShown.length)}${this.suffix}`;
              } else {
                this._maskService.actualValue = `${el.value.slice(0, position - 1)}${inputSymbol}${el.value.slice(position + 1).split(this.suffix).join("")}${this.suffix}`;
              }
            } else if (this.prefix && el.value.length === 1 && position - prefixLength === 1 && this._maskService._checkSymbolMask(
              el.value,
              this._maskService.maskExpression[position - 1 - prefixLength] ?? ""
              /* MaskExpression.EMPTY_STRING */
            )) {
              this._maskService.actualValue = `${this.prefix}${el.value}${this._maskService.maskIsShown.slice(1, this._maskService.maskIsShown.length)}${this.suffix}`;
            }
          }
        }
        let caretShift = 0;
        let backspaceShift = false;
        if (this._code === "Delete" && "separator") {
          this._maskService.deletedSpecialCharacter = true;
        }
        if (this._inputValue.length >= this._maskService.maskExpression.length - 1 && this._code !== "Backspace" && this._maskService.maskExpression === "d0/M0/0000" && position < 10) {
          const inputSymbol = this._inputValue.slice(position - 1, position);
          el.value = this._inputValue.slice(0, position - 1) + inputSymbol + this._inputValue.slice(position + 1);
        }
        if (this._maskService.maskExpression === "d0/M0/0000" && this.leadZeroDateTime) {
          if (position < 3 && Number(el.value) > 31 && Number(el.value) < 40 || position === 5 && Number(el.value.slice(3, 5)) > 12) {
            position = position + 2;
          }
        }
        if (this._maskService.maskExpression === "Hh:m0:s0" && this.apm) {
          if (this._justPasted && el.value.slice(0, 2) === "00") {
            el.value = el.value.slice(1, 2) + el.value.slice(2, el.value.length);
          }
          el.value = el.value === "00" ? "0" : el.value;
        }
        this._maskService.applyValueChanges(position, this._justPasted, this._code === "Backspace" || this._code === "Delete", (shift, _backspaceShift) => {
          this._justPasted = false;
          caretShift = shift;
          backspaceShift = _backspaceShift;
        });
        if (this._getActiveElement() !== el) {
          return;
        }
        if (this._maskService.plusOnePosition) {
          position = position + 1;
          this._maskService.plusOnePosition = false;
        }
        if (this._maskExpressionArray.length) {
          if (this._code === "Backspace") {
            const specialChartMinusOne = this.specialCharacters.includes(this._maskService.actualValue.slice(position - 1, position));
            const specialChartPlusOne = this.specialCharacters.includes(this._maskService.actualValue.slice(position, position + 1));
            if (this._allowFewMaskChangeMask && !specialChartPlusOne) {
              position = el.selectionStart + 1;
              this._allowFewMaskChangeMask = false;
            } else {
              position = specialChartMinusOne ? position - 1 : position;
            }
          } else {
            position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
          }
        }
        this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
        let positionToApply = this._position ? this._inputValue.length + position + caretShift : position + (this._code === "Backspace" && !backspaceShift ? 0 : caretShift);
        if (positionToApply > this._getActualInputLength()) {
          positionToApply = el.value === this._maskService.decimalMarker && el.value.length === 1 ? this._getActualInputLength() + 1 : this._getActualInputLength();
        }
        if (positionToApply < 0) {
          positionToApply = 0;
        }
        el.setSelectionRange(positionToApply, positionToApply);
        this._position = null;
      } else {
        console.warn("Ngx-mask writeValue work with string | number, your current value:", typeof transformedValue);
      }
    } else {
      if (!this._maskValue) {
        this.onChange(el.value);
        return;
      }
      this._maskService.applyValueChanges(
        el.value.length,
        this._justPasted,
        this._code === "Backspace" || this._code === "Delete"
        /* MaskExpression.DELETE */
      );
    }
  }
  // IME starts
  onCompositionStart() {
    this._isComposing = true;
  }
  // IME completes
  onCompositionEnd(e) {
    this._isComposing = false;
    this._justPasted = true;
    this.onInput(e);
  }
  onBlur(e) {
    if (this._maskValue) {
      const el = e.target;
      if (this.leadZero && el.value.length > 0 && typeof this.decimalMarker === "string") {
        const maskExpression = this._maskService.maskExpression;
        const precision = Number(this._maskService.maskExpression.slice(maskExpression.length - 1, maskExpression.length));
        if (precision > 0) {
          el.value = this.suffix ? el.value.split(this.suffix).join("") : el.value;
          const decimalPart = el.value.split(this.decimalMarker)[1];
          el.value = el.value.includes(this.decimalMarker) ? el.value + "0".repeat(precision - decimalPart.length) + this.suffix : el.value + this.decimalMarker + "0".repeat(precision) + this.suffix;
          this._maskService.actualValue = el.value;
        }
      }
      this._maskService.clearIfNotMatchFn();
    }
    this._isFocused = false;
    this.onTouch();
  }
  onClick(e) {
    if (!this._maskValue) {
      return;
    }
    const el = e.target;
    const posStart = 0;
    const posEnd = 0;
    if (el !== null && el.selectionStart !== null && el.selectionStart === el.selectionEnd && el.selectionStart > this._maskService.prefix.length && // eslint-disable-next-line
    e.keyCode !== 38) {
      if (this._maskService.showMaskTyped && !this.keepCharacterPositions) {
        this._maskService.maskIsShown = this._maskService.showMaskInInput();
        if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
          el.focus();
          el.setSelectionRange(posStart, posEnd);
        } else {
          if (el.selectionStart > this._maskService.actualValue.length) {
            el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
          }
        }
      }
    }
    const nextValue = el && (el.value === this._maskService.prefix ? this._maskService.prefix + this._maskService.maskIsShown : el.value);
    if (el && el.value !== nextValue) {
      el.value = nextValue;
    }
    if (el && el.type !== "number" && (el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
      el.selectionStart = this._maskService.prefix.length;
      return;
    }
    if (el && el.selectionEnd > this._getActualInputLength()) {
      el.selectionEnd = this._getActualInputLength();
    }
  }
  onKeyDown(e) {
    if (!this._maskValue) {
      return;
    }
    if (this._isComposing) {
      if (e.key === "Enter") this.onCompositionEnd(e);
      return;
    }
    this._code = e.code ? e.code : e.key;
    const el = e.target;
    this._inputValue = el.value;
    this._setMask();
    if (el.type !== "number") {
      if (e.key === "ArrowUp") {
        e.preventDefault();
      }
      if (e.key === "ArrowLeft" || e.key === "Backspace" || e.key === "Delete") {
        if (e.key === "Backspace" && el.value.length === 0) {
          el.selectionStart = el.selectionEnd;
        }
        if (e.key === "Backspace" && el.selectionStart !== 0) {
          this.specialCharacters = this.specialCharacters?.length ? this.specialCharacters : this._config.specialCharacters;
          if (this.prefix.length > 1 && el.selectionStart <= this.prefix.length) {
            el.setSelectionRange(this.prefix.length, el.selectionEnd);
          } else {
            if (this._inputValue.length !== el.selectionStart && el.selectionStart !== 1) {
              while (this.specialCharacters.includes((this._inputValue[el.selectionStart - 1] ?? "").toString()) && (this.prefix.length >= 1 && el.selectionStart > this.prefix.length || this.prefix.length === 0)) {
                el.setSelectionRange(el.selectionStart - 1, el.selectionEnd);
              }
            }
          }
        }
        this.checkSelectionOnDeletion(el);
        if (this._maskService.prefix.length && el.selectionStart <= this._maskService.prefix.length && el.selectionEnd <= this._maskService.prefix.length) {
          e.preventDefault();
        }
        const cursorStart = el.selectionStart;
        if (e.key === "Backspace" && !el.readOnly && cursorStart === 0 && el.selectionEnd === el.value.length && el.value.length !== 0) {
          this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;
          this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
        }
      }
      if (!!this.suffix && this.suffix.length > 1 && this._inputValue.length - this.suffix.length < el.selectionStart) {
        el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
      } else if (e.code === "KeyA" && e.ctrlKey || e.code === "KeyA" && e.metaKey) {
        el.setSelectionRange(0, this._getActualInputLength());
        e.preventDefault();
      }
      this._maskService.selStart = el.selectionStart;
      this._maskService.selEnd = el.selectionEnd;
    }
  }
  /** It writes the value in the input */
  writeValue(controlValue) {
    return __async(this, null, function* () {
      if (typeof controlValue === "object" && controlValue !== null && "value" in controlValue) {
        if ("disable" in controlValue) {
          this.setDisabledState(Boolean(controlValue.disable));
        }
        controlValue = controlValue.value;
      }
      if (controlValue !== null) {
        controlValue = this.inputTransformFn ? this.inputTransformFn(controlValue) : controlValue;
      }
      if (typeof controlValue === "string" || typeof controlValue === "number" || controlValue === null || controlValue === void 0) {
        if (controlValue === null || controlValue === void 0 || controlValue === "") {
          this._maskService._currentValue = "";
          this._maskService._previousValue = "";
        }
        let inputValue = controlValue;
        if (typeof inputValue === "number" || this._maskValue.startsWith(
          "separator"
          /* MaskExpression.SEPARATOR */
        )) {
          inputValue = String(inputValue);
          const localeDecimalMarker = this._maskService.currentLocaleDecimalMarker();
          if (!Array.isArray(this._maskService.decimalMarker)) {
            inputValue = this._maskService.decimalMarker !== localeDecimalMarker ? inputValue.replace(localeDecimalMarker, this._maskService.decimalMarker) : inputValue;
          }
          if (this._maskService.leadZero && inputValue && this.maskExpression && this.dropSpecialCharacters !== false) {
            inputValue = this._maskService._checkPrecision(this._maskService.maskExpression, inputValue);
          }
          if (this.decimalMarker === "," || Array.isArray(this._maskService.decimalMarker) && this.thousandSeparator === ".") {
            inputValue = inputValue.toString().replace(
              ".",
              ","
              /* MaskExpression.COMMA */
            );
          }
          if (this.maskExpression?.startsWith(
            "separator"
            /* MaskExpression.SEPARATOR */
          ) && this.leadZero) {
            requestAnimationFrame(() => {
              this._maskService.applyMask(inputValue?.toString() ?? "", this._maskService.maskExpression);
            });
          }
          this._maskService.isNumberValue = true;
        }
        if (typeof inputValue !== "string") {
          inputValue = "";
        }
        this._inputValue = inputValue;
        this._setMask();
        if (inputValue && this._maskService.maskExpression || this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)) {
          typeof this.inputTransformFn !== "function" ? this._maskService.writingValue = true : "";
          this._maskService.formElementProperty = ["value", this._maskService.applyMask(inputValue, this._maskService.maskExpression)];
          typeof this.inputTransformFn !== "function" ? this._maskService.writingValue = false : "";
        } else {
          this._maskService.formElementProperty = ["value", inputValue];
        }
        this._inputValue = inputValue;
      } else {
        console.warn("Ngx-mask writeValue work with string | number, your current value:", typeof controlValue);
      }
    });
  }
  registerOnChange(fn) {
    this._maskService.onChange = this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  _getActiveElement(document = this.document) {
    const shadowRootEl = document?.activeElement?.shadowRoot;
    if (!shadowRootEl?.activeElement) {
      return document.activeElement;
    } else {
      return this._getActiveElement(shadowRootEl);
    }
  }
  checkSelectionOnDeletion(el) {
    el.selectionStart = Math.min(Math.max(this.prefix.length, el.selectionStart), this._inputValue.length - this.suffix.length);
    el.selectionEnd = Math.min(Math.max(this.prefix.length, el.selectionEnd), this._inputValue.length - this.suffix.length);
  }
  /** It disables the input element */
  setDisabledState(isDisabled) {
    this._maskService.formElementProperty = ["disabled", isDisabled];
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _applyMask() {
    this._maskService.maskExpression = this._maskService._repeatPatternSymbols(this._maskValue || "");
    this._maskService.formElementProperty = ["value", this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)];
  }
  _validateTime(value) {
    const rowMaskLen = this._maskValue.split(
      ""
      /* MaskExpression.EMPTY_STRING */
    ).filter((s) => s !== ":").length;
    if (!value) {
      return null;
    }
    if (+(value[value.length - 1] ?? -1) === 0 && value.length < rowMaskLen || value.length <= rowMaskLen - 2) {
      return this._createValidationError(value);
    }
    return null;
  }
  _getActualInputLength() {
    return this._maskService.actualValue.length || this._maskService.actualValue.length + this._maskService.prefix.length;
  }
  _createValidationError(actualValue) {
    return {
      mask: {
        requiredMask: this._maskValue,
        actualValue
      }
    };
  }
  _setMask() {
    this._maskExpressionArray.some((mask) => {
      const specialChart = mask.split(
        ""
        /* MaskExpression.EMPTY_STRING */
      ).some((char) => this._maskService.specialCharacters.includes(char));
      if (specialChart && this._inputValue && this._areAllCharactersInEachStringSame(this._maskExpressionArray) || mask.includes(
        "{"
        /* MaskExpression.CURLY_BRACKETS_LEFT */
      )) {
        const test = this._maskService.removeMask(this._inputValue)?.length <= this._maskService.removeMask(mask)?.length;
        if (test) {
          this._maskValue = this.maskExpression = this._maskService.maskExpression = mask.includes(
            "{"
            /* MaskExpression.CURLY_BRACKETS_LEFT */
          ) ? this._maskService._repeatPatternSymbols(mask) : mask;
          return test;
        } else {
          if (this._code === "Backspace") {
            this._allowFewMaskChangeMask = true;
          }
          const expression = this._maskExpressionArray[this._maskExpressionArray.length - 1] ?? "";
          this._maskValue = this.maskExpression = this._maskService.maskExpression = expression.includes(
            "{"
            /* MaskExpression.CURLY_BRACKETS_LEFT */
          ) ? this._maskService._repeatPatternSymbols(expression) : expression;
        }
      } else {
        const check = this._maskService.removeMask(this._inputValue)?.split(
          ""
          /* MaskExpression.EMPTY_STRING */
        ).every((character, index) => {
          const indexMask = mask.charAt(index);
          return this._maskService._checkSymbolMask(character, indexMask);
        });
        if (check || this._justPasted) {
          this._maskValue = this.maskExpression = this._maskService.maskExpression = mask;
          return check;
        }
      }
    });
  }
  _areAllCharactersInEachStringSame(array) {
    const specialCharacters = this._maskService.specialCharacters;
    function removeSpecialCharacters(str) {
      const regex = new RegExp(`[${specialCharacters.map((ch) => `\\${ch}`).join("")}]`, "g");
      return str.replace(regex, "");
    }
    const processedArr = array.map(removeSpecialCharacters);
    return processedArr.every((str) => {
      const uniqueCharacters = new Set(str);
      return uniqueCharacters.size === 1;
    });
  }
};
_NgxMaskDirective.ɵfac = function NgxMaskDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMaskDirective)();
};
_NgxMaskDirective.ɵdir = ɵɵdefineDirective({
  type: _NgxMaskDirective,
  selectors: [["input", "mask", ""], ["textarea", "mask", ""]],
  hostBindings: function NgxMaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("paste", function NgxMaskDirective_paste_HostBindingHandler() {
        return ctx.onPaste();
      })("focus", function NgxMaskDirective_focus_HostBindingHandler($event) {
        return ctx.onFocus($event);
      })("ngModelChange", function NgxMaskDirective_ngModelChange_HostBindingHandler($event) {
        return ctx.onModelChange($event);
      })("input", function NgxMaskDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      })("compositionstart", function NgxMaskDirective_compositionstart_HostBindingHandler($event) {
        return ctx.onCompositionStart($event);
      })("compositionend", function NgxMaskDirective_compositionend_HostBindingHandler($event) {
        return ctx.onCompositionEnd($event);
      })("blur", function NgxMaskDirective_blur_HostBindingHandler($event) {
        return ctx.onBlur($event);
      })("click", function NgxMaskDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown", function NgxMaskDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    maskExpression: [0, "mask", "maskExpression"],
    specialCharacters: "specialCharacters",
    patterns: "patterns",
    prefix: "prefix",
    suffix: "suffix",
    thousandSeparator: "thousandSeparator",
    decimalMarker: "decimalMarker",
    dropSpecialCharacters: "dropSpecialCharacters",
    hiddenInput: "hiddenInput",
    showMaskTyped: "showMaskTyped",
    placeHolderCharacter: "placeHolderCharacter",
    shownMaskExpression: "shownMaskExpression",
    showTemplate: "showTemplate",
    clearIfNotMatch: "clearIfNotMatch",
    validation: "validation",
    separatorLimit: "separatorLimit",
    allowNegativeNumbers: "allowNegativeNumbers",
    leadZeroDateTime: "leadZeroDateTime",
    leadZero: "leadZero",
    triggerOnMaskChange: "triggerOnMaskChange",
    apm: "apm",
    inputTransformFn: "inputTransformFn",
    outputTransformFn: "outputTransformFn",
    keepCharacterPositions: "keepCharacterPositions"
  },
  outputs: {
    maskFilled: "maskFilled"
  },
  exportAs: ["mask", "ngxMask"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: _NgxMaskDirective,
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: _NgxMaskDirective,
    multi: true
  }, NgxMaskService]), ɵɵNgOnChangesFeature]
});
var NgxMaskDirective = _NgxMaskDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMaskDirective, [{
    type: Directive,
    args: [{
      selector: "input[mask], textarea[mask]",
      standalone: true,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NgxMaskDirective,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: NgxMaskDirective,
        multi: true
      }, NgxMaskService],
      exportAs: "mask,ngxMask"
    }]
  }], null, {
    maskExpression: [{
      type: Input,
      args: ["mask"]
    }],
    specialCharacters: [{
      type: Input
    }],
    patterns: [{
      type: Input
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    thousandSeparator: [{
      type: Input
    }],
    decimalMarker: [{
      type: Input
    }],
    dropSpecialCharacters: [{
      type: Input
    }],
    hiddenInput: [{
      type: Input
    }],
    showMaskTyped: [{
      type: Input
    }],
    placeHolderCharacter: [{
      type: Input
    }],
    shownMaskExpression: [{
      type: Input
    }],
    showTemplate: [{
      type: Input
    }],
    clearIfNotMatch: [{
      type: Input
    }],
    validation: [{
      type: Input
    }],
    separatorLimit: [{
      type: Input
    }],
    allowNegativeNumbers: [{
      type: Input
    }],
    leadZeroDateTime: [{
      type: Input
    }],
    leadZero: [{
      type: Input
    }],
    triggerOnMaskChange: [{
      type: Input
    }],
    apm: [{
      type: Input
    }],
    inputTransformFn: [{
      type: Input
    }],
    outputTransformFn: [{
      type: Input
    }],
    keepCharacterPositions: [{
      type: Input
    }],
    maskFilled: [{
      type: Output
    }],
    onPaste: [{
      type: HostListener,
      args: ["paste"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus", ["$event"]]
    }],
    onModelChange: [{
      type: HostListener,
      args: ["ngModelChange", ["$event"]]
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }],
    onCompositionStart: [{
      type: HostListener,
      args: ["compositionstart", ["$event"]]
    }],
    onCompositionEnd: [{
      type: HostListener,
      args: ["compositionend", ["$event"]]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur", ["$event"]]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var _NgxMaskPipe = class _NgxMaskPipe {
  constructor() {
    this.defaultOptions = inject(NGX_MASK_CONFIG);
    this._maskService = inject(NgxMaskService);
    this._maskExpressionArray = [];
    this.mask = "";
  }
  transform(value, mask, _a = {}) {
    var _b = _a, {
      patterns
    } = _b, config = __objRest(_b, [
      "patterns"
    ]);
    const currentConfig = __spreadProps(__spreadValues(__spreadValues({
      maskExpression: mask
    }, this.defaultOptions), config), {
      patterns: __spreadValues(__spreadValues({}, this._maskService.patterns), patterns)
    });
    Object.entries(currentConfig).forEach(([key, value2]) => {
      this._maskService[key] = value2;
    });
    if (mask.includes("||")) {
      if (mask.split("||").length > 1) {
        this._maskExpressionArray = mask.split("||").sort((a, b) => {
          return a.length - b.length;
        });
        this._setMask(value);
        return this._maskService.applyMask(`${value}`, this.mask);
      } else {
        this._maskExpressionArray = [];
        return this._maskService.applyMask(`${value}`, this.mask);
      }
    }
    if (mask.includes(
      "{"
      /* MaskExpression.CURLY_BRACKETS_LEFT */
    )) {
      return this._maskService.applyMask(`${value}`, this._maskService._repeatPatternSymbols(mask));
    }
    if (mask.startsWith(
      "separator"
      /* MaskExpression.SEPARATOR */
    )) {
      if (config.decimalMarker) {
        this._maskService.decimalMarker = config.decimalMarker;
      }
      if (config.thousandSeparator) {
        this._maskService.thousandSeparator = config.thousandSeparator;
      }
      if (config.leadZero) {
        this._maskService.leadZero = config.leadZero;
      }
      value = String(value);
      const localeDecimalMarker = this._maskService.currentLocaleDecimalMarker();
      if (!Array.isArray(this._maskService.decimalMarker)) {
        value = this._maskService.decimalMarker !== localeDecimalMarker ? value.replace(localeDecimalMarker, this._maskService.decimalMarker) : value;
      }
      if (this._maskService.leadZero && value && this._maskService.dropSpecialCharacters !== false) {
        value = this._maskService._checkPrecision(mask, value);
      }
      if (this._maskService.decimalMarker === ",") {
        value = value.toString().replace(
          ".",
          ","
          /* MaskExpression.COMMA */
        );
      }
      this._maskService.isNumberValue = true;
    }
    if (value === null || value === void 0) {
      return this._maskService.applyMask("", mask);
    }
    return this._maskService.applyMask(`${value}`, mask);
  }
  _setMask(value) {
    if (this._maskExpressionArray.length > 0) {
      this._maskExpressionArray.some((mask) => {
        const test = this._maskService.removeMask(value)?.length <= this._maskService.removeMask(mask)?.length;
        if (value && test) {
          this.mask = mask;
          return test;
        } else {
          const expression = this._maskExpressionArray[this._maskExpressionArray.length - 1] ?? "";
          this.mask = expression;
        }
      });
    }
  }
};
_NgxMaskPipe.ɵfac = function NgxMaskPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMaskPipe)();
};
_NgxMaskPipe.ɵpipe = ɵɵdefinePipe({
  name: "mask",
  type: _NgxMaskPipe,
  pure: true,
  standalone: true
});
var NgxMaskPipe = _NgxMaskPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMaskPipe, [{
    type: Pipe,
    args: [{
      name: "mask",
      pure: true,
      standalone: true
    }]
  }], null, null);
})();
export {
  INITIAL_CONFIG,
  NEW_CONFIG,
  NGX_MASK_CONFIG,
  NgxMaskDirective,
  NgxMaskPipe,
  NgxMaskService,
  initialConfig,
  provideEnvironmentNgxMask,
  provideNgxMask,
  timeMasks,
  withoutValidation
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v18.2.0
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=ngx-mask.js.map
