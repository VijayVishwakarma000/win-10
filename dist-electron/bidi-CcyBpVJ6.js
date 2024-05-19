"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __reflectGet = Reflect.get;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateIn = (member, obj) => {
  if (Object(obj) !== obj)
    throw TypeError('Cannot use the "in" operator on this value');
  return member.has(obj);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var _emitter, _logger, _processor, _queue, _isProcessing, _processIfNeeded, processIfNeeded_fn, _browserCdpClient, _browsingContextStorage, _realmStorage, _cdpConnection, _browserCdpClient2, _browserCdpClient3, _browsingContextStorage2, _modifiers, _setModifier, setModifier_fn, _a2, _DOUBLE_CLICK_TIME_MS, _MAX_DOUBLE_CLICK_RADIUS, _x, _y, _time, _clickContexts, _tickStart, _tickDuration, _inputState, _context, _isMacOS, _dispatchAction, dispatchAction_fn, _dispatchPointerDownAction, dispatchPointerDownAction_fn, _dispatchPointerUpAction, dispatchPointerUpAction_fn, _dispatchPointerMoveAction, dispatchPointerMoveAction_fn, _getCoordinateFromOrigin, getCoordinateFromOrigin_fn, _dispatchScrollAction, dispatchScrollAction_fn, _dispatchKeyDownAction, dispatchKeyDownAction_fn, _dispatchKeyUpAction, dispatchKeyUpAction_fn, _locked, _acquirers, _release, release_fn, _sources, _mutex, _browsingContextStorage3, _realmStorage2, _inputStateManager, _getActionsByTick, getActionsByTick_fn, _i, _n, _t, _e2, _s, _l, _o, _d, _p, _g2, _r, r_fn, _R, R_fn, _b, b_fn, _u, u_fn, _m, m_fn, _a3, a_fn, _P, P_fn, _E, E_fn, _S, S_fn, _O, O_fn, _k, k_fn, _x2, x_fn, _h, h_fn, _f2, f_fn, _T, T_fn, _A, A_fn, _y2, y_fn, _w, w_fn, _c, c_fn, _C, C_fn, _b2, _i2, _n2, _t2, _e3, _s2, _l2, _c2, _browsingContextStorage4, _networkStorage, _getRequestOrFail, getRequestOrFail_fn, _getBlockedRequestOrFail, getBlockedRequestOrFail_fn, _browserCdpClient4, _properties, _id, _logger2, _createChannelProxyEvalStr, createChannelProxyEvalStr_fn, _createAndGetHandleInRealm, createAndGetHandleInRealm_fn, _createSendMessageHandle, createSendMessageHandle_fn, _startListener, startListener_fn, _getHandleFromWindow, getHandleFromWindow_fn, _id2, _cdpPreloadScripts, _functionDeclaration, _targetIds, _channels, _sandbox, _contexts, _getEvaluateString, getEvaluateString_fn, _browsingContextStorage5, _realmStorage3, _preloadScriptStorage, _logger3, _getRealm, getRealm_fn, _eventManager, _browserCdpClient5, _browserCdpClient6, _browsingContextStorage6, _logger4, _isNoSuchUserContextError, isNoSuchUserContextError_fn, _getCdpBrowserContextId, getCdpBrowserContextId_fn, _expandStoragePartitionSpecByBrowsingContext, expandStoragePartitionSpecByBrowsingContext_fn, _expandStoragePartitionSpecByStorageKey, expandStoragePartitionSpecByStorageKey_fn, _expandStoragePartitionSpec, expandStoragePartitionSpec_fn, _matchCookie, matchCookie_fn, _message, _channel, _browserProcessor, _browsingContextProcessor, _cdpProcessor, _inputProcessor, _networkProcessor, _permissionsProcessor, _scriptProcessor, _sessionProcessor, _storageProcessor, _parser, _logger5, _processCommand, processCommand_fn, _processTargetParams, processTargetParams_fn, _isFinished, _promise, _resolve, _reject, _d2, _cdpClient, _eventManager2, _executionContextId, _logger6, _origin, _realmId, _realmStorage4, _registerEvent, registerEvent_fn, _cdpRemoteObjectToCallArgument, _e, cdpRemoteObjectToCallArgument_fn, _flattenKeyValuePairs, flattenKeyValuePairs_fn, _flattenValueList, flattenValueList_fn, _serializeCdpExceptionDetails, serializeCdpExceptionDetails_fn, _getExceptionResult, getExceptionResult_fn, _getSerializationOptions, getSerializationOptions_fn, _getAdditionalSerializationParameters, getAdditionalSerializationParameters_fn, _getMaxObjectDepth, getMaxObjectDepth_fn, _releaseObject, releaseObject_fn, _browsingContextId, _browsingContextStorage7, _getBrowsingContextId, getBrowsingContextId_fn, _f, _id3, _parentId, _children, _browsingContextStorage8, _lifecycle, _navigation, _url, _eventManager3, _realmStorage5, _loaderId, _cdpTarget, _maybeDefaultRealm, _logger7, _previousViewport, _deleteAllChildren, deleteAllChildren_fn, _defaultRealm, defaultRealm_get, _initListeners, initListeners_fn, _documentChanged, documentChanged_fn, _resetLifecycleIfFinished, resetLifecycleIfFinished_fn, _failLifecycleIfNotFinished, failLifecycleIfNotFinished_fn, _parseRect, parseRect_fn, _getLocatorDelegate, getLocatorDelegate_fn, _locateNodesByLocator, locateNodesByLocator_fn, _realmType, _ownerRealms, _eventManager4, _realmStorage6, _cdpTarget2, _logger8, _initializeEntryAddedEventListener, initializeEntryAddedEventListener_fn, _getExceptionText, getExceptionText_fn, _id4, _cdpClient2, _browserCdpClient7, _eventManager5, _preloadScriptStorage2, _browsingContextStorage9, _networkStorage2, _unblocked, _acceptInsecureCerts, _networkDomainEnabled, _fetchDomainStages, _unblock, unblock_fn, _setEventListeners, setEventListeners_fn, _initAndEvaluatePreloadScripts, initAndEvaluatePreloadScripts_fn, _browserCdpClient8, _cdpConnection2, _selfTargetId, _eventManager6, _browsingContextStorage10, _networkStorage3, _acceptInsecureCerts2, _preloadScriptStorage3, _realmStorage7, _defaultUserContextId, _logger9, _setEventListeners2, setEventListeners_fn2, _handleFrameAttachedEvent, handleFrameAttachedEvent_fn, _handleFrameDetachedEvent, handleFrameDetachedEvent_fn, _handleAttachedToTargetEvent, handleAttachedToTargetEvent_fn, _createCdpTarget, createCdpTarget_fn, _workers, _handleWorkerTarget, handleWorkerTarget_fn, _handleDetachedFromTargetEvent, handleDetachedFromTargetEvent_fn, _handleTargetInfoChangedEvent, handleTargetInfoChangedEvent_fn, _handleTargetCrashedEvent, handleTargetCrashedEvent_fn, _contexts2, _id5, _fetchId, _interceptPhase, _servedFromCache, _redirectCount, _request, _response, _eventManager7, _networkStorage4, _cdpTarget3, _logger10, _emittedEvents, _phaseChanged, phaseChanged_fn, _interceptsInPhase, interceptsInPhase_fn, _isBlockedInPhase, isBlockedInPhase_fn, _emitEventsIfReady, emitEventsIfReady_fn, _context2, context_get, _emitEvent, emitEvent_fn, _getBaseEventParams, getBaseEventParams_fn, _getResponseEventParams, getResponseEventParams_fn, _getNavigationId, getNavigationId_fn, _getRequestData, getRequestData_fn, _getTimings, getTimings_fn, _getBeforeRequestEvent, getBeforeRequestEvent_fn, _getResponseStartedEvent, getResponseStartedEvent_fn, _getResponseReceivedEvent, getResponseReceivedEvent_fn, _isIgnoredEvent, isIgnoredEvent_fn, _authChallenges, authChallenges_fn, _getInitiatorType, getInitiatorType_fn, _getCookies, getCookies_fn, _eventManager8, _logger11, _requests, _intercepts, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn, _scripts, _knownHandlesToRealmMap, _realmMap, _capacity, _entries, _onItemRemoved, _g, _getDefaultValue, _counter, _id6, _subscriptionPriority, _channelToContextToEventMap, _browsingContextStorage11, _getEventSubscriptionPriorityForChannel, getEventSubscriptionPriorityForChannel_fn, _checkUnsubscribe, checkUnsubscribe_fn, _idWrapper, _contextId, _event, _eventToContextsMap, _eventBuffers, _lastMessageSent, _subscriptionManager, _browsingContextStorage12, _getMapKey, getMapKey_fn, _bufferEvent, bufferEvent_fn, _markEventSent, markEventSent_fn, _getBufferedEvents, getBufferedEvents_fn, _messageQueue, _transport, _commandProcessor, _eventManager9, _browsingContextStorage13, _realmStorage8, _preloadScriptStorage4, _logger12, _handleIncomingMessage, _processOutgoingMessage, _topLevelContextsLoaded, topLevelContextsLoaded_fn, _detached, _connection, _sessionId, _url2, _transport2, _delay, _timeout, _closed, _callbacks, _emitters, _cdp, _adapters, _browserCdpConnection, _closed2, _client, _browserClient, _forwardMessage, _onMessage, _workers2, _initialize, initialize_fn, _workers3, _initialize2, initialize_fn2, _workers4, _initialize3, initialize_fn3, _deserializeNumber, deserializeNumber_fn, _deserializeTuple, deserializeTuple_fn, _prompt, _remoteValue, _disposed, _frame, _apply, _isolate, _channel2, _scripts2, _disposables, _initialize4, initialize_fn4, _connection2, connection_get, _handleMessage, _getRealm2, getRealm_fn2, _findFrame, findFrame_fn, _redirectBy, _response2, _frame2, _request2, _initialize5, initialize_fn5, _hasInternalHeaderOverwrite, hasInternalHeaderOverwrite_get, _extraHTTPHeaders, extraHTTPHeaders_get, _userAgentHeaders, userAgentHeaders_get, _authenticationHandled, _handleAuthentication, _serializeNumber, serializeNumber_fn, _serializeObject, serializeObject_fn, _evaluate, evaluate_fn, _frame3, _initialize6, initialize_fn6, _bindingsInstalled, _worker, _frame4, _realm, _page, _page2, _lastMovePoint, _page3, _browser, _page4, _frame5, _page5, _worker2;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const main = require("./main-BFKTUpjP.js");
const require$$2 = require("crypto");
var BidiMapper = {};
var BidiServer$1 = {};
var EventEmitter$1 = {};
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
const mitt$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mitt
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ main.getAugmentedNamespace(mitt$1);
var __importDefault = main.commonjsGlobal && main.commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(EventEmitter$1, "__esModule", { value: true });
EventEmitter$1.EventEmitter = void 0;
const mitt_1 = __importDefault(require$$0);
class EventEmitter {
  constructor() {
    __privateAdd(this, _emitter, (0, mitt_1.default)());
  }
  on(type, handler) {
    __privateGet(this, _emitter).on(type, handler);
    return this;
  }
  /**
   * Like `on` but the listener will only be fired once and then it will be removed.
   * @param event The event you'd like to listen to
   * @param handler The handler function to run when the event occurs
   * @return `this` to enable chaining method calls.
   */
  once(event, handler) {
    const onceHandler = (eventData) => {
      handler(eventData);
      this.off(event, onceHandler);
    };
    return this.on(event, onceHandler);
  }
  off(type, handler) {
    __privateGet(this, _emitter).off(type, handler);
    return this;
  }
  /**
   * Emits an event and call any associated listeners.
   *
   * @param event The event to emit.
   * @param eventData Any data to emit with the event.
   * @return `true` if there are any listeners, `false` otherwise.
   */
  emit(event, eventData) {
    __privateGet(this, _emitter).emit(event, eventData);
  }
  /**
   * Removes all listeners. If given an event argument, it will remove only
   * listeners for that event.
   * @param event - the event to remove listeners for.
   * @returns `this` to enable you to chain method calls.
   */
  removeAllListeners(event) {
    if (event) {
      __privateGet(this, _emitter).all.delete(event);
    } else {
      __privateGet(this, _emitter).all.clear();
    }
    return this;
  }
}
_emitter = new WeakMap();
EventEmitter$1.EventEmitter = EventEmitter;
var log = {};
Object.defineProperty(log, "__esModule", { value: true });
log.LogType = void 0;
var LogType;
(function(LogType2) {
  LogType2["bidi"] = "bidi";
  LogType2["cdp"] = "cdp";
  LogType2["debug"] = "debug";
  LogType2["debugError"] = "debug:error";
  LogType2["debugInfo"] = "debug:info";
})(LogType || (log.LogType = LogType = {}));
var ProcessingQueue$1 = {};
Object.defineProperty(ProcessingQueue$1, "__esModule", { value: true });
ProcessingQueue$1.ProcessingQueue = void 0;
const log_js_1$9 = log;
const _ProcessingQueue = class _ProcessingQueue {
  constructor(processor, logger) {
    __privateAdd(this, _processIfNeeded);
    __privateAdd(this, _logger, void 0);
    __privateAdd(this, _processor, void 0);
    __privateAdd(this, _queue, []);
    // Flag to keep only 1 active processor.
    __privateAdd(this, _isProcessing, false);
    __privateSet(this, _processor, processor);
    __privateSet(this, _logger, logger);
  }
  add(entry, name) {
    __privateGet(this, _queue).push([entry, name]);
    void __privateMethod(this, _processIfNeeded, processIfNeeded_fn).call(this);
  }
};
_logger = new WeakMap();
_processor = new WeakMap();
_queue = new WeakMap();
_isProcessing = new WeakMap();
_processIfNeeded = new WeakSet();
processIfNeeded_fn = async function() {
  var _a4;
  if (__privateGet(this, _isProcessing)) {
    return;
  }
  __privateSet(this, _isProcessing, true);
  while (__privateGet(this, _queue).length > 0) {
    const arrayEntry = __privateGet(this, _queue).shift();
    if (!arrayEntry) {
      continue;
    }
    const [entryPromise, name] = arrayEntry;
    (_a4 = __privateGet(this, _logger)) == null ? void 0 : _a4.call(this, _ProcessingQueue.LOGGER_PREFIX, "Processing event:", name);
    await entryPromise.then((entry) => {
      var _a5;
      if (entry.kind === "error") {
        (_a5 = __privateGet(this, _logger)) == null ? void 0 : _a5.call(this, log_js_1$9.LogType.debugError, "Event threw before sending:", entry.error.message, entry.error.stack);
        return;
      }
      return __privateGet(this, _processor).call(this, entry.value);
    }).catch((error) => {
      var _a5;
      (_a5 = __privateGet(this, _logger)) == null ? void 0 : _a5.call(this, log_js_1$9.LogType.debugError, "Event was not processed:", error == null ? void 0 : error.message);
    });
  }
  __privateSet(this, _isProcessing, false);
};
__publicField(_ProcessingQueue, "LOGGER_PREFIX", `${log_js_1$9.LogType.debug}:queue`);
let ProcessingQueue = _ProcessingQueue;
ProcessingQueue$1.ProcessingQueue = ProcessingQueue;
var CommandProcessor$1 = {};
var protocol = {};
var cdp = {};
Object.defineProperty(cdp, "__esModule", { value: true });
var chromiumBidi = {};
Object.defineProperty(chromiumBidi, "__esModule", { value: true });
chromiumBidi.EVENT_NAMES = chromiumBidi.Network = chromiumBidi.BrowsingContext = chromiumBidi.Log = chromiumBidi.Script = chromiumBidi.BiDiModule = void 0;
var BiDiModule;
(function(BiDiModule2) {
  BiDiModule2["Browser"] = "browser";
  BiDiModule2["BrowsingContext"] = "browsingContext";
  BiDiModule2["Cdp"] = "cdp";
  BiDiModule2["Input"] = "input";
  BiDiModule2["Log"] = "log";
  BiDiModule2["Network"] = "network";
  BiDiModule2["Script"] = "script";
  BiDiModule2["Session"] = "session";
})(BiDiModule || (chromiumBidi.BiDiModule = BiDiModule = {}));
var Script;
(function(Script2) {
  (function(EventNames) {
    EventNames["Message"] = "script.message";
    EventNames["RealmCreated"] = "script.realmCreated";
    EventNames["RealmDestroyed"] = "script.realmDestroyed";
  })(Script2.EventNames || (Script2.EventNames = {}));
})(Script || (chromiumBidi.Script = Script = {}));
var Log;
(function(Log2) {
  (function(EventNames) {
    EventNames["LogEntryAdded"] = "log.entryAdded";
  })(Log2.EventNames || (Log2.EventNames = {}));
})(Log || (chromiumBidi.Log = Log = {}));
var BrowsingContext$1;
(function(BrowsingContext2) {
  (function(EventNames) {
    EventNames["ContextCreated"] = "browsingContext.contextCreated";
    EventNames["ContextDestroyed"] = "browsingContext.contextDestroyed";
    EventNames["DomContentLoaded"] = "browsingContext.domContentLoaded";
    EventNames["DownloadWillBegin"] = "browsingContext.downloadWillBegin";
    EventNames["FragmentNavigated"] = "browsingContext.fragmentNavigated";
    EventNames["Load"] = "browsingContext.load";
    EventNames["NavigationAborted"] = "browsingContext.navigationAborted";
    EventNames["NavigationFailed"] = "browsingContext.navigationFailed";
    EventNames["NavigationStarted"] = "browsingContext.navigationStarted";
    EventNames["UserPromptClosed"] = "browsingContext.userPromptClosed";
    EventNames["UserPromptOpened"] = "browsingContext.userPromptOpened";
  })(BrowsingContext2.EventNames || (BrowsingContext2.EventNames = {}));
})(BrowsingContext$1 || (chromiumBidi.BrowsingContext = BrowsingContext$1 = {}));
var Network;
(function(Network2) {
  (function(EventNames) {
    EventNames["AuthRequired"] = "network.authRequired";
    EventNames["BeforeRequestSent"] = "network.beforeRequestSent";
    EventNames["FetchError"] = "network.fetchError";
    EventNames["ResponseCompleted"] = "network.responseCompleted";
    EventNames["ResponseStarted"] = "network.responseStarted";
  })(Network2.EventNames || (Network2.EventNames = {}));
})(Network || (chromiumBidi.Network = Network = {}));
chromiumBidi.EVENT_NAMES = /* @__PURE__ */ new Set([
  // keep-sorted start
  ...Object.values(BiDiModule),
  ...Object.values(BrowsingContext$1.EventNames),
  ...Object.values(Log.EventNames),
  ...Object.values(Network.EventNames),
  ...Object.values(Script.EventNames)
  // keep-sorted end
]);
var webdriverBidi = {};
Object.defineProperty(webdriverBidi, "__esModule", { value: true });
var ErrorResponse = {};
Object.defineProperty(ErrorResponse, "__esModule", { value: true });
ErrorResponse.UnderspecifiedStoragePartitionException = ErrorResponse.UnableToSetFileInputException = ErrorResponse.UnableToSetCookieException = ErrorResponse.NoSuchStoragePartitionException = ErrorResponse.UnsupportedOperationException = ErrorResponse.UnableToCloseBrowserException = ErrorResponse.UnableToCaptureScreenException = ErrorResponse.UnknownErrorException = ErrorResponse.UnknownCommandException = ErrorResponse.SessionNotCreatedException = ErrorResponse.NoSuchUserContextException = ErrorResponse.NoSuchScriptException = ErrorResponse.NoSuchRequestException = ErrorResponse.NoSuchNodeException = ErrorResponse.NoSuchInterceptException = ErrorResponse.NoSuchHistoryEntryException = ErrorResponse.NoSuchHandleException = ErrorResponse.NoSuchFrameException = ErrorResponse.NoSuchElementException = ErrorResponse.NoSuchAlertException = ErrorResponse.MoveTargetOutOfBoundsException = ErrorResponse.InvalidSessionIdException = ErrorResponse.InvalidSelectorException = ErrorResponse.InvalidArgumentException = ErrorResponse.Exception = void 0;
class Exception {
  constructor(error, message, stacktrace) {
    __publicField(this, "error");
    __publicField(this, "message");
    __publicField(this, "stacktrace");
    this.error = error;
    this.message = message;
    this.stacktrace = stacktrace;
  }
  toErrorResponse(commandId) {
    return {
      type: "error",
      id: commandId,
      error: this.error,
      message: this.message,
      stacktrace: this.stacktrace
    };
  }
}
ErrorResponse.Exception = Exception;
class InvalidArgumentException extends Exception {
  constructor(message, stacktrace) {
    super("invalid argument", message, stacktrace);
  }
}
ErrorResponse.InvalidArgumentException = InvalidArgumentException;
class InvalidSelectorException extends Exception {
  constructor(message, stacktrace) {
    super("invalid selector", message, stacktrace);
  }
}
ErrorResponse.InvalidSelectorException = InvalidSelectorException;
class InvalidSessionIdException extends Exception {
  constructor(message, stacktrace) {
    super("invalid session id", message, stacktrace);
  }
}
ErrorResponse.InvalidSessionIdException = InvalidSessionIdException;
class MoveTargetOutOfBoundsException extends Exception {
  constructor(message, stacktrace) {
    super("move target out of bounds", message, stacktrace);
  }
}
ErrorResponse.MoveTargetOutOfBoundsException = MoveTargetOutOfBoundsException;
class NoSuchAlertException extends Exception {
  constructor(message, stacktrace) {
    super("no such alert", message, stacktrace);
  }
}
ErrorResponse.NoSuchAlertException = NoSuchAlertException;
class NoSuchElementException extends Exception {
  constructor(message, stacktrace) {
    super("no such element", message, stacktrace);
  }
}
ErrorResponse.NoSuchElementException = NoSuchElementException;
class NoSuchFrameException extends Exception {
  constructor(message, stacktrace) {
    super("no such frame", message, stacktrace);
  }
}
ErrorResponse.NoSuchFrameException = NoSuchFrameException;
class NoSuchHandleException extends Exception {
  constructor(message, stacktrace) {
    super("no such handle", message, stacktrace);
  }
}
ErrorResponse.NoSuchHandleException = NoSuchHandleException;
class NoSuchHistoryEntryException extends Exception {
  constructor(message, stacktrace) {
    super("no such history entry", message, stacktrace);
  }
}
ErrorResponse.NoSuchHistoryEntryException = NoSuchHistoryEntryException;
class NoSuchInterceptException extends Exception {
  constructor(message, stacktrace) {
    super("no such intercept", message, stacktrace);
  }
}
ErrorResponse.NoSuchInterceptException = NoSuchInterceptException;
class NoSuchNodeException extends Exception {
  constructor(message, stacktrace) {
    super("no such node", message, stacktrace);
  }
}
ErrorResponse.NoSuchNodeException = NoSuchNodeException;
class NoSuchRequestException extends Exception {
  constructor(message, stacktrace) {
    super("no such request", message, stacktrace);
  }
}
ErrorResponse.NoSuchRequestException = NoSuchRequestException;
class NoSuchScriptException extends Exception {
  constructor(message, stacktrace) {
    super("no such script", message, stacktrace);
  }
}
ErrorResponse.NoSuchScriptException = NoSuchScriptException;
class NoSuchUserContextException extends Exception {
  constructor(message, stacktrace) {
    super("no such user context", message, stacktrace);
  }
}
ErrorResponse.NoSuchUserContextException = NoSuchUserContextException;
class SessionNotCreatedException extends Exception {
  constructor(message, stacktrace) {
    super("session not created", message, stacktrace);
  }
}
ErrorResponse.SessionNotCreatedException = SessionNotCreatedException;
class UnknownCommandException extends Exception {
  constructor(message, stacktrace) {
    super("unknown command", message, stacktrace);
  }
}
ErrorResponse.UnknownCommandException = UnknownCommandException;
class UnknownErrorException extends Exception {
  constructor(message, stacktrace = new Error().stack) {
    super("unknown error", message, stacktrace);
  }
}
ErrorResponse.UnknownErrorException = UnknownErrorException;
class UnableToCaptureScreenException extends Exception {
  constructor(message, stacktrace) {
    super("unable to capture screen", message, stacktrace);
  }
}
ErrorResponse.UnableToCaptureScreenException = UnableToCaptureScreenException;
class UnableToCloseBrowserException extends Exception {
  constructor(message, stacktrace) {
    super("unable to close browser", message, stacktrace);
  }
}
ErrorResponse.UnableToCloseBrowserException = UnableToCloseBrowserException;
class UnsupportedOperationException extends Exception {
  constructor(message, stacktrace) {
    super("unsupported operation", message, stacktrace);
  }
}
ErrorResponse.UnsupportedOperationException = UnsupportedOperationException;
class NoSuchStoragePartitionException extends Exception {
  constructor(message, stacktrace) {
    super("no such storage partition", message, stacktrace);
  }
}
ErrorResponse.NoSuchStoragePartitionException = NoSuchStoragePartitionException;
class UnableToSetCookieException extends Exception {
  constructor(message, stacktrace) {
    super("unable to set cookie", message, stacktrace);
  }
}
ErrorResponse.UnableToSetCookieException = UnableToSetCookieException;
class UnableToSetFileInputException extends Exception {
  constructor(message, stacktrace) {
    super("unable to set file input", message, stacktrace);
  }
}
ErrorResponse.UnableToSetFileInputException = UnableToSetFileInputException;
class UnderspecifiedStoragePartitionException extends Exception {
  constructor(message, stacktrace) {
    super("underspecified storage partition", message, stacktrace);
  }
}
ErrorResponse.UnderspecifiedStoragePartitionException = UnderspecifiedStoragePartitionException;
var webdriverBidiPermissions = {};
Object.defineProperty(webdriverBidiPermissions, "__esModule", { value: true });
(function(exports2) {
  var __createBinding = main.commonjsGlobal && main.commonjsGlobal.__createBinding || (Object.create ? function(o, m, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m, k2);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k2];
      } };
    }
    Object.defineProperty(o, k22, desc);
  } : function(o, m, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o[k22] = m[k2];
  });
  var __setModuleDefault = main.commonjsGlobal && main.commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v2) {
    Object.defineProperty(o, "default", { enumerable: true, value: v2 });
  } : function(o, v2) {
    o["default"] = v2;
  });
  var __importStar = main.commonjsGlobal && main.commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k2 in mod)
        if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
          __createBinding(result, mod, k2);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  var __exportStar = main.commonjsGlobal && main.commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ChromiumBidi = exports2.Cdp = void 0;
  exports2.Cdp = __importStar(cdp);
  exports2.ChromiumBidi = __importStar(chromiumBidi);
  __exportStar(webdriverBidi, exports2);
  __exportStar(ErrorResponse, exports2);
  __exportStar(webdriverBidiPermissions, exports2);
})(protocol);
var BidiNoOpParser$1 = {};
Object.defineProperty(BidiNoOpParser$1, "__esModule", { value: true });
BidiNoOpParser$1.BidiNoOpParser = void 0;
class BidiNoOpParser {
  // Browser domain
  // keep-sorted start block=yes
  parseRemoveUserContextParams(params) {
    return params;
  }
  // keep-sorted end
  // Browsing Context domain
  // keep-sorted start block=yes
  parseActivateParams(params) {
    return params;
  }
  parseCaptureScreenshotParams(params) {
    return params;
  }
  parseCloseParams(params) {
    return params;
  }
  parseCreateParams(params) {
    return params;
  }
  parseGetTreeParams(params) {
    return params;
  }
  parseHandleUserPromptParams(params) {
    return params;
  }
  parseLocateNodesParams(params) {
    return params;
  }
  parseNavigateParams(params) {
    return params;
  }
  parsePrintParams(params) {
    return params;
  }
  parseReloadParams(params) {
    return params;
  }
  parseSetViewportParams(params) {
    return params;
  }
  parseTraverseHistoryParams(params) {
    return params;
  }
  // keep-sorted end
  // CDP domain
  // keep-sorted start block=yes
  parseGetSessionParams(params) {
    return params;
  }
  parseResolveRealmParams(params) {
    return params;
  }
  parseSendCommandParams(params) {
    return params;
  }
  // keep-sorted end
  // Script domain
  // keep-sorted start block=yes
  parseAddPreloadScriptParams(params) {
    return params;
  }
  parseCallFunctionParams(params) {
    return params;
  }
  parseDisownParams(params) {
    return params;
  }
  parseEvaluateParams(params) {
    return params;
  }
  parseGetRealmsParams(params) {
    return params;
  }
  parseRemovePreloadScriptParams(params) {
    return params;
  }
  // keep-sorted end
  // Input domain
  // keep-sorted start block=yes
  parsePerformActionsParams(params) {
    return params;
  }
  parseReleaseActionsParams(params) {
    return params;
  }
  parseSetFilesParams(params) {
    return params;
  }
  // keep-sorted end
  // Network domain
  // keep-sorted start block=yes
  parseAddInterceptParams(params) {
    return params;
  }
  parseContinueRequestParams(params) {
    return params;
  }
  parseContinueResponseParams(params) {
    return params;
  }
  parseContinueWithAuthParams(params) {
    return params;
  }
  parseFailRequestParams(params) {
    return params;
  }
  parseProvideResponseParams(params) {
    return params;
  }
  parseRemoveInterceptParams(params) {
    return params;
  }
  // keep-sorted end
  // Permissions domain
  // keep-sorted start block=yes
  parseSetPermissionsParams(params) {
    return params;
  }
  // keep-sorted end
  // Session domain
  // keep-sorted start block=yes
  parseSubscribeParams(params) {
    return params;
  }
  // keep-sorted end
  // Storage domain
  // keep-sorted start block=yes
  parseDeleteCookiesParams(params) {
    return params;
  }
  parseGetCookiesParams(params) {
    return params;
  }
  parseSetCookieParams(params) {
    return params;
  }
}
BidiNoOpParser$1.BidiNoOpParser = BidiNoOpParser;
var BrowserProcessor$1 = {};
Object.defineProperty(BrowserProcessor$1, "__esModule", { value: true });
BrowserProcessor$1.BrowserProcessor = void 0;
const protocol_js_1$m = protocol;
class BrowserProcessor {
  constructor(browserCdpClient) {
    __privateAdd(this, _browserCdpClient, void 0);
    __privateSet(this, _browserCdpClient, browserCdpClient);
  }
  close() {
    setTimeout(() => __privateGet(this, _browserCdpClient).sendCommand("Browser.close"), 0);
    return {};
  }
  async createUserContext(params) {
    const request = {
      proxyServer: params["goog:proxyServer"] ?? void 0
    };
    const proxyBypassList = params["goog:proxyBypassList"] ?? void 0;
    if (proxyBypassList) {
      request.proxyBypassList = proxyBypassList.join(",");
    }
    const context = await __privateGet(this, _browserCdpClient).sendCommand("Target.createBrowserContext", request);
    return {
      userContext: context.browserContextId
    };
  }
  async removeUserContext(params) {
    const userContext = params.userContext;
    if (userContext === "default") {
      throw new protocol_js_1$m.InvalidArgumentException("`default` user context cannot be removed");
    }
    try {
      await __privateGet(this, _browserCdpClient).sendCommand("Target.disposeBrowserContext", {
        browserContextId: userContext
      });
    } catch (err) {
      if (err.message.startsWith("Failed to find context with id")) {
        throw new protocol_js_1$m.NoSuchUserContextException(err.message);
      }
      throw err;
    }
    return {};
  }
  async getUserContexts() {
    const result = await __privateGet(this, _browserCdpClient).sendCommand("Target.getBrowserContexts");
    return {
      userContexts: [
        {
          userContext: "default"
        },
        ...result.browserContextIds.map((id) => {
          return {
            userContext: id
          };
        })
      ]
    };
  }
}
_browserCdpClient = new WeakMap();
BrowserProcessor$1.BrowserProcessor = BrowserProcessor;
var CdpProcessor$1 = {};
Object.defineProperty(CdpProcessor$1, "__esModule", { value: true });
CdpProcessor$1.CdpProcessor = void 0;
const protocol_js_1$l = protocol;
class CdpProcessor {
  constructor(browsingContextStorage, realmStorage, cdpConnection, browserCdpClient) {
    __privateAdd(this, _browsingContextStorage, void 0);
    __privateAdd(this, _realmStorage, void 0);
    __privateAdd(this, _cdpConnection, void 0);
    __privateAdd(this, _browserCdpClient2, void 0);
    __privateSet(this, _browsingContextStorage, browsingContextStorage);
    __privateSet(this, _realmStorage, realmStorage);
    __privateSet(this, _cdpConnection, cdpConnection);
    __privateSet(this, _browserCdpClient2, browserCdpClient);
  }
  getSession(params) {
    const context = params.context;
    const sessionId = __privateGet(this, _browsingContextStorage).getContext(context).cdpTarget.cdpSessionId;
    if (sessionId === void 0) {
      return {};
    }
    return { session: sessionId };
  }
  resolveRealm(params) {
    const context = params.realm;
    const realm = __privateGet(this, _realmStorage).getRealm({ realmId: context });
    if (realm === void 0) {
      throw new protocol_js_1$l.UnknownErrorException(`Could not find realm ${params.realm}`);
    }
    return { executionContextId: realm.executionContextId };
  }
  async sendCommand(params) {
    const client = params.session ? __privateGet(this, _cdpConnection).getCdpClient(params.session) : __privateGet(this, _browserCdpClient2);
    const result = await client.sendCommand(params.method, params.params);
    return {
      result,
      session: params.session
    };
  }
}
_browsingContextStorage = new WeakMap();
_realmStorage = new WeakMap();
_cdpConnection = new WeakMap();
_browserCdpClient2 = new WeakMap();
CdpProcessor$1.CdpProcessor = CdpProcessor;
var BrowsingContextProcessor$1 = {};
Object.defineProperty(BrowsingContextProcessor$1, "__esModule", { value: true });
BrowsingContextProcessor$1.BrowsingContextProcessor = void 0;
const protocol_js_1$k = protocol;
class BrowsingContextProcessor {
  constructor(browserCdpClient, browsingContextStorage) {
    __privateAdd(this, _browserCdpClient3, void 0);
    __privateAdd(this, _browsingContextStorage2, void 0);
    __privateSet(this, _browserCdpClient3, browserCdpClient);
    __privateSet(this, _browsingContextStorage2, browsingContextStorage);
  }
  getTree(params) {
    const resultContexts = params.root === void 0 ? __privateGet(this, _browsingContextStorage2).getTopLevelContexts() : [__privateGet(this, _browsingContextStorage2).getContext(params.root)];
    return {
      contexts: resultContexts.map((c) => c.serializeToBidiValue(params.maxDepth ?? Number.MAX_VALUE))
    };
  }
  async create(params) {
    let referenceContext;
    let userContext = "default";
    if (params.referenceContext !== void 0) {
      referenceContext = __privateGet(this, _browsingContextStorage2).getContext(params.referenceContext);
      if (!referenceContext.isTopLevelContext()) {
        throw new protocol_js_1$k.InvalidArgumentException(`referenceContext should be a top-level context`);
      }
      userContext = referenceContext.userContext;
    }
    if (params.userContext !== void 0) {
      userContext = params.userContext;
    }
    const existingContexts = __privateGet(this, _browsingContextStorage2).getAllContexts().filter((context2) => context2.userContext === userContext);
    let newWindow = false;
    switch (params.type) {
      case "tab":
        newWindow = false;
        break;
      case "window":
        newWindow = true;
        break;
    }
    if (!existingContexts.length) {
      newWindow = true;
    }
    let result;
    try {
      result = await __privateGet(this, _browserCdpClient3).sendCommand("Target.createTarget", {
        url: "about:blank",
        newWindow,
        browserContextId: userContext === "default" ? void 0 : userContext
      });
    } catch (err) {
      if (
        // See https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/devtools/protocol/target_handler.cc;l=90;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
        err.message.startsWith("Failed to find browser context with id") || // See https://source.chromium.org/chromium/chromium/src/+/main:headless/lib/browser/protocol/target_handler.cc;l=49;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
        err.message === "browserContextId"
      ) {
        throw new protocol_js_1$k.NoSuchUserContextException(`The context ${userContext} was not found`);
      }
      throw err;
    }
    const contextId = result.targetId;
    const context = __privateGet(this, _browsingContextStorage2).getContext(contextId);
    await context.lifecycleLoaded();
    return { context: context.id };
  }
  navigate(params) {
    const context = __privateGet(this, _browsingContextStorage2).getContext(params.context);
    return context.navigate(
      params.url,
      params.wait ?? "none"
      /* BrowsingContext.ReadinessState.None */
    );
  }
  reload(params) {
    const context = __privateGet(this, _browsingContextStorage2).getContext(params.context);
    return context.reload(
      params.ignoreCache ?? false,
      params.wait ?? "none"
      /* BrowsingContext.ReadinessState.None */
    );
  }
  async activate(params) {
    const context = __privateGet(this, _browsingContextStorage2).getContext(params.context);
    if (!context.isTopLevelContext()) {
      throw new protocol_js_1$k.InvalidArgumentException("Activation is only supported on the top-level context");
    }
    await context.activate();
    return {};
  }
  async captureScreenshot(params) {
    const context = __privateGet(this, _browsingContextStorage2).getContext(params.context);
    return await context.captureScreenshot(params);
  }
  async print(params) {
    const context = __privateGet(this, _browsingContextStorage2).getContext(params.context);
    return await context.print(params);
  }
  async setViewport(params) {
    const context = __privateGet(this, _browsingContextStorage2).getContext(params.context);
    if (!context.isTopLevelContext()) {
      throw new protocol_js_1$k.InvalidArgumentException("Emulating viewport is only supported on the top-level context");
    }
    await context.setViewport(params.viewport, params.devicePixelRatio);
    return {};
  }
  async traverseHistory(params) {
    const context = __privateGet(this, _browsingContextStorage2).getContext(params.context);
    if (!context) {
      throw new protocol_js_1$k.InvalidArgumentException(`No browsing context with id ${params.context}`);
    }
    await context.traverseHistory(params.delta);
    return {};
  }
  async handleUserPrompt(params) {
    var _a4;
    const context = __privateGet(this, _browsingContextStorage2).getContext(params.context);
    try {
      await context.handleUserPrompt(params);
    } catch (error) {
      if ((_a4 = error.message) == null ? void 0 : _a4.includes("No dialog is showing")) {
        throw new protocol_js_1$k.NoSuchAlertException("No dialog is showing");
      }
      throw error;
    }
    return {};
  }
  async close(params) {
    const context = __privateGet(this, _browsingContextStorage2).getContext(params.context);
    if (!context.isTopLevelContext()) {
      throw new protocol_js_1$k.InvalidArgumentException(`Non top-level browsing context ${context.id} cannot be closed.`);
    }
    try {
      const detachedFromTargetPromise = new Promise((resolve) => {
        const onContextDestroyed = (event) => {
          if (event.targetId === params.context) {
            __privateGet(this, _browserCdpClient3).off("Target.detachedFromTarget", onContextDestroyed);
            resolve();
          }
        };
        __privateGet(this, _browserCdpClient3).on("Target.detachedFromTarget", onContextDestroyed);
      });
      if (params.promptUnload) {
        await context.close();
      } else {
        await __privateGet(this, _browserCdpClient3).sendCommand("Target.closeTarget", {
          targetId: params.context
        });
      }
      await detachedFromTargetPromise;
    } catch (error) {
      if (!(error.code === -32e3 && error.message === "Not attached to an active page")) {
        throw error;
      }
    }
    return {};
  }
  async locateNodes(params) {
    const context = __privateGet(this, _browsingContextStorage2).getContext(params.context);
    return await context.locateNodes(params);
  }
}
_browserCdpClient3 = new WeakMap();
_browsingContextStorage2 = new WeakMap();
BrowsingContextProcessor$1.BrowsingContextProcessor = BrowsingContextProcessor;
var InputProcessor$1 = {};
var assert$1 = {};
Object.defineProperty(assert$1, "__esModule", { value: true });
assert$1.assert = void 0;
function assert(predicate, message) {
  if (!predicate) {
    throw new Error(message ?? "Internal assertion failed.");
  }
}
assert$1.assert = assert;
var ActionDispatcher$1 = {};
var InputSource = {};
Object.defineProperty(InputSource, "__esModule", { value: true });
InputSource.WheelSource = InputSource.PointerSource = InputSource.KeySource = InputSource.NoneSource = void 0;
class NoneSource {
  constructor() {
    __publicField(this, "type", "none");
  }
}
InputSource.NoneSource = NoneSource;
class KeySource {
  constructor() {
    __privateAdd(this, _setModifier);
    __publicField(this, "type", "key");
    __publicField(this, "pressed", /* @__PURE__ */ new Set());
    // This is a bitfield that matches the modifiers parameter of
    // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchKeyEvent
    __privateAdd(this, _modifiers, 0);
  }
  get modifiers() {
    return __privateGet(this, _modifiers);
  }
  get alt() {
    return (__privateGet(this, _modifiers) & 1) === 1;
  }
  set alt(value) {
    __privateMethod(this, _setModifier, setModifier_fn).call(this, value, 1);
  }
  get ctrl() {
    return (__privateGet(this, _modifiers) & 2) === 2;
  }
  set ctrl(value) {
    __privateMethod(this, _setModifier, setModifier_fn).call(this, value, 2);
  }
  get meta() {
    return (__privateGet(this, _modifiers) & 4) === 4;
  }
  set meta(value) {
    __privateMethod(this, _setModifier, setModifier_fn).call(this, value, 4);
  }
  get shift() {
    return (__privateGet(this, _modifiers) & 8) === 8;
  }
  set shift(value) {
    __privateMethod(this, _setModifier, setModifier_fn).call(this, value, 8);
  }
}
_modifiers = new WeakMap();
_setModifier = new WeakSet();
setModifier_fn = function(value, bit) {
  if (value) {
    __privateSet(this, _modifiers, __privateGet(this, _modifiers) | bit);
  } else {
    __privateSet(this, _modifiers, __privateGet(this, _modifiers) & ~bit);
  }
};
InputSource.KeySource = KeySource;
class PointerSource {
  constructor(id, subtype) {
    __publicField(this, "type", "pointer");
    __publicField(this, "subtype");
    __publicField(this, "pointerId");
    __publicField(this, "pressed", /* @__PURE__ */ new Set());
    __publicField(this, "x", 0);
    __publicField(this, "y", 0);
    __privateAdd(this, _clickContexts, /* @__PURE__ */ new Map());
    this.pointerId = id;
    this.subtype = subtype;
  }
  // This is a bitfield that matches the buttons parameter of
  // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent
  get buttons() {
    let buttons = 0;
    for (const button of this.pressed) {
      switch (button) {
        case 0:
          buttons |= 1;
          break;
        case 1:
          buttons |= 4;
          break;
        case 2:
          buttons |= 2;
          break;
        case 3:
          buttons |= 8;
          break;
        case 4:
          buttons |= 16;
          break;
      }
    }
    return buttons;
  }
  setClickCount(button, context) {
    let storedContext = __privateGet(this, _clickContexts).get(button);
    if (!storedContext || storedContext.compare(context)) {
      storedContext = context;
    }
    ++storedContext.count;
    __privateGet(this, _clickContexts).set(button, storedContext);
    return storedContext.count;
  }
  getClickCount(button) {
    var _a4;
    return ((_a4 = __privateGet(this, _clickContexts).get(button)) == null ? void 0 : _a4.count) ?? 0;
  }
}
_clickContexts = new WeakMap();
// --- Platform-specific code starts here ---
// Input.dispatchMouseEvent doesn't know the concept of double click, so we
// need to create the logic, similar to how it's done for OSes:
// https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:ui/events/event.cc;l=479
__publicField(PointerSource, "ClickContext", (_a2 = class {
  constructor(x2, y2, time) {
    __publicField(this, "count", 0);
    __privateAdd(this, _x, void 0);
    __privateAdd(this, _y, void 0);
    __privateAdd(this, _time, void 0);
    __privateSet(this, _x, x2);
    __privateSet(this, _y, y2);
    __privateSet(this, _time, time);
  }
  compare(context) {
    return (
      // The click needs to be within a certain amount of ms.
      __privateGet(context, _time) - __privateGet(this, _time) > __privateGet(_a2, _DOUBLE_CLICK_TIME_MS) || // The click needs to be within a certain square radius.
      Math.abs(__privateGet(context, _x) - __privateGet(this, _x)) > __privateGet(_a2, _MAX_DOUBLE_CLICK_RADIUS) || Math.abs(__privateGet(context, _y) - __privateGet(this, _y)) > __privateGet(_a2, _MAX_DOUBLE_CLICK_RADIUS)
    );
  }
}, _DOUBLE_CLICK_TIME_MS = new WeakMap(), _MAX_DOUBLE_CLICK_RADIUS = new WeakMap(), _x = new WeakMap(), _y = new WeakMap(), _time = new WeakMap(), __privateAdd(_a2, _DOUBLE_CLICK_TIME_MS, 500), __privateAdd(_a2, _MAX_DOUBLE_CLICK_RADIUS, 2), _a2));
InputSource.PointerSource = PointerSource;
class WheelSource {
  constructor() {
    __publicField(this, "type", "wheel");
  }
}
InputSource.WheelSource = WheelSource;
var keyUtils = {};
Object.defineProperty(keyUtils, "__esModule", { value: true });
keyUtils.getKeyLocation = keyUtils.getKeyCode = keyUtils.getNormalizedKey = void 0;
function getNormalizedKey(value) {
  switch (value) {
    case "":
      return "Unidentified";
    case "":
      return "Cancel";
    case "":
      return "Help";
    case "":
      return "Backspace";
    case "":
      return "Tab";
    case "":
      return "Clear";
    case "":
      return "Return";
    case "":
      return "Enter";
    case "":
      return "Shift";
    case "":
      return "Control";
    case "":
      return "Alt";
    case "":
      return "Pause";
    case "":
      return "Escape";
    case "":
      return " ";
    case "":
      return "PageUp";
    case "":
      return "PageDown";
    case "":
      return "End";
    case "":
      return "Home";
    case "":
      return "ArrowLeft";
    case "":
      return "ArrowUp";
    case "":
      return "ArrowRight";
    case "":
      return "ArrowDown";
    case "":
      return "Insert";
    case "":
      return "Delete";
    case "":
      return ";";
    case "":
      return "=";
    case "":
      return "0";
    case "":
      return "1";
    case "":
      return "2";
    case "":
      return "3";
    case "":
      return "4";
    case "":
      return "5";
    case "":
      return "6";
    case "":
      return "7";
    case "":
      return "8";
    case "":
      return "9";
    case "":
      return "*";
    case "":
      return "+";
    case "":
      return ",";
    case "":
      return "-";
    case "":
      return ".";
    case "":
      return "/";
    case "":
      return "F1";
    case "":
      return "F2";
    case "":
      return "F3";
    case "":
      return "F4";
    case "":
      return "F5";
    case "":
      return "F6";
    case "":
      return "F7";
    case "":
      return "F8";
    case "":
      return "F9";
    case "":
      return "F10";
    case "":
      return "F11";
    case "":
      return "F12";
    case "":
      return "Meta";
    case "":
      return "ZenkakuHankaku";
    case "":
      return "Shift";
    case "":
      return "Control";
    case "":
      return "Alt";
    case "":
      return "Meta";
    case "":
      return "PageUp";
    case "":
      return "PageDown";
    case "":
      return "End";
    case "":
      return "Home";
    case "":
      return "ArrowLeft";
    case "":
      return "ArrowUp";
    case "":
      return "ArrowRight";
    case "":
      return "ArrowDown";
    case "":
      return "Insert";
    case "":
      return "Delete";
    default:
      return value;
  }
}
keyUtils.getNormalizedKey = getNormalizedKey;
function getKeyCode(key) {
  switch (key) {
    case "`":
    case "~":
      return "Backquote";
    case "\\":
    case "|":
      return "Backslash";
    case "":
      return "Backspace";
    case "[":
    case "{":
      return "BracketLeft";
    case "]":
    case "}":
      return "BracketRight";
    case ",":
    case "<":
      return "Comma";
    case "0":
    case ")":
      return "Digit0";
    case "1":
    case "!":
      return "Digit1";
    case "2":
    case "@":
      return "Digit2";
    case "3":
    case "#":
      return "Digit3";
    case "4":
    case "$":
      return "Digit4";
    case "5":
    case "%":
      return "Digit5";
    case "6":
    case "^":
      return "Digit6";
    case "7":
    case "&":
      return "Digit7";
    case "8":
    case "*":
      return "Digit8";
    case "9":
    case "(":
      return "Digit9";
    case "=":
    case "+":
      return "Equal";
    case "a":
    case "A":
      return "KeyA";
    case "b":
    case "B":
      return "KeyB";
    case "c":
    case "C":
      return "KeyC";
    case "d":
    case "D":
      return "KeyD";
    case "e":
    case "E":
      return "KeyE";
    case "f":
    case "F":
      return "KeyF";
    case "g":
    case "G":
      return "KeyG";
    case "h":
    case "H":
      return "KeyH";
    case "i":
    case "I":
      return "KeyI";
    case "j":
    case "J":
      return "KeyJ";
    case "k":
    case "K":
      return "KeyK";
    case "l":
    case "L":
      return "KeyL";
    case "m":
    case "M":
      return "KeyM";
    case "n":
    case "N":
      return "KeyN";
    case "o":
    case "O":
      return "KeyO";
    case "p":
    case "P":
      return "KeyP";
    case "q":
    case "Q":
      return "KeyQ";
    case "r":
    case "R":
      return "KeyR";
    case "s":
    case "S":
      return "KeyS";
    case "t":
    case "T":
      return "KeyT";
    case "u":
    case "U":
      return "KeyU";
    case "v":
    case "V":
      return "KeyV";
    case "w":
    case "W":
      return "KeyW";
    case "x":
    case "X":
      return "KeyX";
    case "y":
    case "Y":
      return "KeyY";
    case "z":
    case "Z":
      return "KeyZ";
    case "-":
    case "_":
      return "Minus";
    case ".":
      return "Period";
    case "'":
    case '"':
      return "Quote";
    case ";":
    case ":":
      return "Semicolon";
    case "/":
    case "?":
      return "Slash";
    case "":
      return "AltLeft";
    case "":
      return "AltRight";
    case "":
      return "ControlLeft";
    case "":
      return "ControlRight";
    case "":
      return "Enter";
    case "":
      return "MetaLeft";
    case "":
      return "MetaRight";
    case "":
      return "ShiftLeft";
    case "":
      return "ShiftRight";
    case " ":
    case "":
      return "Space";
    case "":
      return "Tab";
    case "":
      return "Delete";
    case "":
      return "End";
    case "":
      return "Help";
    case "":
      return "Home";
    case "":
      return "Insert";
    case "":
      return "PageDown";
    case "":
      return "PageUp";
    case "":
      return "ArrowDown";
    case "":
      return "ArrowLeft";
    case "":
      return "ArrowRight";
    case "":
      return "ArrowUp";
    case "":
      return "Escape";
    case "":
      return "F1";
    case "":
      return "F2";
    case "":
      return "F3";
    case "":
      return "F4";
    case "":
      return "F5";
    case "":
      return "F6";
    case "":
      return "F7";
    case "":
      return "F8";
    case "":
      return "F9";
    case "":
      return "F10";
    case "":
      return "F11";
    case "":
      return "F12";
    case "":
    case "":
      return "Numpad0";
    case "":
    case "":
      return "Numpad1";
    case "":
    case "":
      return "Numpad2";
    case "":
    case "":
      return "Numpad3";
    case "":
    case "":
      return "Numpad4";
    case "":
      return "Numpad5";
    case "":
    case "":
      return "Numpad6";
    case "":
    case "":
      return "Numpad7";
    case "":
    case "":
      return "Numpad8";
    case "":
    case "":
      return "Numpad9";
    case "":
      return "NumpadAdd";
    case "":
      return "NumpadComma";
    case "":
    case "":
      return "NumpadDecimal";
    case "":
      return "NumpadDivide";
    case "":
      return "NumpadEnter";
    case "":
      return "NumpadMultiply";
    case "":
      return "NumpadSubtract";
    default:
      return;
  }
}
keyUtils.getKeyCode = getKeyCode;
function getKeyLocation(key) {
  switch (key) {
    case "":
    case "":
    case "":
    case "":
    case "":
      return 1;
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
      return 3;
    case "":
    case "":
    case "":
    case "":
      return 2;
    default:
      return 0;
  }
}
keyUtils.getKeyLocation = getKeyLocation;
var USKeyboardLayout = {};
Object.defineProperty(USKeyboardLayout, "__esModule", { value: true });
USKeyboardLayout.KeyToKeyCode = void 0;
USKeyboardLayout.KeyToKeyCode = {
  "0": 48,
  "1": 49,
  "2": 50,
  "3": 51,
  "4": 52,
  "5": 53,
  "6": 54,
  "7": 55,
  "8": 56,
  "9": 57,
  Abort: 3,
  Help: 6,
  Backspace: 8,
  Tab: 9,
  Numpad5: 12,
  NumpadEnter: 13,
  Enter: 13,
  "\\r": 13,
  "\\n": 13,
  ShiftLeft: 16,
  ShiftRight: 16,
  ControlLeft: 17,
  ControlRight: 17,
  AltLeft: 18,
  AltRight: 18,
  Pause: 19,
  CapsLock: 20,
  Escape: 27,
  Convert: 28,
  NonConvert: 29,
  Space: 32,
  Numpad9: 33,
  PageUp: 33,
  Numpad3: 34,
  PageDown: 34,
  End: 35,
  Numpad1: 35,
  Home: 36,
  Numpad7: 36,
  ArrowLeft: 37,
  Numpad4: 37,
  Numpad8: 38,
  ArrowUp: 38,
  ArrowRight: 39,
  Numpad6: 39,
  Numpad2: 40,
  ArrowDown: 40,
  Select: 41,
  Open: 43,
  PrintScreen: 44,
  Insert: 45,
  Numpad0: 45,
  Delete: 46,
  NumpadDecimal: 46,
  Digit0: 48,
  Digit1: 49,
  Digit2: 50,
  Digit3: 51,
  Digit4: 52,
  Digit5: 53,
  Digit6: 54,
  Digit7: 55,
  Digit8: 56,
  Digit9: 57,
  KeyA: 65,
  KeyB: 66,
  KeyC: 67,
  KeyD: 68,
  KeyE: 69,
  KeyF: 70,
  KeyG: 71,
  KeyH: 72,
  KeyI: 73,
  KeyJ: 74,
  KeyK: 75,
  KeyL: 76,
  KeyM: 77,
  KeyN: 78,
  KeyO: 79,
  KeyP: 80,
  KeyQ: 81,
  KeyR: 82,
  KeyS: 83,
  KeyT: 84,
  KeyU: 85,
  KeyV: 86,
  KeyW: 87,
  KeyX: 88,
  KeyY: 89,
  KeyZ: 90,
  MetaLeft: 91,
  MetaRight: 92,
  ContextMenu: 93,
  NumpadMultiply: 106,
  NumpadAdd: 107,
  NumpadSubtract: 109,
  NumpadDivide: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  F20: 131,
  F21: 132,
  F22: 133,
  F23: 134,
  F24: 135,
  NumLock: 144,
  ScrollLock: 145,
  AudioVolumeMute: 173,
  AudioVolumeDown: 174,
  AudioVolumeUp: 175,
  MediaTrackNext: 176,
  MediaTrackPrevious: 177,
  MediaStop: 178,
  MediaPlayPause: 179,
  Semicolon: 186,
  Equal: 187,
  NumpadEqual: 187,
  Comma: 188,
  Minus: 189,
  Period: 190,
  Slash: 191,
  Backquote: 192,
  BracketLeft: 219,
  Backslash: 220,
  BracketRight: 221,
  Quote: 222,
  AltGraph: 225,
  Props: 247,
  Cancel: 3,
  Clear: 12,
  Shift: 16,
  Control: 17,
  Alt: 18,
  Accept: 30,
  ModeChange: 31,
  " ": 32,
  Print: 42,
  Execute: 43,
  "\\u0000": 46,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
  Meta: 91,
  "*": 106,
  "+": 107,
  "-": 109,
  "/": 111,
  ";": 186,
  "=": 187,
  ",": 188,
  ".": 190,
  "`": 192,
  "[": 219,
  "\\\\": 220,
  "]": 221,
  "'": 222,
  Attn: 246,
  CrSel: 247,
  ExSel: 248,
  EraseEof: 249,
  Play: 250,
  ZoomOut: 251,
  ")": 48,
  "!": 49,
  "@": 50,
  "#": 51,
  $: 52,
  "%": 53,
  "^": 54,
  "&": 55,
  "(": 57,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  ":": 186,
  "<": 188,
  _: 189,
  ">": 190,
  "?": 191,
  "~": 192,
  "{": 219,
  "|": 220,
  "}": 221,
  '"': 222,
  Camera: 44,
  EndCall: 95,
  VolumeDown: 182,
  VolumeUp: 183
};
Object.defineProperty(ActionDispatcher$1, "__esModule", { value: true });
ActionDispatcher$1.ActionDispatcher = void 0;
const protocol_js_1$j = protocol;
const assert_js_1$6 = assert$1;
const InputSource_js_1$1 = InputSource;
const keyUtils_js_1 = keyUtils;
const USKeyboardLayout_js_1 = USKeyboardLayout;
const CALCULATE_IN_VIEW_CENTER_PT_DECL = ((i) => {
  const t = i.getClientRects()[0], e = Math.max(0, Math.min(t.x, t.x + t.width)), n = Math.min(window.innerWidth, Math.max(t.x, t.x + t.width)), h = Math.max(0, Math.min(t.y, t.y + t.height)), m = Math.min(window.innerHeight, Math.max(t.y, t.y + t.height));
  return [e + (n - e >> 1), h + (m - h >> 1)];
}).toString();
const IS_MAC_DECL = (() => {
  return navigator.platform.toLowerCase().includes("mac");
}).toString();
async function getElementCenter(context, element) {
  var _a4, _b3, _c3, _d3;
  const sandbox = await context.getOrCreateSandbox(void 0);
  const result = await sandbox.callFunction(CALCULATE_IN_VIEW_CENTER_PT_DECL, false, { type: "undefined" }, [element]);
  if (result.type === "exception") {
    throw new protocol_js_1$j.NoSuchElementException(`Origin element ${element.sharedId} was not found`);
  }
  (0, assert_js_1$6.assert)(result.result.type === "array");
  (0, assert_js_1$6.assert)(((_b3 = (_a4 = result.result.value) == null ? void 0 : _a4[0]) == null ? void 0 : _b3.type) === "number");
  (0, assert_js_1$6.assert)(((_d3 = (_c3 = result.result.value) == null ? void 0 : _c3[1]) == null ? void 0 : _d3.type) === "number");
  const { result: { value: [{ value: x2 }, { value: y2 }] } } = result;
  return { x: x2, y: y2 };
}
class ActionDispatcher {
  constructor(inputState, context, isMacOS) {
    __privateAdd(this, _dispatchAction);
    __privateAdd(this, _dispatchPointerDownAction);
    __privateAdd(this, _dispatchPointerUpAction);
    __privateAdd(this, _dispatchPointerMoveAction);
    __privateAdd(this, _getCoordinateFromOrigin);
    __privateAdd(this, _dispatchScrollAction);
    __privateAdd(this, _dispatchKeyDownAction);
    __privateAdd(this, _dispatchKeyUpAction);
    __privateAdd(this, _tickStart, 0);
    __privateAdd(this, _tickDuration, 0);
    __privateAdd(this, _inputState, void 0);
    __privateAdd(this, _context, void 0);
    __privateAdd(this, _isMacOS, void 0);
    __privateSet(this, _inputState, inputState);
    __privateSet(this, _context, context);
    __privateSet(this, _isMacOS, isMacOS);
  }
  async dispatchActions(optionsByTick) {
    await __privateGet(this, _inputState).queue.run(async () => {
      for (const options of optionsByTick) {
        await this.dispatchTickActions(options);
      }
    });
  }
  async dispatchTickActions(options) {
    __privateSet(this, _tickStart, performance.now());
    __privateSet(this, _tickDuration, 0);
    for (const { action } of options) {
      if ("duration" in action && action.duration !== void 0) {
        __privateSet(this, _tickDuration, Math.max(__privateGet(this, _tickDuration), action.duration));
      }
    }
    const promises = [
      new Promise((resolve) => setTimeout(resolve, __privateGet(this, _tickDuration)))
    ];
    for (const option of options) {
      promises.push(__privateMethod(this, _dispatchAction, dispatchAction_fn).call(this, option));
    }
    await Promise.all(promises);
  }
}
_tickStart = new WeakMap();
_tickDuration = new WeakMap();
_inputState = new WeakMap();
_context = new WeakMap();
_isMacOS = new WeakMap();
_dispatchAction = new WeakSet();
dispatchAction_fn = async function({ id, action }) {
  const source = __privateGet(this, _inputState).get(id);
  const keyState = __privateGet(this, _inputState).getGlobalKeyState();
  switch (action.type) {
    case "keyDown": {
      await __privateMethod(this, _dispatchKeyDownAction, dispatchKeyDownAction_fn).call(this, source, action);
      __privateGet(this, _inputState).cancelList.push({
        id,
        action: {
          ...action,
          type: "keyUp"
        }
      });
      break;
    }
    case "keyUp": {
      await __privateMethod(this, _dispatchKeyUpAction, dispatchKeyUpAction_fn).call(this, source, action);
      break;
    }
    case "pause": {
      break;
    }
    case "pointerDown": {
      await __privateMethod(this, _dispatchPointerDownAction, dispatchPointerDownAction_fn).call(this, source, keyState, action);
      __privateGet(this, _inputState).cancelList.push({
        id,
        action: {
          ...action,
          type: "pointerUp"
        }
      });
      break;
    }
    case "pointerMove": {
      await __privateMethod(this, _dispatchPointerMoveAction, dispatchPointerMoveAction_fn).call(this, source, keyState, action);
      break;
    }
    case "pointerUp": {
      await __privateMethod(this, _dispatchPointerUpAction, dispatchPointerUpAction_fn).call(this, source, keyState, action);
      break;
    }
    case "scroll": {
      await __privateMethod(this, _dispatchScrollAction, dispatchScrollAction_fn).call(this, source, keyState, action);
      break;
    }
  }
};
_dispatchPointerDownAction = new WeakSet();
dispatchPointerDownAction_fn = function(source, keyState, action) {
  const { button } = action;
  if (source.pressed.has(button)) {
    return;
  }
  source.pressed.add(button);
  const { x: x2, y: y2, subtype: pointerType } = source;
  const { width, height, pressure, twist, tangentialPressure } = action;
  const { tiltX, tiltY } = getTilt(action);
  const { modifiers } = keyState;
  switch (pointerType) {
    case "mouse":
    case "pen":
      return __privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
        type: "mousePressed",
        x: x2,
        y: y2,
        modifiers,
        button: getCdpButton(button),
        buttons: source.buttons,
        clickCount: source.setClickCount(button, new InputSource_js_1$1.PointerSource.ClickContext(x2, y2, performance.now())),
        pointerType,
        tangentialPressure,
        tiltX,
        tiltY,
        twist,
        force: pressure
      });
    case "touch":
      return __privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [
          {
            x: x2,
            y: y2,
            ...getRadii(width ?? 1, height ?? 1),
            tangentialPressure,
            tiltX,
            tiltY,
            twist,
            force: pressure,
            id: source.pointerId
          }
        ],
        modifiers
      });
  }
};
_dispatchPointerUpAction = new WeakSet();
dispatchPointerUpAction_fn = function(source, keyState, action) {
  const { button } = action;
  if (!source.pressed.has(button)) {
    return;
  }
  source.pressed.delete(button);
  const { x: x2, y: y2, subtype: pointerType } = source;
  const { modifiers } = keyState;
  switch (pointerType) {
    case "mouse":
    case "pen":
      return __privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
        type: "mouseReleased",
        x: x2,
        y: y2,
        modifiers,
        button: getCdpButton(button),
        buttons: source.buttons,
        clickCount: source.getClickCount(button),
        pointerType
      });
    case "touch":
      return __privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [
          {
            x: x2,
            y: y2,
            id: source.pointerId
          }
        ],
        modifiers
      });
  }
};
_dispatchPointerMoveAction = new WeakSet();
dispatchPointerMoveAction_fn = async function(source, keyState, action) {
  const { x: startX, y: startY, subtype: pointerType } = source;
  const { width, height, pressure, twist, tangentialPressure, x: offsetX, y: offsetY, origin = "viewport", duration = __privateGet(this, _tickDuration) } = action;
  const { tiltX, tiltY } = getTilt(action);
  const { targetX, targetY } = await __privateMethod(this, _getCoordinateFromOrigin, getCoordinateFromOrigin_fn).call(this, origin, offsetX, offsetY, startX, startY);
  if (targetX < 0 || targetY < 0) {
    throw new protocol_js_1$j.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
  }
  let last;
  do {
    const ratio = duration > 0 ? (performance.now() - __privateGet(this, _tickStart)) / duration : 1;
    last = ratio >= 1;
    let x2;
    let y2;
    if (last) {
      x2 = targetX;
      y2 = targetY;
    } else {
      x2 = Math.round(ratio * (targetX - startX) + startX);
      y2 = Math.round(ratio * (targetY - startY) + startY);
    }
    if (source.x !== x2 || source.y !== y2) {
      const { modifiers } = keyState;
      switch (pointerType) {
        case "mouse":
          await __privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
            type: "mouseMoved",
            x: x2,
            y: y2,
            modifiers,
            clickCount: 0,
            button: getCdpButton(source.pressed.values().next().value ?? 5),
            buttons: source.buttons,
            pointerType,
            tangentialPressure,
            tiltX,
            tiltY,
            twist,
            force: pressure
          });
          break;
        case "pen":
          if (source.pressed.size !== 0) {
            await __privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
              type: "mouseMoved",
              x: x2,
              y: y2,
              modifiers,
              clickCount: 0,
              button: getCdpButton(source.pressed.values().next().value ?? 5),
              buttons: source.buttons,
              pointerType,
              tangentialPressure,
              tiltX,
              tiltY,
              twist,
              force: pressure
            });
          }
          break;
        case "touch":
          if (source.pressed.size !== 0) {
            await __privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
              type: "touchMove",
              touchPoints: [
                {
                  x: x2,
                  y: y2,
                  ...getRadii(width ?? 1, height ?? 1),
                  tangentialPressure,
                  tiltX,
                  tiltY,
                  twist,
                  force: pressure,
                  id: source.pointerId
                }
              ],
              modifiers
            });
          }
          break;
      }
      source.x = x2;
      source.y = y2;
    }
  } while (!last);
};
_getCoordinateFromOrigin = new WeakSet();
getCoordinateFromOrigin_fn = async function(origin, offsetX, offsetY, startX, startY) {
  let targetX;
  let targetY;
  switch (origin) {
    case "viewport":
      targetX = offsetX;
      targetY = offsetY;
      break;
    case "pointer":
      targetX = startX + offsetX;
      targetY = startY + offsetY;
      break;
    default: {
      const { x: posX, y: posY } = await getElementCenter(__privateGet(this, _context), origin.element);
      targetX = posX + offsetX;
      targetY = posY + offsetY;
      break;
    }
  }
  return { targetX, targetY };
};
_dispatchScrollAction = new WeakSet();
dispatchScrollAction_fn = async function(_source, keyState, action) {
  const { deltaX: targetDeltaX, deltaY: targetDeltaY, x: offsetX, y: offsetY, origin = "viewport", duration = __privateGet(this, _tickDuration) } = action;
  if (origin === "pointer") {
    throw new protocol_js_1$j.InvalidArgumentException('"pointer" origin is invalid for scrolling.');
  }
  const { targetX, targetY } = await __privateMethod(this, _getCoordinateFromOrigin, getCoordinateFromOrigin_fn).call(this, origin, offsetX, offsetY, 0, 0);
  if (targetX < 0 || targetY < 0) {
    throw new protocol_js_1$j.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
  }
  let currentDeltaX = 0;
  let currentDeltaY = 0;
  let last;
  do {
    const ratio = duration > 0 ? (performance.now() - __privateGet(this, _tickStart)) / duration : 1;
    last = ratio >= 1;
    let deltaX;
    let deltaY;
    if (last) {
      deltaX = targetDeltaX - currentDeltaX;
      deltaY = targetDeltaY - currentDeltaY;
    } else {
      deltaX = Math.round(ratio * targetDeltaX - currentDeltaX);
      deltaY = Math.round(ratio * targetDeltaY - currentDeltaY);
    }
    if (deltaX !== 0 || deltaY !== 0) {
      const { modifiers } = keyState;
      await __privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
        type: "mouseWheel",
        deltaX,
        deltaY,
        x: targetX,
        y: targetY,
        modifiers
      });
      currentDeltaX += deltaX;
      currentDeltaY += deltaY;
    }
  } while (!last);
};
_dispatchKeyDownAction = new WeakSet();
dispatchKeyDownAction_fn = async function(source, action) {
  if ([...action.value].length > 1) {
    throw new protocol_js_1$j.InvalidArgumentException(`Invalid key value: ${action.value}`);
  }
  const rawKey = action.value;
  const key = (0, keyUtils_js_1.getNormalizedKey)(rawKey);
  const repeat = source.pressed.has(key);
  const code = (0, keyUtils_js_1.getKeyCode)(rawKey);
  const location = (0, keyUtils_js_1.getKeyLocation)(rawKey);
  switch (key) {
    case "Alt":
      source.alt = true;
      break;
    case "Shift":
      source.shift = true;
      break;
    case "Control":
      source.ctrl = true;
      break;
    case "Meta":
      source.meta = true;
      break;
  }
  source.pressed.add(key);
  const { modifiers } = source;
  const unmodifiedText = getKeyEventUnmodifiedText(key, source);
  const text = getKeyEventText(code ?? "", source) ?? unmodifiedText;
  let command;
  if (__privateGet(this, _isMacOS) && source.meta) {
    switch (code) {
      case "KeyA":
        command = "SelectAll";
        break;
      case "KeyC":
        command = "Copy";
        break;
      case "KeyV":
        command = source.shift ? "PasteAndMatchStyle" : "Paste";
        break;
      case "KeyX":
        command = "Cut";
        break;
      case "KeyZ":
        command = source.shift ? "Redo" : "Undo";
        break;
    }
  }
  const promises = [
    __privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
      type: text ? "keyDown" : "rawKeyDown",
      windowsVirtualKeyCode: USKeyboardLayout_js_1.KeyToKeyCode[key],
      key,
      code,
      text,
      unmodifiedText,
      autoRepeat: repeat,
      isSystemKey: source.alt || void 0,
      location: location < 3 ? location : void 0,
      isKeypad: location === 3,
      modifiers,
      commands: command ? [command] : void 0
    })
  ];
  if (key === "Escape") {
    if (!source.alt && (__privateGet(this, _isMacOS) && !source.ctrl && !source.meta || !__privateGet(this, _isMacOS))) {
      promises.push(__privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.cancelDragging"));
    }
  }
  await Promise.all(promises);
};
_dispatchKeyUpAction = new WeakSet();
dispatchKeyUpAction_fn = function(source, action) {
  if ([...action.value].length > 1) {
    throw new protocol_js_1$j.InvalidArgumentException(`Invalid key value: ${action.value}`);
  }
  const rawKey = action.value;
  const key = (0, keyUtils_js_1.getNormalizedKey)(rawKey);
  if (!source.pressed.has(key)) {
    return;
  }
  const code = (0, keyUtils_js_1.getKeyCode)(rawKey);
  const location = (0, keyUtils_js_1.getKeyLocation)(rawKey);
  switch (key) {
    case "Alt":
      source.alt = false;
      break;
    case "Shift":
      source.shift = false;
      break;
    case "Control":
      source.ctrl = false;
      break;
    case "Meta":
      source.meta = false;
      break;
  }
  source.pressed.delete(key);
  const { modifiers } = source;
  const unmodifiedText = getKeyEventUnmodifiedText(key, source);
  const text = getKeyEventText(code ?? "", source) ?? unmodifiedText;
  return __privateGet(this, _context).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
    type: "keyUp",
    windowsVirtualKeyCode: USKeyboardLayout_js_1.KeyToKeyCode[key],
    key,
    code,
    text,
    unmodifiedText,
    location: location < 3 ? location : void 0,
    isSystemKey: source.alt || void 0,
    isKeypad: location === 3,
    modifiers
  });
};
__publicField(ActionDispatcher, "isMacOS", async (context) => {
  const result = await (await context.getOrCreateSandbox(void 0)).callFunction(IS_MAC_DECL, false);
  (0, assert_js_1$6.assert)(result.type !== "exception");
  (0, assert_js_1$6.assert)(result.result.type === "boolean");
  return result.result.value;
});
ActionDispatcher$1.ActionDispatcher = ActionDispatcher;
const getKeyEventUnmodifiedText = (key, source) => {
  if (key === "Enter") {
    return "\r";
  }
  return [...key].length === 1 ? source.shift ? key.toLocaleUpperCase("en-US") : key : void 0;
};
const getKeyEventText = (code, source) => {
  if (source.ctrl) {
    switch (code) {
      case "Digit2":
        if (source.shift) {
          return "\0";
        }
        break;
      case "KeyA":
        return "";
      case "KeyB":
        return "";
      case "KeyC":
        return "";
      case "KeyD":
        return "";
      case "KeyE":
        return "";
      case "KeyF":
        return "";
      case "KeyG":
        return "\x07";
      case "KeyH":
        return "\b";
      case "KeyI":
        return "	";
      case "KeyJ":
        return "\n";
      case "KeyK":
        return "\v";
      case "KeyL":
        return "\f";
      case "KeyM":
        return "\r";
      case "KeyN":
        return "";
      case "KeyO":
        return "";
      case "KeyP":
        return "";
      case "KeyQ":
        return "";
      case "KeyR":
        return "";
      case "KeyS":
        return "";
      case "KeyT":
        return "";
      case "KeyU":
        return "";
      case "KeyV":
        return "";
      case "KeyW":
        return "";
      case "KeyX":
        return "";
      case "KeyY":
        return "";
      case "KeyZ":
        return "";
      case "BracketLeft":
        return "\x1B";
      case "Backslash":
        return "";
      case "BracketRight":
        return "";
      case "Digit6":
        if (source.shift) {
          return "";
        }
        break;
      case "Minus":
        return "";
    }
    return "";
  }
  if (source.alt) {
    return "";
  }
  return;
};
function getCdpButton(button) {
  switch (button) {
    case 0:
      return "left";
    case 1:
      return "middle";
    case 2:
      return "right";
    case 3:
      return "back";
    case 4:
      return "forward";
    default:
      return "none";
  }
}
function getTilt(action) {
  const altitudeAngle = action.altitudeAngle ?? 0;
  const azimuthAngle = action.azimuthAngle ?? 0;
  let tiltXRadians = 0;
  let tiltYRadians = 0;
  if (altitudeAngle === 0) {
    if (azimuthAngle === 0 || azimuthAngle === 2 * Math.PI) {
      tiltXRadians = Math.PI / 2;
    }
    if (azimuthAngle === Math.PI / 2) {
      tiltYRadians = Math.PI / 2;
    }
    if (azimuthAngle === Math.PI) {
      tiltXRadians = -Math.PI / 2;
    }
    if (azimuthAngle === 3 * Math.PI / 2) {
      tiltYRadians = -Math.PI / 2;
    }
    if (azimuthAngle > 0 && azimuthAngle < Math.PI / 2) {
      tiltXRadians = Math.PI / 2;
      tiltYRadians = Math.PI / 2;
    }
    if (azimuthAngle > Math.PI / 2 && azimuthAngle < Math.PI) {
      tiltXRadians = -Math.PI / 2;
      tiltYRadians = Math.PI / 2;
    }
    if (azimuthAngle > Math.PI && azimuthAngle < 3 * Math.PI / 2) {
      tiltXRadians = -Math.PI / 2;
      tiltYRadians = -Math.PI / 2;
    }
    if (azimuthAngle > 3 * Math.PI / 2 && azimuthAngle < 2 * Math.PI) {
      tiltXRadians = Math.PI / 2;
      tiltYRadians = -Math.PI / 2;
    }
  }
  if (altitudeAngle !== 0) {
    const tanAlt = Math.tan(altitudeAngle);
    tiltXRadians = Math.atan(Math.cos(azimuthAngle) / tanAlt);
    tiltYRadians = Math.atan(Math.sin(azimuthAngle) / tanAlt);
  }
  const factor = 180 / Math.PI;
  return {
    tiltX: Math.round(tiltXRadians * factor),
    tiltY: Math.round(tiltYRadians * factor)
  };
}
function getRadii(width, height) {
  return {
    radiusX: width ? width / 2 : 0.5,
    radiusY: height ? height / 2 : 0.5
  };
}
var InputStateManager$1 = {};
var InputState$1 = {};
var Mutex$1 = {};
Object.defineProperty(Mutex$1, "__esModule", { value: true });
Mutex$1.Mutex = void 0;
class Mutex {
  constructor() {
    __privateAdd(this, _release);
    __privateAdd(this, _locked, false);
    __privateAdd(this, _acquirers, []);
  }
  // This is FIFO.
  acquire() {
    const state = { resolved: false };
    if (__privateGet(this, _locked)) {
      return new Promise((resolve) => {
        __privateGet(this, _acquirers).push(() => resolve(__privateMethod(this, _release, release_fn).bind(this, state)));
      });
    }
    __privateSet(this, _locked, true);
    return Promise.resolve(__privateMethod(this, _release, release_fn).bind(this, state));
  }
  async run(action) {
    const release = await this.acquire();
    try {
      const result = await action();
      return result;
    } finally {
      release();
    }
  }
}
_locked = new WeakMap();
_acquirers = new WeakMap();
_release = new WeakSet();
release_fn = function(state) {
  if (state.resolved) {
    throw new Error("Cannot release more than once.");
  }
  state.resolved = true;
  const resolve = __privateGet(this, _acquirers).shift();
  if (!resolve) {
    __privateSet(this, _locked, false);
    return;
  }
  resolve();
};
Mutex$1.Mutex = Mutex;
Object.defineProperty(InputState$1, "__esModule", { value: true });
InputState$1.InputState = void 0;
const protocol_js_1$i = protocol;
const Mutex_js_1 = Mutex$1;
const InputSource_js_1 = InputSource;
class InputState {
  constructor() {
    __publicField(this, "cancelList", []);
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateAdd(this, _mutex, new Mutex_js_1.Mutex());
  }
  getOrCreate(id, type, subtype) {
    let source = __privateGet(this, _sources).get(id);
    if (!source) {
      switch (type) {
        case "none":
          source = new InputSource_js_1.NoneSource();
          break;
        case "key":
          source = new InputSource_js_1.KeySource();
          break;
        case "pointer": {
          let pointerId = subtype === "mouse" ? 0 : 2;
          const pointerIds = /* @__PURE__ */ new Set();
          for (const [, source2] of __privateGet(this, _sources)) {
            if (source2.type === "pointer") {
              pointerIds.add(source2.pointerId);
            }
          }
          while (pointerIds.has(pointerId)) {
            ++pointerId;
          }
          source = new InputSource_js_1.PointerSource(pointerId, subtype);
          break;
        }
        case "wheel":
          source = new InputSource_js_1.WheelSource();
          break;
        default:
          throw new protocol_js_1$i.InvalidArgumentException(`Expected "${"none"}", "${"key"}", "${"pointer"}", or "${"wheel"}". Found unknown source type ${type}.`);
      }
      __privateGet(this, _sources).set(id, source);
      return source;
    }
    if (source.type !== type) {
      throw new protocol_js_1$i.InvalidArgumentException(`Input source type of ${id} is ${source.type}, but received ${type}.`);
    }
    return source;
  }
  get(id) {
    const source = __privateGet(this, _sources).get(id);
    if (!source) {
      throw new protocol_js_1$i.UnknownErrorException(`Internal error.`);
    }
    return source;
  }
  getGlobalKeyState() {
    const state = new InputSource_js_1.KeySource();
    for (const [, source] of __privateGet(this, _sources)) {
      if (source.type !== "key") {
        continue;
      }
      for (const pressed of source.pressed) {
        state.pressed.add(pressed);
      }
      state.alt || (state.alt = source.alt);
      state.ctrl || (state.ctrl = source.ctrl);
      state.meta || (state.meta = source.meta);
      state.shift || (state.shift = source.shift);
    }
    return state;
  }
  get queue() {
    return __privateGet(this, _mutex);
  }
}
_sources = new WeakMap();
_mutex = new WeakMap();
InputState$1.InputState = InputState;
Object.defineProperty(InputStateManager$1, "__esModule", { value: true });
InputStateManager$1.InputStateManager = void 0;
const assert_js_1$5 = assert$1;
const InputState_js_1 = InputState$1;
class InputStateManager extends WeakMap {
  get(context) {
    (0, assert_js_1$5.assert)(context.isTopLevelContext());
    if (!this.has(context)) {
      this.set(context, new InputState_js_1.InputState());
    }
    return super.get(context);
  }
}
InputStateManager$1.InputStateManager = InputStateManager;
Object.defineProperty(InputProcessor$1, "__esModule", { value: true });
InputProcessor$1.InputProcessor = void 0;
const protocol_js_1$h = protocol;
const assert_js_1$4 = assert$1;
const ActionDispatcher_js_1 = ActionDispatcher$1;
const InputStateManager_js_1 = InputStateManager$1;
class InputProcessor {
  constructor(browsingContextStorage, realmStorage) {
    __privateAdd(this, _getActionsByTick);
    __privateAdd(this, _browsingContextStorage3, void 0);
    __privateAdd(this, _realmStorage2, void 0);
    __privateAdd(this, _inputStateManager, new InputStateManager_js_1.InputStateManager());
    __privateSet(this, _browsingContextStorage3, browsingContextStorage);
    __privateSet(this, _realmStorage2, realmStorage);
  }
  async performActions(params) {
    const context = __privateGet(this, _browsingContextStorage3).getContext(params.context);
    const inputState = __privateGet(this, _inputStateManager).get(context.top);
    const actionsByTick = __privateMethod(this, _getActionsByTick, getActionsByTick_fn).call(this, params, inputState);
    const dispatcher = new ActionDispatcher_js_1.ActionDispatcher(inputState, context, await ActionDispatcher_js_1.ActionDispatcher.isMacOS(context).catch(() => false));
    await dispatcher.dispatchActions(actionsByTick);
    return {};
  }
  async releaseActions(params) {
    const context = __privateGet(this, _browsingContextStorage3).getContext(params.context);
    const topContext = context.top;
    const inputState = __privateGet(this, _inputStateManager).get(topContext);
    const dispatcher = new ActionDispatcher_js_1.ActionDispatcher(inputState, context, await ActionDispatcher_js_1.ActionDispatcher.isMacOS(context).catch(() => false));
    await dispatcher.dispatchTickActions(inputState.cancelList.reverse());
    __privateGet(this, _inputStateManager).delete(topContext);
    return {};
  }
  async setFiles(params) {
    const context = __privateGet(this, _browsingContextStorage3).getContext(params.context);
    const realm = await context.getOrCreateSandbox(void 0);
    let result;
    try {
      result = await realm.callFunction(String(function getFiles(fileListLength) {
        if (!(this instanceof HTMLInputElement)) {
          return 0;
        }
        if (this.type !== "file") {
          return 1;
        }
        if (this.disabled) {
          return 2;
        }
        if (fileListLength > 1 && !this.multiple) {
          return 3;
        }
        return;
      }), false, params.element, [{ type: "number", value: params.files.length }]);
    } catch {
      throw new protocol_js_1$h.NoSuchElementException(`Could not find element ${params.element.sharedId}`);
    }
    (0, assert_js_1$4.assert)(result.type === "success");
    if (result.result.type === "number") {
      switch (result.result.value) {
        case 0: {
          throw new protocol_js_1$h.NoSuchElementException(`Could not find element ${params.element.sharedId}`);
        }
        case 1: {
          throw new protocol_js_1$h.UnableToSetFileInputException(`Element ${params.element.sharedId} is not a file input`);
        }
        case 2: {
          throw new protocol_js_1$h.UnableToSetFileInputException(`Input element ${params.element.sharedId} is disabled`);
        }
        case 3: {
          throw new protocol_js_1$h.UnableToSetFileInputException(`Cannot set multiple files on a non-multiple input element`);
        }
      }
    }
    if (params.files.length === 0) {
      await realm.callFunction(String(function dispatchEvent() {
        var _a4;
        if (((_a4 = this.files) == null ? void 0 : _a4.length) === 0) {
          this.dispatchEvent(new Event("cancel", {
            bubbles: true
          }));
          return;
        }
        this.files = new DataTransfer().files;
        this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
        this.dispatchEvent(new Event("change", { bubbles: true }));
      }), false, params.element);
      return {};
    }
    const paths = [];
    for (let i = 0; i < params.files.length; ++i) {
      const result2 = await realm.callFunction(
        String(function getFiles(index) {
          var _a4;
          return (_a4 = this.files) == null ? void 0 : _a4.item(index);
        }),
        false,
        params.element,
        [{ type: "number", value: 0 }],
        "root"
        /* Script.ResultOwnership.Root */
      );
      (0, assert_js_1$4.assert)(result2.type === "success");
      if (result2.result.type !== "object") {
        break;
      }
      const { handle } = result2.result;
      (0, assert_js_1$4.assert)(handle !== void 0);
      const { path } = await realm.cdpClient.sendCommand("DOM.getFileInfo", {
        objectId: handle
      });
      paths.push(path);
      void realm.disown(handle).catch(void 0);
    }
    paths.sort();
    const sortedFiles = [...params.files].sort();
    if (paths.length !== params.files.length || sortedFiles.some((path, index) => {
      return paths[index] !== path;
    })) {
      const { objectId } = await realm.deserializeForCdp(params.element);
      (0, assert_js_1$4.assert)(objectId !== void 0);
      await realm.cdpClient.sendCommand("DOM.setFileInputFiles", {
        files: params.files,
        objectId
      });
    } else {
      await realm.callFunction(String(function dispatchEvent() {
        this.dispatchEvent(new Event("cancel", {
          bubbles: true
        }));
      }), false, params.element);
    }
    return {};
  }
}
_browsingContextStorage3 = new WeakMap();
_realmStorage2 = new WeakMap();
_inputStateManager = new WeakMap();
_getActionsByTick = new WeakSet();
getActionsByTick_fn = function(params, inputState) {
  var _a4;
  const actionsByTick = [];
  for (const action of params.actions) {
    switch (action.type) {
      case "pointer": {
        action.parameters ?? (action.parameters = {
          pointerType: "mouse"
          /* Input.PointerType.Mouse */
        });
        (_a4 = action.parameters).pointerType ?? (_a4.pointerType = "mouse");
        const source = inputState.getOrCreate(action.id, "pointer", action.parameters.pointerType);
        if (source.subtype !== action.parameters.pointerType) {
          throw new protocol_js_1$h.InvalidArgumentException(`Expected input source ${action.id} to be ${source.subtype}; got ${action.parameters.pointerType}.`);
        }
        break;
      }
      default:
        inputState.getOrCreate(action.id, action.type);
    }
    const actions = action.actions.map((item) => ({
      id: action.id,
      action: item
    }));
    for (let i = 0; i < actions.length; i++) {
      if (actionsByTick.length === i) {
        actionsByTick.push([]);
      }
      actionsByTick[i].push(actions[i]);
    }
  }
  return actionsByTick;
};
InputProcessor$1.InputProcessor = InputProcessor;
var NetworkProcessor$1 = {};
var NetworkUtils = {};
var Base64 = {};
Object.defineProperty(Base64, "__esModule", { value: true });
Base64.base64ToString = void 0;
function base64ToString(base64Str) {
  if ("atob" in globalThis) {
    return globalThis.atob(base64Str);
  }
  return Buffer.from(base64Str, "base64").toString("ascii");
}
Base64.base64ToString = base64ToString;
var UrlPattern = {};
var M = Object.defineProperty;
var Pe = Object.getOwnPropertyDescriptor;
var Re = Object.getOwnPropertyNames;
var Ee = Object.prototype.hasOwnProperty;
var Oe = (e, t) => {
  for (var r in t)
    M(e, r, { get: t[r], enumerable: true });
}, ke = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of Re(t))
      !Ee.call(e, a) && a !== r && M(e, a, { get: () => t[a], enumerable: !(n = Pe(t, a)) || n.enumerable });
  return e;
};
var Te = (e) => ke(M({}, "__esModule", { value: true }), e);
var Ne = {};
Oe(Ne, { URLPattern: () => Y });
var urlpattern = Te(Ne);
var R = class {
  constructor(t, r, n, a, c, l) {
    __publicField(this, "type", 3);
    __publicField(this, "name", "");
    __publicField(this, "prefix", "");
    __publicField(this, "value", "");
    __publicField(this, "suffix", "");
    __publicField(this, "modifier", 3);
    this.type = t, this.name = r, this.prefix = n, this.value = a, this.suffix = c, this.modifier = l;
  }
  hasCustomName() {
    return this.name !== "" && typeof this.name != "number";
  }
}, Ae = /[$_\p{ID_Start}]/u, ye = /[$_\u200C\u200D\p{ID_Continue}]/u, v = ".*";
function we(e, t) {
  return (t ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(e);
}
function D(e, t = false) {
  let r = [], n = 0;
  for (; n < e.length; ) {
    let a = e[n], c = function(l) {
      if (!t)
        throw new TypeError(l);
      r.push({ type: "INVALID_CHAR", index: n, value: e[n++] });
    };
    if (a === "*") {
      r.push({ type: "ASTERISK", index: n, value: e[n++] });
      continue;
    }
    if (a === "+" || a === "?") {
      r.push({ type: "OTHER_MODIFIER", index: n, value: e[n++] });
      continue;
    }
    if (a === "\\") {
      r.push({ type: "ESCAPED_CHAR", index: n++, value: e[n++] });
      continue;
    }
    if (a === "{") {
      r.push({ type: "OPEN", index: n, value: e[n++] });
      continue;
    }
    if (a === "}") {
      r.push({ type: "CLOSE", index: n, value: e[n++] });
      continue;
    }
    if (a === ":") {
      let l = "", s = n + 1;
      for (; s < e.length; ) {
        let i = e.substr(s, 1);
        if (s === n + 1 && Ae.test(i) || s !== n + 1 && ye.test(i)) {
          l += e[s++];
          continue;
        }
        break;
      }
      if (!l) {
        c(`Missing parameter name at ${n}`);
        continue;
      }
      r.push({ type: "NAME", index: n, value: l }), n = s;
      continue;
    }
    if (a === "(") {
      let l = 1, s = "", i = n + 1, o = false;
      if (e[i] === "?") {
        c(`Pattern cannot start with "?" at ${i}`);
        continue;
      }
      for (; i < e.length; ) {
        if (!we(e[i], false)) {
          c(`Invalid character '${e[i]}' at ${i}.`), o = true;
          break;
        }
        if (e[i] === "\\") {
          s += e[i++] + e[i++];
          continue;
        }
        if (e[i] === ")") {
          if (l--, l === 0) {
            i++;
            break;
          }
        } else if (e[i] === "(" && (l++, e[i + 1] !== "?")) {
          c(`Capturing groups are not allowed at ${i}`), o = true;
          break;
        }
        s += e[i++];
      }
      if (o)
        continue;
      if (l) {
        c(`Unbalanced pattern at ${n}`);
        continue;
      }
      if (!s) {
        c(`Missing pattern at ${n}`);
        continue;
      }
      r.push({ type: "REGEX", index: n, value: s }), n = i;
      continue;
    }
    r.push({ type: "CHAR", index: n, value: e[n++] });
  }
  return r.push({ type: "END", index: n, value: "" }), r;
}
function F(e, t = {}) {
  let r = D(e);
  t.delimiter ?? (t.delimiter = "/#?"), t.prefixes ?? (t.prefixes = "./");
  let n = `[^${S(t.delimiter)}]+?`, a = [], c = 0, l = 0, i = /* @__PURE__ */ new Set(), o = (h) => {
    if (l < r.length && r[l].type === h)
      return r[l++].value;
  }, f = () => o("OTHER_MODIFIER") ?? o("ASTERISK"), d = (h) => {
    let u = o(h);
    if (u !== void 0)
      return u;
    let { type: p, index: A } = r[l];
    throw new TypeError(`Unexpected ${p} at ${A}, expected ${h}`);
  }, T = () => {
    let h = "", u;
    for (; u = o("CHAR") ?? o("ESCAPED_CHAR"); )
      h += u;
    return h;
  }, xe = (h) => h, L = t.encodePart || xe, I = "", U = (h) => {
    I += h;
  }, $ = () => {
    I.length && (a.push(new R(3, "", "", L(I), "", 3)), I = "");
  }, X = (h, u, p, A, Z) => {
    let g = 3;
    switch (Z) {
      case "?":
        g = 1;
        break;
      case "*":
        g = 0;
        break;
      case "+":
        g = 2;
        break;
    }
    if (!u && !p && g === 3) {
      U(h);
      return;
    }
    if ($(), !u && !p) {
      if (!h)
        return;
      a.push(new R(3, "", "", L(h), "", g));
      return;
    }
    let m;
    p ? p === "*" ? m = v : m = p : m = n;
    let O = 2;
    m === n ? (O = 1, m = "") : m === v && (O = 0, m = "");
    let P;
    if (u ? P = u : p && (P = c++), i.has(P))
      throw new TypeError(`Duplicate name '${P}'.`);
    i.add(P), a.push(new R(O, P, L(h), m, L(A), g));
  };
  for (; l < r.length; ) {
    let h = o("CHAR"), u = o("NAME"), p = o("REGEX");
    if (!u && !p && (p = o("ASTERISK")), u || p) {
      let g = h ?? "";
      t.prefixes.indexOf(g) === -1 && (U(g), g = ""), $();
      let m = f();
      X(g, u, p, "", m);
      continue;
    }
    let A = h ?? o("ESCAPED_CHAR");
    if (A) {
      U(A);
      continue;
    }
    if (o("OPEN")) {
      let g = T(), m = o("NAME"), O = o("REGEX");
      !m && !O && (O = o("ASTERISK"));
      let P = T();
      d("CLOSE");
      let be = f();
      X(g, m, O, P, be);
      continue;
    }
    $(), d("END");
  }
  return a;
}
function S(e) {
  return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function B(e) {
  return e && e.ignoreCase ? "ui" : "u";
}
function q(e, t, r) {
  return W(F(e, r), t, r);
}
function k(e) {
  switch (e) {
    case 0:
      return "*";
    case 1:
      return "?";
    case 2:
      return "+";
    case 3:
      return "";
  }
}
function W(e, t, r = {}) {
  r.delimiter ?? (r.delimiter = "/#?"), r.prefixes ?? (r.prefixes = "./"), r.sensitive ?? (r.sensitive = false), r.strict ?? (r.strict = false), r.end ?? (r.end = true), r.start ?? (r.start = true), r.endsWith = "";
  let n = r.start ? "^" : "";
  for (let s of e) {
    if (s.type === 3) {
      s.modifier === 3 ? n += S(s.value) : n += `(?:${S(s.value)})${k(s.modifier)}`;
      continue;
    }
    t && t.push(s.name);
    let i = `[^${S(r.delimiter)}]+?`, o = s.value;
    if (s.type === 1 ? o = i : s.type === 0 && (o = v), !s.prefix.length && !s.suffix.length) {
      s.modifier === 3 || s.modifier === 1 ? n += `(${o})${k(s.modifier)}` : n += `((?:${o})${k(s.modifier)})`;
      continue;
    }
    if (s.modifier === 3 || s.modifier === 1) {
      n += `(?:${S(s.prefix)}(${o})${S(s.suffix)})`, n += k(s.modifier);
      continue;
    }
    n += `(?:${S(s.prefix)}`, n += `((?:${o})(?:`, n += S(s.suffix), n += S(s.prefix), n += `(?:${o}))*)${S(s.suffix)})`, s.modifier === 0 && (n += "?");
  }
  let a = `[${S(r.endsWith)}]|$`, c = `[${S(r.delimiter)}]`;
  if (r.end)
    return r.strict || (n += `${c}?`), r.endsWith.length ? n += `(?=${a})` : n += "$", new RegExp(n, B(r));
  r.strict || (n += `(?:${c}(?=${a}))?`);
  let l = false;
  if (e.length) {
    let s = e[e.length - 1];
    s.type === 3 && s.modifier === 3 && (l = r.delimiter.indexOf(s) > -1);
  }
  return l || (n += `(?=${c}|${a})`), new RegExp(n, B(r));
}
var x = { delimiter: "", prefixes: "", sensitive: true, strict: true }, J = { delimiter: ".", prefixes: "", sensitive: true, strict: true }, Q = { delimiter: "/", prefixes: "/", sensitive: true, strict: true };
function ee(e, t) {
  return e.length ? e[0] === "/" ? true : !t || e.length < 2 ? false : (e[0] == "\\" || e[0] == "{") && e[1] == "/" : false;
}
function te(e, t) {
  return e.startsWith(t) ? e.substring(t.length, e.length) : e;
}
function Ce(e, t) {
  return e.endsWith(t) ? e.substr(0, e.length - t.length) : e;
}
function _(e) {
  return !e || e.length < 2 ? false : e[0] === "[" || (e[0] === "\\" || e[0] === "{") && e[1] === "[";
}
var re = ["ftp", "file", "http", "https", "ws", "wss"];
function N(e) {
  if (!e)
    return true;
  for (let t of re)
    if (e.test(t))
      return true;
  return false;
}
function ne(e, t) {
  if (e = te(e, "#"), t || e === "")
    return e;
  let r = new URL("https://example.com");
  return r.hash = e, r.hash ? r.hash.substring(1, r.hash.length) : "";
}
function se(e, t) {
  if (e = te(e, "?"), t || e === "")
    return e;
  let r = new URL("https://example.com");
  return r.search = e, r.search ? r.search.substring(1, r.search.length) : "";
}
function ie(e, t) {
  return t || e === "" ? e : _(e) ? K(e) : j(e);
}
function ae(e, t) {
  if (t || e === "")
    return e;
  let r = new URL("https://example.com");
  return r.password = e, r.password;
}
function oe(e, t) {
  if (t || e === "")
    return e;
  let r = new URL("https://example.com");
  return r.username = e, r.username;
}
function ce(e, t, r) {
  if (r || e === "")
    return e;
  if (t && !re.includes(t))
    return new URL(`${t}:${e}`).pathname;
  let n = e[0] == "/";
  return e = new URL(n ? e : "/-" + e, "https://example.com").pathname, n || (e = e.substring(2, e.length)), e;
}
function le(e, t, r) {
  return z(t) === e && (e = ""), r || e === "" ? e : G(e);
}
function fe(e, t) {
  return e = Ce(e, ":"), t || e === "" ? e : y(e);
}
function z(e) {
  switch (e) {
    case "ws":
    case "http":
      return "80";
    case "wws":
    case "https":
      return "443";
    case "ftp":
      return "21";
    default:
      return "";
  }
}
function y(e) {
  if (e === "")
    return e;
  if (/^[-+.A-Za-z0-9]*$/.test(e))
    return e.toLowerCase();
  throw new TypeError(`Invalid protocol '${e}'.`);
}
function he(e) {
  if (e === "")
    return e;
  let t = new URL("https://example.com");
  return t.username = e, t.username;
}
function ue(e) {
  if (e === "")
    return e;
  let t = new URL("https://example.com");
  return t.password = e, t.password;
}
function j(e) {
  if (e === "")
    return e;
  if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e))
    throw new TypeError(`Invalid hostname '${e}'`);
  let t = new URL("https://example.com");
  return t.hostname = e, t.hostname;
}
function K(e) {
  if (e === "")
    return e;
  if (/[^0-9a-fA-F[\]:]/g.test(e))
    throw new TypeError(`Invalid IPv6 hostname '${e}'`);
  return e.toLowerCase();
}
function G(e) {
  if (e === "" || /^[0-9]*$/.test(e) && parseInt(e) <= 65535)
    return e;
  throw new TypeError(`Invalid port '${e}'.`);
}
function de(e) {
  if (e === "")
    return e;
  let t = new URL("https://example.com");
  return t.pathname = e[0] !== "/" ? "/-" + e : e, e[0] !== "/" ? t.pathname.substring(2, t.pathname.length) : t.pathname;
}
function pe(e) {
  return e === "" ? e : new URL(`data:${e}`).pathname;
}
function ge(e) {
  if (e === "")
    return e;
  let t = new URL("https://example.com");
  return t.search = e, t.search.substring(1, t.search.length);
}
function me(e) {
  if (e === "")
    return e;
  let t = new URL("https://example.com");
  return t.hash = e, t.hash.substring(1, t.hash.length);
}
var H = (_b2 = class {
  constructor(t) {
    __privateAdd(this, _r);
    __privateAdd(this, _R);
    __privateAdd(this, _b);
    __privateAdd(this, _u);
    __privateAdd(this, _m);
    __privateAdd(this, _a3);
    __privateAdd(this, _P);
    __privateAdd(this, _E);
    __privateAdd(this, _S);
    __privateAdd(this, _O);
    __privateAdd(this, _k);
    __privateAdd(this, _x2);
    __privateAdd(this, _h);
    __privateAdd(this, _f2);
    __privateAdd(this, _T);
    __privateAdd(this, _A);
    __privateAdd(this, _y2);
    __privateAdd(this, _w);
    __privateAdd(this, _c);
    __privateAdd(this, _C);
    __privateAdd(this, _i, void 0);
    __privateAdd(this, _n, []);
    __privateAdd(this, _t, {});
    __privateAdd(this, _e2, 0);
    __privateAdd(this, _s, 1);
    __privateAdd(this, _l, 0);
    __privateAdd(this, _o, 0);
    __privateAdd(this, _d, 0);
    __privateAdd(this, _p, 0);
    __privateAdd(this, _g2, false);
    __privateSet(this, _i, t);
  }
  get result() {
    return __privateGet(this, _t);
  }
  parse() {
    for (__privateSet(this, _n, D(__privateGet(this, _i), true)); __privateGet(this, _e2) < __privateGet(this, _n).length; __privateSet(this, _e2, __privateGet(this, _e2) + __privateGet(this, _s))) {
      if (__privateSet(this, _s, 1), __privateGet(this, _n)[__privateGet(this, _e2)].type === "END") {
        if (__privateGet(this, _o) === 0) {
          __privateMethod(this, _b, b_fn).call(this), __privateMethod(this, _f2, f_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 9, 1) : __privateMethod(this, _h, h_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 8, 1) : __privateMethod(this, _r, r_fn).call(this, 7, 0);
          continue;
        } else if (__privateGet(this, _o) === 2) {
          __privateMethod(this, _u, u_fn).call(this, 5);
          continue;
        }
        __privateMethod(this, _r, r_fn).call(this, 10, 0);
        break;
      }
      if (__privateGet(this, _d) > 0)
        if (__privateMethod(this, _A, A_fn).call(this))
          __privateSet(this, _d, __privateGet(this, _d) - 1);
        else
          continue;
      if (__privateMethod(this, _T, T_fn).call(this)) {
        __privateSet(this, _d, __privateGet(this, _d) + 1);
        continue;
      }
      switch (__privateGet(this, _o)) {
        case 0:
          __privateMethod(this, _P, P_fn).call(this) && __privateMethod(this, _u, u_fn).call(this, 1);
          break;
        case 1:
          if (__privateMethod(this, _P, P_fn).call(this)) {
            __privateMethod(this, _C, C_fn).call(this);
            let t = 7, r = 1;
            __privateMethod(this, _E, E_fn).call(this) ? (t = 2, r = 3) : __privateGet(this, _g2) && (t = 2), __privateMethod(this, _r, r_fn).call(this, t, r);
          }
          break;
        case 2:
          __privateMethod(this, _S, S_fn).call(this) ? __privateMethod(this, _u, u_fn).call(this, 3) : (__privateMethod(this, _x2, x_fn).call(this) || __privateMethod(this, _h, h_fn).call(this) || __privateMethod(this, _f2, f_fn).call(this)) && __privateMethod(this, _u, u_fn).call(this, 5);
          break;
        case 3:
          __privateMethod(this, _O, O_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 4, 1) : __privateMethod(this, _S, S_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 5, 1);
          break;
        case 4:
          __privateMethod(this, _S, S_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 5, 1);
          break;
        case 5:
          __privateMethod(this, _y2, y_fn).call(this) ? __privateSet(this, _p, __privateGet(this, _p) + 1) : __privateMethod(this, _w, w_fn).call(this) && __privateSet(this, _p, __privateGet(this, _p) - 1), __privateMethod(this, _k, k_fn).call(this) && !__privateGet(this, _p) ? __privateMethod(this, _r, r_fn).call(this, 6, 1) : __privateMethod(this, _x2, x_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 7, 0) : __privateMethod(this, _h, h_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 8, 1) : __privateMethod(this, _f2, f_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 9, 1);
          break;
        case 6:
          __privateMethod(this, _x2, x_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 7, 0) : __privateMethod(this, _h, h_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 8, 1) : __privateMethod(this, _f2, f_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 9, 1);
          break;
        case 7:
          __privateMethod(this, _h, h_fn).call(this) ? __privateMethod(this, _r, r_fn).call(this, 8, 1) : __privateMethod(this, _f2, f_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 9, 1);
          break;
        case 8:
          __privateMethod(this, _f2, f_fn).call(this) && __privateMethod(this, _r, r_fn).call(this, 9, 1);
          break;
      }
    }
    __privateGet(this, _t).hostname !== void 0 && __privateGet(this, _t).port === void 0 && (__privateGet(this, _t).port = "");
  }
}, _i = new WeakMap(), _n = new WeakMap(), _t = new WeakMap(), _e2 = new WeakMap(), _s = new WeakMap(), _l = new WeakMap(), _o = new WeakMap(), _d = new WeakMap(), _p = new WeakMap(), _g2 = new WeakMap(), _r = new WeakSet(), r_fn = function(t, r) {
  var _a4, _b3, _c3;
  switch (__privateGet(this, _o)) {
    case 0:
      break;
    case 1:
      __privateGet(this, _t).protocol = __privateMethod(this, _c, c_fn).call(this);
      break;
    case 2:
      break;
    case 3:
      __privateGet(this, _t).username = __privateMethod(this, _c, c_fn).call(this);
      break;
    case 4:
      __privateGet(this, _t).password = __privateMethod(this, _c, c_fn).call(this);
      break;
    case 5:
      __privateGet(this, _t).hostname = __privateMethod(this, _c, c_fn).call(this);
      break;
    case 6:
      __privateGet(this, _t).port = __privateMethod(this, _c, c_fn).call(this);
      break;
    case 7:
      __privateGet(this, _t).pathname = __privateMethod(this, _c, c_fn).call(this);
      break;
    case 8:
      __privateGet(this, _t).search = __privateMethod(this, _c, c_fn).call(this);
      break;
    case 9:
      __privateGet(this, _t).hash = __privateMethod(this, _c, c_fn).call(this);
      break;
  }
  __privateGet(this, _o) !== 0 && t !== 10 && ([1, 2, 3, 4].includes(__privateGet(this, _o)) && [6, 7, 8, 9].includes(t) && ((_a4 = __privateGet(this, _t)).hostname ?? (_a4.hostname = "")), [1, 2, 3, 4, 5, 6].includes(__privateGet(this, _o)) && [8, 9].includes(t) && ((_b3 = __privateGet(this, _t)).pathname ?? (_b3.pathname = __privateGet(this, _g2) ? "/" : "")), [1, 2, 3, 4, 5, 6, 7].includes(__privateGet(this, _o)) && t === 9 && ((_c3 = __privateGet(this, _t)).search ?? (_c3.search = ""))), __privateMethod(this, _R, R_fn).call(this, t, r);
}, _R = new WeakSet(), R_fn = function(t, r) {
  __privateSet(this, _o, t), __privateSet(this, _l, __privateGet(this, _e2) + r), __privateSet(this, _e2, __privateGet(this, _e2) + r), __privateSet(this, _s, 0);
}, _b = new WeakSet(), b_fn = function() {
  __privateSet(this, _e2, __privateGet(this, _l)), __privateSet(this, _s, 0);
}, _u = new WeakSet(), u_fn = function(t) {
  __privateMethod(this, _b, b_fn).call(this), __privateSet(this, _o, t);
}, _m = new WeakSet(), m_fn = function(t) {
  return t < 0 && (t = __privateGet(this, _n).length - t), t < __privateGet(this, _n).length ? __privateGet(this, _n)[t] : __privateGet(this, _n)[__privateGet(this, _n).length - 1];
}, _a3 = new WeakSet(), a_fn = function(t, r) {
  let n = __privateMethod(this, _m, m_fn).call(this, t);
  return n.value === r && (n.type === "CHAR" || n.type === "ESCAPED_CHAR" || n.type === "INVALID_CHAR");
}, _P = new WeakSet(), P_fn = function() {
  return __privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2), ":");
}, _E = new WeakSet(), E_fn = function() {
  return __privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2) + 1, "/") && __privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2) + 2, "/");
}, _S = new WeakSet(), S_fn = function() {
  return __privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2), "@");
}, _O = new WeakSet(), O_fn = function() {
  return __privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2), ":");
}, _k = new WeakSet(), k_fn = function() {
  return __privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2), ":");
}, _x2 = new WeakSet(), x_fn = function() {
  return __privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2), "/");
}, _h = new WeakSet(), h_fn = function() {
  if (__privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2), "?"))
    return true;
  if (__privateGet(this, _n)[__privateGet(this, _e2)].value !== "?")
    return false;
  let t = __privateMethod(this, _m, m_fn).call(this, __privateGet(this, _e2) - 1);
  return t.type !== "NAME" && t.type !== "REGEX" && t.type !== "CLOSE" && t.type !== "ASTERISK";
}, _f2 = new WeakSet(), f_fn = function() {
  return __privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2), "#");
}, _T = new WeakSet(), T_fn = function() {
  return __privateGet(this, _n)[__privateGet(this, _e2)].type == "OPEN";
}, _A = new WeakSet(), A_fn = function() {
  return __privateGet(this, _n)[__privateGet(this, _e2)].type == "CLOSE";
}, _y2 = new WeakSet(), y_fn = function() {
  return __privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2), "[");
}, _w = new WeakSet(), w_fn = function() {
  return __privateMethod(this, _a3, a_fn).call(this, __privateGet(this, _e2), "]");
}, _c = new WeakSet(), c_fn = function() {
  let t = __privateGet(this, _n)[__privateGet(this, _e2)], r = __privateMethod(this, _m, m_fn).call(this, __privateGet(this, _l)).index;
  return __privateGet(this, _i).substring(r, t.index);
}, _C = new WeakSet(), C_fn = function() {
  let t = {};
  Object.assign(t, x), t.encodePart = y;
  let r = q(__privateMethod(this, _c, c_fn).call(this), void 0, t);
  __privateSet(this, _g2, N(r));
}, _b2);
var V = ["protocol", "username", "password", "hostname", "port", "pathname", "search", "hash"], E = "*";
function Se(e, t) {
  if (typeof e != "string")
    throw new TypeError("parameter 1 is not of type 'string'.");
  let r = new URL(e, t);
  return { protocol: r.protocol.substring(0, r.protocol.length - 1), username: r.username, password: r.password, hostname: r.hostname, port: r.port, pathname: r.pathname, search: r.search !== "" ? r.search.substring(1, r.search.length) : void 0, hash: r.hash !== "" ? r.hash.substring(1, r.hash.length) : void 0 };
}
function b(e, t) {
  return t ? C(e) : e;
}
function w(e, t, r) {
  let n;
  if (typeof t.baseURL == "string")
    try {
      n = new URL(t.baseURL), t.protocol === void 0 && (e.protocol = b(n.protocol.substring(0, n.protocol.length - 1), r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && (e.username = b(n.username, r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && t.password === void 0 && (e.password = b(n.password, r)), t.protocol === void 0 && t.hostname === void 0 && (e.hostname = b(n.hostname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && (e.port = b(n.port, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && (e.pathname = b(n.pathname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && (e.search = b(n.search.substring(1, n.search.length), r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && t.hash === void 0 && (e.hash = b(n.hash.substring(1, n.hash.length), r));
    } catch {
      throw new TypeError(`invalid baseURL '${t.baseURL}'.`);
    }
  if (typeof t.protocol == "string" && (e.protocol = fe(t.protocol, r)), typeof t.username == "string" && (e.username = oe(t.username, r)), typeof t.password == "string" && (e.password = ae(t.password, r)), typeof t.hostname == "string" && (e.hostname = ie(t.hostname, r)), typeof t.port == "string" && (e.port = le(t.port, e.protocol, r)), typeof t.pathname == "string") {
    if (e.pathname = t.pathname, n && !ee(e.pathname, r)) {
      let a = n.pathname.lastIndexOf("/");
      a >= 0 && (e.pathname = b(n.pathname.substring(0, a + 1), r) + e.pathname);
    }
    e.pathname = ce(e.pathname, e.protocol, r);
  }
  return typeof t.search == "string" && (e.search = se(t.search, r)), typeof t.hash == "string" && (e.hash = ne(t.hash, r)), e;
}
function C(e) {
  return e.replace(/([+*?:{}()\\])/g, "\\$1");
}
function Le(e) {
  return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function Ie(e, t) {
  t.delimiter ?? (t.delimiter = "/#?"), t.prefixes ?? (t.prefixes = "./"), t.sensitive ?? (t.sensitive = false), t.strict ?? (t.strict = false), t.end ?? (t.end = true), t.start ?? (t.start = true), t.endsWith = "";
  let r = ".*", n = `[^${Le(t.delimiter)}]+?`, a = /[$_\u200C\u200D\p{ID_Continue}]/u, c = "";
  for (let l = 0; l < e.length; ++l) {
    let s = e[l];
    if (s.type === 3) {
      if (s.modifier === 3) {
        c += C(s.value);
        continue;
      }
      c += `{${C(s.value)}}${k(s.modifier)}`;
      continue;
    }
    let i = s.hasCustomName(), o = !!s.suffix.length || !!s.prefix.length && (s.prefix.length !== 1 || !t.prefixes.includes(s.prefix)), f = l > 0 ? e[l - 1] : null, d = l < e.length - 1 ? e[l + 1] : null;
    if (!o && i && s.type === 1 && s.modifier === 3 && d && !d.prefix.length && !d.suffix.length)
      if (d.type === 3) {
        let T = d.value.length > 0 ? d.value[0] : "";
        o = a.test(T);
      } else
        o = !d.hasCustomName();
    if (!o && !s.prefix.length && f && f.type === 3) {
      let T = f.value[f.value.length - 1];
      o = t.prefixes.includes(T);
    }
    o && (c += "{"), c += C(s.prefix), i && (c += `:${s.name}`), s.type === 2 ? c += `(${s.value})` : s.type === 1 ? i || (c += `(${n})`) : s.type === 0 && (!i && (!f || f.type === 3 || f.modifier !== 3 || o || s.prefix !== "") ? c += "*" : c += `(${r})`), s.type === 1 && i && s.suffix.length && a.test(s.suffix[0]) && (c += "\\"), c += C(s.suffix), o && (c += "}"), s.modifier !== 3 && (c += k(s.modifier));
  }
  return c;
}
var Y = (_c2 = class {
  constructor(t = {}, r, n) {
    __privateAdd(this, _i2, void 0);
    __privateAdd(this, _n2, {});
    __privateAdd(this, _t2, {});
    __privateAdd(this, _e3, {});
    __privateAdd(this, _s2, {});
    __privateAdd(this, _l2, false);
    try {
      let a;
      if (typeof r == "string" ? a = r : n = r, typeof t == "string") {
        let i = new H(t);
        if (i.parse(), t = i.result, a === void 0 && typeof t.protocol != "string")
          throw new TypeError("A base URL must be provided for a relative constructor string.");
        t.baseURL = a;
      } else {
        if (!t || typeof t != "object")
          throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
        if (a)
          throw new TypeError("parameter 1 is not of type 'string'.");
      }
      typeof n > "u" && (n = { ignoreCase: false });
      let c = { ignoreCase: n.ignoreCase === true }, l = { pathname: E, protocol: E, username: E, password: E, hostname: E, port: E, search: E, hash: E };
      __privateSet(this, _i2, w(l, t, true)), z(__privateGet(this, _i2).protocol) === __privateGet(this, _i2).port && (__privateGet(this, _i2).port = "");
      let s;
      for (s of V) {
        if (!(s in __privateGet(this, _i2)))
          continue;
        let i = {}, o = __privateGet(this, _i2)[s];
        switch (__privateGet(this, _t2)[s] = [], s) {
          case "protocol":
            Object.assign(i, x), i.encodePart = y;
            break;
          case "username":
            Object.assign(i, x), i.encodePart = he;
            break;
          case "password":
            Object.assign(i, x), i.encodePart = ue;
            break;
          case "hostname":
            Object.assign(i, J), _(o) ? i.encodePart = K : i.encodePart = j;
            break;
          case "port":
            Object.assign(i, x), i.encodePart = G;
            break;
          case "pathname":
            N(__privateGet(this, _n2).protocol) ? (Object.assign(i, Q, c), i.encodePart = de) : (Object.assign(i, x, c), i.encodePart = pe);
            break;
          case "search":
            Object.assign(i, x, c), i.encodePart = ge;
            break;
          case "hash":
            Object.assign(i, x, c), i.encodePart = me;
            break;
        }
        try {
          __privateGet(this, _s2)[s] = F(o, i), __privateGet(this, _n2)[s] = W(__privateGet(this, _s2)[s], __privateGet(this, _t2)[s], i), __privateGet(this, _e3)[s] = Ie(__privateGet(this, _s2)[s], i), __privateSet(this, _l2, __privateGet(this, _l2) || __privateGet(this, _s2)[s].some((f) => f.type === 2));
        } catch {
          throw new TypeError(`invalid ${s} pattern '${__privateGet(this, _i2)[s]}'.`);
        }
      }
    } catch (a) {
      throw new TypeError(`Failed to construct 'URLPattern': ${a.message}`);
    }
  }
  test(t = {}, r) {
    let n = { pathname: "", protocol: "", username: "", password: "", hostname: "", port: "", search: "", hash: "" };
    if (typeof t != "string" && r)
      throw new TypeError("parameter 1 is not of type 'string'.");
    if (typeof t > "u")
      return false;
    try {
      typeof t == "object" ? n = w(n, t, false) : n = w(n, Se(t, r), false);
    } catch {
      return false;
    }
    let a;
    for (a of V)
      if (!__privateGet(this, _n2)[a].exec(n[a]))
        return false;
    return true;
  }
  exec(t = {}, r) {
    let n = { pathname: "", protocol: "", username: "", password: "", hostname: "", port: "", search: "", hash: "" };
    if (typeof t != "string" && r)
      throw new TypeError("parameter 1 is not of type 'string'.");
    if (typeof t > "u")
      return;
    try {
      typeof t == "object" ? n = w(n, t, false) : n = w(n, Se(t, r), false);
    } catch {
      return null;
    }
    let a = {};
    r ? a.inputs = [t, r] : a.inputs = [t];
    let c;
    for (c of V) {
      let l = __privateGet(this, _n2)[c].exec(n[c]);
      if (!l)
        return null;
      let s = {};
      for (let [i, o] of __privateGet(this, _t2)[c].entries())
        if (typeof o == "string" || typeof o == "number") {
          let f = l[i + 1];
          s[o] = f;
        }
      a[c] = { input: n[c] ?? "", groups: s };
    }
    return a;
  }
  static compareComponent(t, r, n) {
    let a = (i, o) => {
      for (let f of ["type", "modifier", "prefix", "value", "suffix"]) {
        if (i[f] < o[f])
          return -1;
        if (i[f] === o[f])
          continue;
        return 1;
      }
      return 0;
    }, c = new R(3, "", "", "", "", 3), l = new R(0, "", "", "", "", 3), s = (i, o) => {
      let f = 0;
      for (; f < Math.min(i.length, o.length); ++f) {
        let d = a(i[f], o[f]);
        if (d)
          return d;
      }
      return i.length === o.length ? 0 : a(i[f] ?? c, o[f] ?? c);
    };
    return !__privateGet(r, _e3)[t] && !__privateGet(n, _e3)[t] ? 0 : __privateGet(r, _e3)[t] && !__privateGet(n, _e3)[t] ? s(__privateGet(r, _s2)[t], [l]) : !__privateGet(r, _e3)[t] && __privateGet(n, _e3)[t] ? s([l], __privateGet(n, _s2)[t]) : s(__privateGet(r, _s2)[t], __privateGet(n, _s2)[t]);
  }
  get protocol() {
    return __privateGet(this, _e3).protocol;
  }
  get username() {
    return __privateGet(this, _e3).username;
  }
  get password() {
    return __privateGet(this, _e3).password;
  }
  get hostname() {
    return __privateGet(this, _e3).hostname;
  }
  get port() {
    return __privateGet(this, _e3).port;
  }
  get pathname() {
    return __privateGet(this, _e3).pathname;
  }
  get search() {
    return __privateGet(this, _e3).search;
  }
  get hash() {
    return __privateGet(this, _e3).hash;
  }
  get hasRegExpGroups() {
    return __privateGet(this, _l2);
  }
}, _i2 = new WeakMap(), _n2 = new WeakMap(), _t2 = new WeakMap(), _e3 = new WeakMap(), _s2 = new WeakMap(), _l2 = new WeakMap(), _c2);
const { URLPattern: URLPattern$2 } = urlpattern;
var urlpatternPolyfill = { URLPattern: URLPattern$2 };
if (!globalThis.URLPattern) {
  globalThis.URLPattern = URLPattern$2;
}
Object.defineProperty(UrlPattern, "__esModule", { value: true });
UrlPattern.URLPattern = void 0;
const urlpattern_polyfill_1 = urlpatternPolyfill;
let URLPattern$1 = urlpattern_polyfill_1.URLPattern;
UrlPattern.URLPattern = URLPattern$1;
if ("URLPattern" in globalThis) {
  UrlPattern.URLPattern = URLPattern$1 = globalThis.URLPattern;
}
Object.defineProperty(NetworkUtils, "__esModule", { value: true });
NetworkUtils.matchUrlPattern = NetworkUtils.isSpecialScheme = NetworkUtils.sameSiteBiDiToCdp = NetworkUtils.bidiToCdpCookie = NetworkUtils.deserializeByteValue = NetworkUtils.cdpToBiDiCookie = NetworkUtils.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction = NetworkUtils.cdpFetchHeadersFromBidiNetworkHeaders = NetworkUtils.bidiNetworkHeadersFromCdpFetchHeaders = NetworkUtils.cdpNetworkHeadersFromBidiNetworkHeaders = NetworkUtils.bidiNetworkHeadersFromCdpNetworkHeaders = NetworkUtils.computeHeadersSize = void 0;
const ErrorResponse_js_1 = ErrorResponse;
const Base64_js_1 = Base64;
const UrlPattern_js_1 = UrlPattern;
function computeHeadersSize(headers) {
  const requestHeaders = headers.reduce((acc, header) => {
    return `${acc}${header.name}: ${header.value.value}\r
`;
  }, "");
  return new TextEncoder().encode(requestHeaders).length;
}
NetworkUtils.computeHeadersSize = computeHeadersSize;
function bidiNetworkHeadersFromCdpNetworkHeaders(headers) {
  if (!headers) {
    return [];
  }
  return Object.entries(headers).map(([name, value]) => ({
    name,
    value: {
      type: "string",
      value
    }
  }));
}
NetworkUtils.bidiNetworkHeadersFromCdpNetworkHeaders = bidiNetworkHeadersFromCdpNetworkHeaders;
function cdpNetworkHeadersFromBidiNetworkHeaders(headers) {
  if (headers === void 0) {
    return void 0;
  }
  return headers.reduce((result, header) => {
    result[header.name] = header.value.value;
    return result;
  }, {});
}
NetworkUtils.cdpNetworkHeadersFromBidiNetworkHeaders = cdpNetworkHeadersFromBidiNetworkHeaders;
function bidiNetworkHeadersFromCdpFetchHeaders(headers) {
  if (!headers) {
    return [];
  }
  return headers.map(({ name, value }) => ({
    name,
    value: {
      type: "string",
      value
    }
  }));
}
NetworkUtils.bidiNetworkHeadersFromCdpFetchHeaders = bidiNetworkHeadersFromCdpFetchHeaders;
function cdpFetchHeadersFromBidiNetworkHeaders(headers) {
  if (headers === void 0) {
    return void 0;
  }
  return headers.map(({ name, value }) => ({
    name,
    value: value.value
  }));
}
NetworkUtils.cdpFetchHeadersFromBidiNetworkHeaders = cdpFetchHeadersFromBidiNetworkHeaders;
function cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction(action) {
  switch (action) {
    case "default":
      return "Default";
    case "cancel":
      return "CancelAuth";
    case "provideCredentials":
      return "ProvideCredentials";
  }
}
NetworkUtils.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction = cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction;
function cdpToBiDiCookie(cookie) {
  const result = {
    name: cookie.name,
    value: { type: "string", value: cookie.value },
    domain: cookie.domain,
    path: cookie.path,
    size: cookie.size,
    httpOnly: cookie.httpOnly,
    secure: cookie.secure,
    sameSite: cookie.sameSite === void 0 ? "none" : sameSiteCdpToBiDi(cookie.sameSite),
    ...cookie.expires >= 0 ? { expiry: cookie.expires } : void 0
  };
  result[`goog:session`] = cookie.session;
  result[`goog:priority`] = cookie.priority;
  result[`goog:sameParty`] = cookie.sameParty;
  result[`goog:sourceScheme`] = cookie.sourceScheme;
  result[`goog:sourcePort`] = cookie.sourcePort;
  if (cookie.partitionKey !== void 0) {
    result[`goog:partitionKey`] = cookie.partitionKey;
  }
  if (cookie.partitionKeyOpaque !== void 0) {
    result[`goog:partitionKeyOpaque`] = cookie.partitionKeyOpaque;
  }
  return result;
}
NetworkUtils.cdpToBiDiCookie = cdpToBiDiCookie;
function deserializeByteValue(value) {
  if (value.type === "base64") {
    return (0, Base64_js_1.base64ToString)(value.value);
  }
  return value.value;
}
NetworkUtils.deserializeByteValue = deserializeByteValue;
function bidiToCdpCookie(params, partitionKey) {
  const deserializedValue = deserializeByteValue(params.cookie.value);
  const result = {
    name: params.cookie.name,
    value: deserializedValue,
    domain: params.cookie.domain,
    path: params.cookie.path ?? "/",
    secure: params.cookie.secure ?? false,
    httpOnly: params.cookie.httpOnly ?? false,
    // CDP's `partitionKey` is the BiDi's `partition.sourceOrigin`.
    ...partitionKey.sourceOrigin !== void 0 && {
      partitionKey: partitionKey.sourceOrigin
    },
    ...params.cookie.expiry !== void 0 && {
      expires: params.cookie.expiry
    },
    ...params.cookie.sameSite !== void 0 && {
      sameSite: sameSiteBiDiToCdp(params.cookie.sameSite)
    }
  };
  if (params.cookie[`goog:url`] !== void 0) {
    result.url = params.cookie[`goog:url`];
  }
  if (params.cookie[`goog:priority`] !== void 0) {
    result.priority = params.cookie[`goog:priority`];
  }
  if (params.cookie[`goog:sameParty`] !== void 0) {
    result.sameParty = params.cookie[`goog:sameParty`];
  }
  if (params.cookie[`goog:sourceScheme`] !== void 0) {
    result.sourceScheme = params.cookie[`goog:sourceScheme`];
  }
  if (params.cookie[`goog:sourcePort`] !== void 0) {
    result.sourcePort = params.cookie[`goog:sourcePort`];
  }
  return result;
}
NetworkUtils.bidiToCdpCookie = bidiToCdpCookie;
function sameSiteCdpToBiDi(sameSite) {
  switch (sameSite) {
    case "Strict":
      return "strict";
    case "None":
      return "none";
    case "Lax":
      return "lax";
    default:
      return "lax";
  }
}
function sameSiteBiDiToCdp(sameSite) {
  switch (sameSite) {
    case "strict":
      return "Strict";
    case "lax":
      return "Lax";
    case "none":
      return "None";
  }
  throw new ErrorResponse_js_1.InvalidArgumentException(`Unknown 'sameSite' value ${sameSite}`);
}
NetworkUtils.sameSiteBiDiToCdp = sameSiteBiDiToCdp;
function isSpecialScheme(protocol2) {
  return ["ftp", "file", "http", "https", "ws", "wss"].includes(protocol2.replace(/:$/, ""));
}
NetworkUtils.isSpecialScheme = isSpecialScheme;
function matchUrlPattern(urlPattern, url) {
  switch (urlPattern.type) {
    case "string": {
      const pattern = new UrlPattern_js_1.URLPattern(urlPattern.pattern);
      return new UrlPattern_js_1.URLPattern({
        protocol: pattern.protocol,
        hostname: pattern.hostname,
        port: pattern.port,
        pathname: pattern.pathname,
        search: pattern.search
      }).test(url);
    }
    case "pattern":
      return new UrlPattern_js_1.URLPattern(urlPattern).test(url);
  }
}
NetworkUtils.matchUrlPattern = matchUrlPattern;
Object.defineProperty(NetworkProcessor$1, "__esModule", { value: true });
NetworkProcessor$1.NetworkProcessor = void 0;
const protocol_js_1$g = protocol;
const NetworkUtils_js_1$3 = NetworkUtils;
const _NetworkProcessor = class _NetworkProcessor {
  constructor(browsingContextStorage, networkStorage) {
    __privateAdd(this, _getRequestOrFail);
    __privateAdd(this, _getBlockedRequestOrFail);
    __privateAdd(this, _browsingContextStorage4, void 0);
    __privateAdd(this, _networkStorage, void 0);
    __privateSet(this, _browsingContextStorage4, browsingContextStorage);
    __privateSet(this, _networkStorage, networkStorage);
  }
  async addIntercept(params) {
    __privateGet(this, _browsingContextStorage4).verifyTopLevelContextsList(params.contexts);
    const urlPatterns = params.urlPatterns ?? [];
    const parsedUrlPatterns = _NetworkProcessor.parseUrlPatterns(urlPatterns);
    const intercept = __privateGet(this, _networkStorage).addIntercept({
      urlPatterns: parsedUrlPatterns,
      phases: params.phases,
      contexts: params.contexts
    });
    await Promise.all(__privateGet(this, _browsingContextStorage4).getAllContexts().map((context) => {
      return context.cdpTarget.toggleFetchIfNeeded();
    }));
    return {
      intercept
    };
  }
  async continueRequest(params) {
    const { url, method, headers: commandHeaders, body, request: networkId } = params;
    if (params.url !== void 0) {
      _NetworkProcessor.parseUrlString(params.url);
    }
    const request = __privateMethod(this, _getBlockedRequestOrFail, getBlockedRequestOrFail_fn).call(this, networkId, [
      "beforeRequestSent"
    ]);
    const headers = (0, NetworkUtils_js_1$3.cdpFetchHeadersFromBidiNetworkHeaders)(commandHeaders);
    await request.continueRequest({
      url,
      method,
      headers,
      postData: getCdpBodyFromBiDiBytesValue(body)
    });
    return {};
  }
  async continueResponse(params) {
    const { request: networkId, statusCode, reasonPhrase, headers } = params;
    const responseHeaders = (0, NetworkUtils_js_1$3.cdpFetchHeadersFromBidiNetworkHeaders)(headers);
    const request = __privateMethod(this, _getBlockedRequestOrFail, getBlockedRequestOrFail_fn).call(this, networkId, [
      "authRequired",
      "responseStarted"
    ]);
    if (request.interceptPhase === "authRequired") {
      if (params.credentials) {
        await Promise.all([
          request.waitNextPhase,
          request.continueWithAuth({
            response: "ProvideCredentials",
            username: params.credentials.username,
            password: params.credentials.password
          })
        ]);
      } else {
        await request.continueWithAuth({
          response: "ProvideCredentials"
        });
        return {};
      }
    }
    if (request.interceptPhase === "responseStarted") {
      await request.continueResponse({
        responseCode: statusCode,
        responsePhrase: reasonPhrase,
        responseHeaders
      });
    }
    return {};
  }
  async continueWithAuth(params) {
    const networkId = params.request;
    const request = __privateMethod(this, _getBlockedRequestOrFail, getBlockedRequestOrFail_fn).call(this, networkId, [
      "authRequired"
    ]);
    let username;
    let password;
    if (params.action === "provideCredentials") {
      const { credentials } = params;
      username = credentials.username;
      password = credentials.password;
    }
    const response = (0, NetworkUtils_js_1$3.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction)(params.action);
    await request.continueWithAuth({
      response,
      username,
      password
    });
    return {};
  }
  async failRequest({ request: networkId }) {
    const request = __privateMethod(this, _getRequestOrFail, getRequestOrFail_fn).call(this, networkId);
    if (request.interceptPhase === "authRequired") {
      throw new protocol_js_1$g.InvalidArgumentException(`Request '${networkId}' in 'authRequired' phase cannot be failed`);
    }
    if (!request.interceptPhase) {
      throw new protocol_js_1$g.NoSuchRequestException(`No blocked request found for network id '${networkId}'`);
    }
    await request.failRequest("Failed");
    return {};
  }
  async provideResponse(params) {
    const { statusCode, reasonPhrase: responsePhrase, headers, body, request: networkId } = params;
    const responseHeaders = (0, NetworkUtils_js_1$3.cdpFetchHeadersFromBidiNetworkHeaders)(headers);
    const request = __privateMethod(this, _getBlockedRequestOrFail, getBlockedRequestOrFail_fn).call(this, networkId, [
      "beforeRequestSent",
      "responseStarted",
      "authRequired"
    ]);
    if (request.interceptPhase === "authRequired") {
      await request.continueWithAuth({
        response: "ProvideCredentials"
      });
      return {};
    }
    if (!body && !headers) {
      await request.continueRequest();
      return {};
    }
    const responseCode = statusCode ?? request.statusCode ?? 200;
    await request.provideResponse({
      responseCode,
      responsePhrase,
      responseHeaders,
      body: getCdpBodyFromBiDiBytesValue(body)
    });
    return {};
  }
  async removeIntercept(params) {
    __privateGet(this, _networkStorage).removeIntercept(params.intercept);
    await Promise.all(__privateGet(this, _browsingContextStorage4).getAllContexts().map((context) => {
      return context.cdpTarget.toggleFetchIfNeeded();
    }));
    return {};
  }
  /**
   * Attempts to parse the given url.
   * Throws an InvalidArgumentException if the url is invalid.
   */
  static parseUrlString(url) {
    try {
      return new URL(url);
    } catch (error) {
      throw new protocol_js_1$g.InvalidArgumentException(`Invalid URL '${url}': ${error}`);
    }
  }
  static parseUrlPatterns(urlPatterns) {
    return urlPatterns.map((urlPattern) => {
      var _a4, _b3, _c3;
      switch (urlPattern.type) {
        case "string": {
          _NetworkProcessor.parseUrlString(urlPattern.pattern);
          return urlPattern;
        }
        case "pattern":
          if (urlPattern.protocol === void 0 && urlPattern.hostname === void 0 && urlPattern.port === void 0 && urlPattern.pathname === void 0 && urlPattern.search === void 0) {
            return urlPattern;
          }
          if (urlPattern.protocol) {
            urlPattern.protocol = unescapeURLPattern(urlPattern.protocol);
            if (!urlPattern.protocol.match(/^[a-zA-Z+-.]+$/)) {
              throw new protocol_js_1$g.InvalidArgumentException("Forbidden characters");
            }
          }
          if (urlPattern.hostname) {
            urlPattern.hostname = unescapeURLPattern(urlPattern.hostname);
          }
          if (urlPattern.port) {
            urlPattern.port = unescapeURLPattern(urlPattern.port);
          }
          if (urlPattern.pathname) {
            urlPattern.pathname = unescapeURLPattern(urlPattern.pathname);
            if (urlPattern.pathname[0] !== "/") {
              urlPattern.pathname = `/${urlPattern.pathname}`;
            }
            if (urlPattern.pathname.includes("#") || urlPattern.pathname.includes("?")) {
              throw new protocol_js_1$g.InvalidArgumentException("Forbidden characters");
            }
          } else if (urlPattern.pathname === "") {
            urlPattern.pathname = "/";
          }
          if (urlPattern.search) {
            urlPattern.search = unescapeURLPattern(urlPattern.search);
            if (urlPattern.search[0] !== "?") {
              urlPattern.search = `?${urlPattern.search}`;
            }
            if (urlPattern.search.includes("#")) {
              throw new protocol_js_1$g.InvalidArgumentException("Forbidden characters");
            }
          }
          if (urlPattern.protocol === "") {
            throw new protocol_js_1$g.InvalidArgumentException(`URL pattern must specify a protocol`);
          }
          if (urlPattern.hostname === "") {
            throw new protocol_js_1$g.InvalidArgumentException(`URL pattern must specify a hostname`);
          }
          if ((((_a4 = urlPattern.hostname) == null ? void 0 : _a4.length) ?? 0) > 0) {
            if ((_b3 = urlPattern.protocol) == null ? void 0 : _b3.match(/^file/i)) {
              throw new protocol_js_1$g.InvalidArgumentException(`URL pattern protocol cannot be 'file'`);
            }
            if ((_c3 = urlPattern.hostname) == null ? void 0 : _c3.includes(":")) {
              throw new protocol_js_1$g.InvalidArgumentException(`URL pattern hostname must not contain a colon`);
            }
          }
          if (urlPattern.port === "") {
            throw new protocol_js_1$g.InvalidArgumentException(`URL pattern must specify a port`);
          }
          try {
            new URLPattern(urlPattern);
          } catch (error) {
            throw new protocol_js_1$g.InvalidArgumentException(`${error}`);
          }
          return urlPattern;
      }
    });
  }
};
_browsingContextStorage4 = new WeakMap();
_networkStorage = new WeakMap();
_getRequestOrFail = new WeakSet();
getRequestOrFail_fn = function(id) {
  const request = __privateGet(this, _networkStorage).getRequestById(id);
  if (!request) {
    throw new protocol_js_1$g.NoSuchRequestException(`Network request with ID '${id}' doesn't exist`);
  }
  return request;
};
_getBlockedRequestOrFail = new WeakSet();
getBlockedRequestOrFail_fn = function(id, phases) {
  const request = __privateMethod(this, _getRequestOrFail, getRequestOrFail_fn).call(this, id);
  if (!request.interceptPhase) {
    throw new protocol_js_1$g.NoSuchRequestException(`No blocked request found for network id '${id}'`);
  }
  if (request.interceptPhase && !phases.includes(request.interceptPhase)) {
    throw new protocol_js_1$g.InvalidArgumentException(`Blocked request for network id '${id}' is in '${request.interceptPhase}' phase`);
  }
  return request;
};
let NetworkProcessor = _NetworkProcessor;
NetworkProcessor$1.NetworkProcessor = NetworkProcessor;
function unescapeURLPattern(pattern) {
  const forbidden = /* @__PURE__ */ new Set(["(", ")", "*", "{", "}"]);
  let result = "";
  let isEscaped = false;
  for (const c of pattern) {
    if (!isEscaped) {
      if (forbidden.has(c)) {
        throw new protocol_js_1$g.InvalidArgumentException("Forbidden characters");
      }
      if (c === "\\") {
        isEscaped = true;
        continue;
      }
    }
    result += c;
    isEscaped = false;
  }
  return result;
}
function getCdpBodyFromBiDiBytesValue(body) {
  let parsedBody;
  if ((body == null ? void 0 : body.type) === "string") {
    parsedBody = btoa(body.value);
  } else if ((body == null ? void 0 : body.type) === "base64") {
    parsedBody = body.value;
  }
  return parsedBody;
}
var PermissionsProcessor$1 = {};
Object.defineProperty(PermissionsProcessor$1, "__esModule", { value: true });
PermissionsProcessor$1.PermissionsProcessor = void 0;
const protocol_js_1$f = protocol;
class PermissionsProcessor {
  constructor(browserCdpClient) {
    __privateAdd(this, _browserCdpClient4, void 0);
    __privateSet(this, _browserCdpClient4, browserCdpClient);
  }
  async setPermissions(params) {
    try {
      const userContextId = params["goog:userContext"] || params.userContext;
      await __privateGet(this, _browserCdpClient4).sendCommand("Browser.setPermission", {
        origin: params.origin,
        browserContextId: userContextId && userContextId !== "default" ? userContextId : void 0,
        permission: {
          name: params.descriptor.name
        },
        setting: params.state
      });
    } catch (err) {
      if (err.message === `Permission can't be granted to opaque origins.`) {
        return {};
      }
      throw new protocol_js_1$f.InvalidArgumentException(err.message);
    }
    return {};
  }
}
_browserCdpClient4 = new WeakMap();
PermissionsProcessor$1.PermissionsProcessor = PermissionsProcessor;
var ScriptProcessor$1 = {};
var PreloadScript$1 = {};
var uuid = {};
Object.defineProperty(uuid, "__esModule", { value: true });
uuid.uuidv4 = void 0;
function uuidv4() {
  if ("crypto" in globalThis && "randomUUID" in globalThis.crypto) {
    return globalThis.crypto.randomUUID();
  }
  const randomValues = new Uint8Array(16);
  if ("crypto" in globalThis && "getRandomValues" in globalThis.crypto) {
    globalThis.crypto.getRandomValues(randomValues);
  } else {
    require$$2.webcrypto.getRandomValues(randomValues);
  }
  randomValues[6] = randomValues[6] & 15 | 64;
  randomValues[8] = randomValues[8] & 63 | 128;
  const bytesToHex = (bytes) => bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
  return [
    bytesToHex(randomValues.subarray(0, 4)),
    bytesToHex(randomValues.subarray(4, 6)),
    bytesToHex(randomValues.subarray(6, 8)),
    bytesToHex(randomValues.subarray(8, 10)),
    bytesToHex(randomValues.subarray(10, 16))
  ].join("-");
}
uuid.uuidv4 = uuidv4;
var ChannelProxy$1 = {};
Object.defineProperty(ChannelProxy$1, "__esModule", { value: true });
ChannelProxy$1.ChannelProxy = void 0;
const protocol_js_1$e = protocol;
const log_js_1$8 = log;
const uuid_js_1$3 = uuid;
const _ChannelProxy = class _ChannelProxy {
  constructor(channel, logger) {
    /** Starts listening for the channel events of the provided ChannelProxy. */
    __privateAdd(this, _startListener);
    /**
     * Returns a handle of ChannelProxy from window's property which was set there
     * by `getEvalInWindowStr`. If window property is not set yet, sets a promise
     * resolver to the window property, so that `getEvalInWindowStr` can resolve
     * the promise later on with the channel.
     * This is needed because `getEvalInWindowStr` can be called before or
     * after this method.
     */
    __privateAdd(this, _getHandleFromWindow);
    __privateAdd(this, _properties, void 0);
    __privateAdd(this, _id, (0, uuid_js_1$3.uuidv4)());
    __privateAdd(this, _logger2, void 0);
    __privateSet(this, _properties, channel);
    __privateSet(this, _logger2, logger);
  }
  /**
   * Creates a channel proxy in the given realm, initialises listener and
   * returns a handle to `sendMessage` delegate.
   */
  async init(realm, eventManager) {
    var _a4, _b3;
    const channelHandle = await __privateMethod(_a4 = _ChannelProxy, _createAndGetHandleInRealm, createAndGetHandleInRealm_fn).call(_a4, realm);
    const sendMessageHandle = await __privateMethod(_b3 = _ChannelProxy, _createSendMessageHandle, createSendMessageHandle_fn).call(_b3, realm, channelHandle);
    void __privateMethod(this, _startListener, startListener_fn).call(this, realm, channelHandle, eventManager);
    return sendMessageHandle;
  }
  /** Gets a ChannelProxy from window and returns its handle. */
  async startListenerFromWindow(realm, eventManager) {
    var _a4;
    try {
      const channelHandle = await __privateMethod(this, _getHandleFromWindow, getHandleFromWindow_fn).call(this, realm);
      void __privateMethod(this, _startListener, startListener_fn).call(this, realm, channelHandle, eventManager);
    } catch (error) {
      (_a4 = __privateGet(this, _logger2)) == null ? void 0 : _a4.call(this, log_js_1$8.LogType.debugError, error);
    }
  }
  /**
   * String to be evaluated to create a ProxyChannel and put it to window.
   * Returns the delegate `sendMessage`. Used to provide an argument for preload
   * script. Does the following:
   * 1. Creates a ChannelProxy.
   * 2. Puts the ChannelProxy to window['${this.#id}'] or resolves the promise
   *    by calling delegate stored in window['${this.#id}'].
   *    This is needed because `#getHandleFromWindow` can be called before or
   *    after this method.
   * 3. Returns the delegate `sendMessage` of the created ChannelProxy.
   */
  getEvalInWindowStr() {
    var _a4;
    const delegate = String((id, channelProxy) => {
      const w2 = window;
      if (w2[id] === void 0) {
        w2[id] = channelProxy;
      } else {
        w2[id](channelProxy);
        delete w2[id];
      }
      return channelProxy.sendMessage;
    });
    const channelProxyEval = __privateMethod(_a4 = _ChannelProxy, _createChannelProxyEvalStr, createChannelProxyEvalStr_fn).call(_a4);
    return `(${delegate})('${__privateGet(this, _id)}',${channelProxyEval})`;
  }
};
_properties = new WeakMap();
_id = new WeakMap();
_logger2 = new WeakMap();
_createChannelProxyEvalStr = new WeakSet();
createChannelProxyEvalStr_fn = function() {
  const functionStr = String(() => {
    const queue = [];
    let queueNonEmptyResolver = null;
    return {
      /**
       * Gets a promise, which is resolved as soon as a message occurs
       * in the queue.
       */
      async getMessage() {
        const onMessage = queue.length > 0 ? Promise.resolve() : new Promise((resolve) => {
          queueNonEmptyResolver = resolve;
        });
        await onMessage;
        return queue.shift();
      },
      /**
       * Adds a message to the queue.
       * Resolves the pending promise if needed.
       */
      sendMessage(message) {
        queue.push(message);
        if (queueNonEmptyResolver !== null) {
          queueNonEmptyResolver();
          queueNonEmptyResolver = null;
        }
      }
    };
  });
  return `(${functionStr})()`;
};
_createAndGetHandleInRealm = new WeakSet();
createAndGetHandleInRealm_fn = async function(realm) {
  const createChannelHandleResult = await realm.cdpClient.sendCommand("Runtime.evaluate", {
    expression: __privateMethod(this, _createChannelProxyEvalStr, createChannelProxyEvalStr_fn).call(this),
    contextId: realm.executionContextId,
    serializationOptions: {
      serialization: "idOnly"
    }
  });
  if (createChannelHandleResult.exceptionDetails || createChannelHandleResult.result.objectId === void 0) {
    throw new Error(`Cannot create channel`);
  }
  return createChannelHandleResult.result.objectId;
};
_createSendMessageHandle = new WeakSet();
createSendMessageHandle_fn = async function(realm, channelHandle) {
  const sendMessageArgResult = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
    functionDeclaration: String((channelHandle2) => {
      return channelHandle2.sendMessage;
    }),
    arguments: [{ objectId: channelHandle }],
    executionContextId: realm.executionContextId,
    serializationOptions: {
      serialization: "idOnly"
    }
  });
  return sendMessageArgResult.result.objectId;
};
_startListener = new WeakSet();
startListener_fn = async function(realm, channelHandle, eventManager) {
  var _a4, _b3;
  for (; ; ) {
    try {
      const message = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: String(async (channelHandle2) => await channelHandle2.getMessage()),
        arguments: [
          {
            objectId: channelHandle
          }
        ],
        awaitPromise: true,
        executionContextId: realm.executionContextId,
        serializationOptions: {
          serialization: "deep",
          maxDepth: ((_a4 = __privateGet(this, _properties).serializationOptions) == null ? void 0 : _a4.maxObjectDepth) ?? void 0
        }
      });
      if (message.exceptionDetails) {
        throw message.exceptionDetails;
      }
      for (const browsingContext of realm.associatedBrowsingContexts) {
        eventManager.registerEvent({
          type: "event",
          method: protocol_js_1$e.ChromiumBidi.Script.EventNames.Message,
          params: {
            channel: __privateGet(this, _properties).channel,
            data: realm.cdpToBidiValue(
              message,
              __privateGet(this, _properties).ownership ?? "none"
              /* Script.ResultOwnership.None */
            ),
            source: realm.source
          }
        }, browsingContext.id);
      }
    } catch (error) {
      (_b3 = __privateGet(this, _logger2)) == null ? void 0 : _b3.call(this, log_js_1$8.LogType.debugError, error);
      break;
    }
  }
};
_getHandleFromWindow = new WeakSet();
getHandleFromWindow_fn = async function(realm) {
  const channelHandleResult = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
    functionDeclaration: String((id) => {
      const w2 = window;
      if (w2[id] === void 0) {
        return new Promise((resolve) => w2[id] = resolve);
      }
      const channelProxy = w2[id];
      delete w2[id];
      return channelProxy;
    }),
    arguments: [{ value: __privateGet(this, _id) }],
    executionContextId: realm.executionContextId,
    awaitPromise: true,
    serializationOptions: {
      serialization: "idOnly"
    }
  });
  if (channelHandleResult.exceptionDetails !== void 0 || channelHandleResult.result.objectId === void 0) {
    throw new Error(`ChannelHandle not found in window["${__privateGet(this, _id)}"]`);
  }
  return channelHandleResult.result.objectId;
};
/**
 * Evaluation string which creates a ChannelProxy object on the client side.
 */
__privateAdd(_ChannelProxy, _createChannelProxyEvalStr);
/** Creates a ChannelProxy in the given realm. */
__privateAdd(_ChannelProxy, _createAndGetHandleInRealm);
/** Gets a handle to `sendMessage` delegate from the ChannelProxy handle. */
__privateAdd(_ChannelProxy, _createSendMessageHandle);
let ChannelProxy = _ChannelProxy;
ChannelProxy$1.ChannelProxy = ChannelProxy;
Object.defineProperty(PreloadScript$1, "__esModule", { value: true });
PreloadScript$1.PreloadScript = void 0;
const uuid_js_1$2 = uuid;
const ChannelProxy_js_1$1 = ChannelProxy$1;
class PreloadScript {
  constructor(params, logger) {
    /**
     * String to be evaluated. Wraps user-provided function so that the following
     * steps are run:
     * 1. Create channels.
     * 2. Store the created channels in window.
     * 3. Call the user-provided function with channels as arguments.
     */
    __privateAdd(this, _getEvaluateString);
    /** BiDi ID, an automatically generated UUID. */
    __privateAdd(this, _id2, (0, uuid_js_1$2.uuidv4)());
    /** CDP preload scripts. */
    __privateAdd(this, _cdpPreloadScripts, []);
    /** The script itself, in a format expected by the spec i.e. a function. */
    __privateAdd(this, _functionDeclaration, void 0);
    /** Targets, in which the preload script is initialized. */
    __privateAdd(this, _targetIds, /* @__PURE__ */ new Set());
    /** Channels to be added as arguments to functionDeclaration. */
    __privateAdd(this, _channels, void 0);
    /** The script sandbox / world name. */
    __privateAdd(this, _sandbox, void 0);
    /** The browsing contexts to execute the preload scripts in, if any. */
    __privateAdd(this, _contexts, void 0);
    var _a4;
    __privateSet(this, _channels, ((_a4 = params.arguments) == null ? void 0 : _a4.map((a) => new ChannelProxy_js_1$1.ChannelProxy(a.value, logger))) ?? []);
    __privateSet(this, _functionDeclaration, params.functionDeclaration);
    __privateSet(this, _sandbox, params.sandbox);
    __privateSet(this, _contexts, params.contexts);
  }
  get id() {
    return __privateGet(this, _id2);
  }
  get targetIds() {
    return __privateGet(this, _targetIds);
  }
  /** Channels of the preload script. */
  get channels() {
    return __privateGet(this, _channels);
  }
  /** Contexts of the preload script, if any */
  get contexts() {
    return __privateGet(this, _contexts);
  }
  /**
   * Adds the script to the given CDP targets by calling the
   * `Page.addScriptToEvaluateOnNewDocument` command.
   */
  async initInTargets(cdpTargets, runImmediately) {
    await Promise.all(Array.from(cdpTargets).map((cdpTarget) => this.initInTarget(cdpTarget, runImmediately)));
  }
  /**
   * Adds the script to the given CDP target by calling the
   * `Page.addScriptToEvaluateOnNewDocument` command.
   */
  async initInTarget(cdpTarget, runImmediately) {
    const addCdpPreloadScriptResult = await cdpTarget.cdpClient.sendCommand("Page.addScriptToEvaluateOnNewDocument", {
      source: __privateMethod(this, _getEvaluateString, getEvaluateString_fn).call(this),
      worldName: __privateGet(this, _sandbox),
      runImmediately
    });
    __privateGet(this, _cdpPreloadScripts).push({
      target: cdpTarget,
      preloadScriptId: addCdpPreloadScriptResult.identifier
    });
    __privateGet(this, _targetIds).add(cdpTarget.id);
  }
  /**
   * Removes this script from all CDP targets.
   */
  async remove() {
    await Promise.all([
      __privateGet(this, _cdpPreloadScripts).map(async (cdpPreloadScript) => {
        const cdpTarget = cdpPreloadScript.target;
        const cdpPreloadScriptId = cdpPreloadScript.preloadScriptId;
        return await cdpTarget.cdpClient.sendCommand("Page.removeScriptToEvaluateOnNewDocument", {
          identifier: cdpPreloadScriptId
        });
      })
    ]);
  }
  /** Removes the provided cdp target from the list of cdp preload scripts. */
  dispose(cdpTargetId) {
    __privateSet(this, _cdpPreloadScripts, __privateGet(this, _cdpPreloadScripts).filter((cdpPreloadScript) => {
      var _a4;
      return ((_a4 = cdpPreloadScript.target) == null ? void 0 : _a4.id) !== cdpTargetId;
    }));
    __privateGet(this, _targetIds).delete(cdpTargetId);
  }
}
_id2 = new WeakMap();
_cdpPreloadScripts = new WeakMap();
_functionDeclaration = new WeakMap();
_targetIds = new WeakMap();
_channels = new WeakMap();
_sandbox = new WeakMap();
_contexts = new WeakMap();
_getEvaluateString = new WeakSet();
getEvaluateString_fn = function() {
  const channelsArgStr = `[${this.channels.map((c) => c.getEvalInWindowStr()).join(", ")}]`;
  return `(()=>{(${__privateGet(this, _functionDeclaration)})(...${channelsArgStr})})()`;
};
PreloadScript$1.PreloadScript = PreloadScript;
Object.defineProperty(ScriptProcessor$1, "__esModule", { value: true });
ScriptProcessor$1.ScriptProcessor = void 0;
const protocol_js_1$d = protocol;
const PreloadScript_js_1 = PreloadScript$1;
class ScriptProcessor {
  constructor(browsingContextStorage, realmStorage, preloadScriptStorage, logger) {
    __privateAdd(this, _getRealm);
    __privateAdd(this, _browsingContextStorage5, void 0);
    __privateAdd(this, _realmStorage3, void 0);
    __privateAdd(this, _preloadScriptStorage, void 0);
    __privateAdd(this, _logger3, void 0);
    __privateSet(this, _browsingContextStorage5, browsingContextStorage);
    __privateSet(this, _realmStorage3, realmStorage);
    __privateSet(this, _preloadScriptStorage, preloadScriptStorage);
    __privateSet(this, _logger3, logger);
  }
  async addPreloadScript(params) {
    const contexts = __privateGet(this, _browsingContextStorage5).verifyTopLevelContextsList(params.contexts);
    const preloadScript = new PreloadScript_js_1.PreloadScript(params, __privateGet(this, _logger3));
    __privateGet(this, _preloadScriptStorage).add(preloadScript);
    const cdpTargets = contexts.size === 0 ? new Set(__privateGet(this, _browsingContextStorage5).getTopLevelContexts().map((context) => context.cdpTarget)) : new Set([...contexts.values()].map((context) => context.cdpTarget));
    await preloadScript.initInTargets(cdpTargets, false);
    return {
      script: preloadScript.id
    };
  }
  async removePreloadScript(params) {
    const { script: id } = params;
    const scripts = __privateGet(this, _preloadScriptStorage).find({ id });
    if (scripts.length === 0) {
      throw new protocol_js_1$d.NoSuchScriptException(`No preload script with id '${id}'`);
    }
    await Promise.all(scripts.map((script) => script.remove()));
    __privateGet(this, _preloadScriptStorage).remove({ id });
    return {};
  }
  async callFunction(params) {
    const realm = await __privateMethod(this, _getRealm, getRealm_fn).call(this, params.target);
    return await realm.callFunction(params.functionDeclaration, params.awaitPromise, params.this, params.arguments, params.resultOwnership, params.serializationOptions, params.userActivation);
  }
  async evaluate(params) {
    const realm = await __privateMethod(this, _getRealm, getRealm_fn).call(this, params.target);
    return await realm.evaluate(params.expression, params.awaitPromise, params.resultOwnership, params.serializationOptions, params.userActivation);
  }
  async disown(params) {
    const realm = await __privateMethod(this, _getRealm, getRealm_fn).call(this, params.target);
    await Promise.all(params.handles.map(async (handle) => await realm.disown(handle)));
    return {};
  }
  getRealms(params) {
    if (params.context !== void 0) {
      __privateGet(this, _browsingContextStorage5).getContext(params.context);
    }
    const realms = __privateGet(this, _realmStorage3).findRealms({
      browsingContextId: params.context,
      type: params.type
    }).map((realm) => realm.realmInfo);
    return { realms };
  }
}
_browsingContextStorage5 = new WeakMap();
_realmStorage3 = new WeakMap();
_preloadScriptStorage = new WeakMap();
_logger3 = new WeakMap();
_getRealm = new WeakSet();
getRealm_fn = async function(target) {
  if ("context" in target) {
    const context = __privateGet(this, _browsingContextStorage5).getContext(target.context);
    return await context.getOrCreateSandbox(target.sandbox);
  }
  return __privateGet(this, _realmStorage3).getRealm({
    realmId: target.realm
  });
};
ScriptProcessor$1.ScriptProcessor = ScriptProcessor;
var SessionProcessor$1 = {};
Object.defineProperty(SessionProcessor$1, "__esModule", { value: true });
SessionProcessor$1.SessionProcessor = void 0;
class SessionProcessor {
  constructor(eventManager, browserCdpClient) {
    __privateAdd(this, _eventManager, void 0);
    __privateAdd(this, _browserCdpClient5, void 0);
    __privateSet(this, _eventManager, eventManager);
    __privateSet(this, _browserCdpClient5, browserCdpClient);
  }
  status() {
    return { ready: false, message: "already connected" };
  }
  async create(_params) {
    const version = await __privateGet(this, _browserCdpClient5).sendCommand("Browser.getVersion");
    return {
      sessionId: "unknown",
      capabilities: {
        acceptInsecureCerts: false,
        browserName: version.product,
        browserVersion: version.revision,
        platformName: "",
        setWindowRect: false,
        webSocketUrl: "",
        userAgent: version.userAgent
      }
    };
  }
  async subscribe(params, channel = null) {
    await __privateGet(this, _eventManager).subscribe(params.events, params.contexts ?? [null], channel);
    return {};
  }
  async unsubscribe(params, channel = null) {
    await __privateGet(this, _eventManager).unsubscribe(params.events, params.contexts ?? [null], channel);
    return {};
  }
}
_eventManager = new WeakMap();
_browserCdpClient5 = new WeakMap();
SessionProcessor$1.SessionProcessor = SessionProcessor;
var StorageProcessor$1 = {};
Object.defineProperty(StorageProcessor$1, "__esModule", { value: true });
StorageProcessor$1.StorageProcessor = void 0;
const protocol_js_1$c = protocol;
const assert_js_1$3 = assert$1;
const log_js_1$7 = log;
const NetworkProcessor_js_1$1 = NetworkProcessor$1;
const NetworkUtils_js_1$2 = NetworkUtils;
class StorageProcessor {
  constructor(browserCdpClient, browsingContextStorage, logger) {
    __privateAdd(this, _isNoSuchUserContextError);
    __privateAdd(this, _getCdpBrowserContextId);
    __privateAdd(this, _expandStoragePartitionSpecByBrowsingContext);
    __privateAdd(this, _expandStoragePartitionSpecByStorageKey);
    __privateAdd(this, _expandStoragePartitionSpec);
    __privateAdd(this, _matchCookie);
    __privateAdd(this, _browserCdpClient6, void 0);
    __privateAdd(this, _browsingContextStorage6, void 0);
    __privateAdd(this, _logger4, void 0);
    __privateSet(this, _browsingContextStorage6, browsingContextStorage);
    __privateSet(this, _browserCdpClient6, browserCdpClient);
    __privateSet(this, _logger4, logger);
  }
  async deleteCookies(params) {
    const partitionKey = __privateMethod(this, _expandStoragePartitionSpec, expandStoragePartitionSpec_fn).call(this, params.partition);
    let cdpResponse;
    try {
      cdpResponse = await __privateGet(this, _browserCdpClient6).sendCommand("Storage.getCookies", {
        browserContextId: __privateMethod(this, _getCdpBrowserContextId, getCdpBrowserContextId_fn).call(this, partitionKey)
      });
    } catch (err) {
      if (__privateMethod(this, _isNoSuchUserContextError, isNoSuchUserContextError_fn).call(this, err)) {
        throw new protocol_js_1$c.NoSuchUserContextException(err.message);
      }
      throw err;
    }
    const cdpCookiesToDelete = cdpResponse.cookies.filter(
      // CDP's partition key is the source origin. If the request specifies the
      // `sourceOrigin` partition key, only cookies with the requested source origin
      // are returned.
      (c) => partitionKey.sourceOrigin === void 0 || c.partitionKey === partitionKey.sourceOrigin
    ).filter((cdpCookie) => {
      const bidiCookie = (0, NetworkUtils_js_1$2.cdpToBiDiCookie)(cdpCookie);
      return __privateMethod(this, _matchCookie, matchCookie_fn).call(this, bidiCookie, params.filter);
    }).map((cookie) => ({
      ...cookie,
      // Set expiry to pass date to delete the cookie.
      expires: 1
    }));
    await __privateGet(this, _browserCdpClient6).sendCommand("Storage.setCookies", {
      cookies: cdpCookiesToDelete,
      browserContextId: __privateMethod(this, _getCdpBrowserContextId, getCdpBrowserContextId_fn).call(this, partitionKey)
    });
    return {
      partitionKey
    };
  }
  async getCookies(params) {
    const partitionKey = __privateMethod(this, _expandStoragePartitionSpec, expandStoragePartitionSpec_fn).call(this, params.partition);
    let cdpResponse;
    try {
      cdpResponse = await __privateGet(this, _browserCdpClient6).sendCommand("Storage.getCookies", {
        browserContextId: __privateMethod(this, _getCdpBrowserContextId, getCdpBrowserContextId_fn).call(this, partitionKey)
      });
    } catch (err) {
      if (__privateMethod(this, _isNoSuchUserContextError, isNoSuchUserContextError_fn).call(this, err)) {
        throw new protocol_js_1$c.NoSuchUserContextException(err.message);
      }
      throw err;
    }
    const filteredBiDiCookies = cdpResponse.cookies.filter(
      // CDP's partition key is the source origin. If the request specifies the
      // `sourceOrigin` partition key, only cookies with the requested source origin
      // are returned.
      (c) => partitionKey.sourceOrigin === void 0 || c.partitionKey === partitionKey.sourceOrigin
    ).map((c) => (0, NetworkUtils_js_1$2.cdpToBiDiCookie)(c)).filter((c) => __privateMethod(this, _matchCookie, matchCookie_fn).call(this, c, params.filter));
    return {
      cookies: filteredBiDiCookies,
      partitionKey
    };
  }
  async setCookie(params) {
    var _a4;
    const partitionKey = __privateMethod(this, _expandStoragePartitionSpec, expandStoragePartitionSpec_fn).call(this, params.partition);
    const cdpCookie = (0, NetworkUtils_js_1$2.bidiToCdpCookie)(params, partitionKey);
    try {
      await __privateGet(this, _browserCdpClient6).sendCommand("Storage.setCookies", {
        cookies: [cdpCookie],
        browserContextId: __privateMethod(this, _getCdpBrowserContextId, getCdpBrowserContextId_fn).call(this, partitionKey)
      });
    } catch (err) {
      if (__privateMethod(this, _isNoSuchUserContextError, isNoSuchUserContextError_fn).call(this, err)) {
        throw new protocol_js_1$c.NoSuchUserContextException(err.message);
      }
      (_a4 = __privateGet(this, _logger4)) == null ? void 0 : _a4.call(this, log_js_1$7.LogType.debugError, err);
      throw new protocol_js_1$c.UnableToSetCookieException(err.toString());
    }
    return {
      partitionKey
    };
  }
}
_browserCdpClient6 = new WeakMap();
_browsingContextStorage6 = new WeakMap();
_logger4 = new WeakMap();
_isNoSuchUserContextError = new WeakSet();
isNoSuchUserContextError_fn = function(err) {
  var _a4;
  return (_a4 = err.message) == null ? void 0 : _a4.startsWith("Failed to find browser context for id");
};
_getCdpBrowserContextId = new WeakSet();
getCdpBrowserContextId_fn = function(partitionKey) {
  return partitionKey.userContext === "default" ? void 0 : partitionKey.userContext;
};
_expandStoragePartitionSpecByBrowsingContext = new WeakSet();
expandStoragePartitionSpecByBrowsingContext_fn = function(descriptor) {
  const browsingContextId = descriptor.context;
  const browsingContext = __privateGet(this, _browsingContextStorage6).getContext(browsingContextId);
  return {
    userContext: browsingContext.userContext
  };
};
_expandStoragePartitionSpecByStorageKey = new WeakSet();
expandStoragePartitionSpecByStorageKey_fn = function(descriptor) {
  var _a4;
  const unsupportedPartitionKeys = /* @__PURE__ */ new Map();
  let sourceOrigin = descriptor.sourceOrigin;
  if (sourceOrigin !== void 0) {
    const url = NetworkProcessor_js_1$1.NetworkProcessor.parseUrlString(sourceOrigin);
    if (url.origin === "null") {
      sourceOrigin = url.origin;
    } else {
      sourceOrigin = `${url.protocol}//${url.hostname}`;
    }
  }
  for (const [key, value] of Object.entries(descriptor)) {
    if (key !== void 0 && value !== void 0 && !["type", "sourceOrigin", "userContext"].includes(key)) {
      unsupportedPartitionKeys.set(key, value);
    }
  }
  if (unsupportedPartitionKeys.size > 0) {
    (_a4 = __privateGet(this, _logger4)) == null ? void 0 : _a4.call(this, log_js_1$7.LogType.debugInfo, `Unsupported partition keys: ${JSON.stringify(Object.fromEntries(unsupportedPartitionKeys))}`);
  }
  const userContext = descriptor.userContext ?? "default";
  return {
    userContext,
    ...sourceOrigin === void 0 ? {} : { sourceOrigin }
  };
};
_expandStoragePartitionSpec = new WeakSet();
expandStoragePartitionSpec_fn = function(partitionSpec) {
  if (partitionSpec === void 0) {
    return { userContext: "default" };
  }
  if (partitionSpec.type === "context") {
    return __privateMethod(this, _expandStoragePartitionSpecByBrowsingContext, expandStoragePartitionSpecByBrowsingContext_fn).call(this, partitionSpec);
  }
  (0, assert_js_1$3.assert)(partitionSpec.type === "storageKey", "Unknown partition type");
  return __privateMethod(this, _expandStoragePartitionSpecByStorageKey, expandStoragePartitionSpecByStorageKey_fn).call(this, partitionSpec);
};
_matchCookie = new WeakSet();
matchCookie_fn = function(cookie, filter) {
  if (filter === void 0) {
    return true;
  }
  return (filter.domain === void 0 || filter.domain === cookie.domain) && (filter.name === void 0 || filter.name === cookie.name) && // `value` contains fields `type` and `value`.
  (filter.value === void 0 || (0, NetworkUtils_js_1$2.deserializeByteValue)(filter.value) === (0, NetworkUtils_js_1$2.deserializeByteValue)(cookie.value)) && (filter.path === void 0 || filter.path === cookie.path) && (filter.size === void 0 || filter.size === cookie.size) && (filter.httpOnly === void 0 || filter.httpOnly === cookie.httpOnly) && (filter.secure === void 0 || filter.secure === cookie.secure) && (filter.sameSite === void 0 || filter.sameSite === cookie.sameSite) && (filter.expiry === void 0 || filter.expiry === cookie.expiry);
};
StorageProcessor$1.StorageProcessor = StorageProcessor;
var OutgoingMessage$1 = {};
Object.defineProperty(OutgoingMessage$1, "__esModule", { value: true });
OutgoingMessage$1.OutgoingMessage = void 0;
const _OutgoingMessage = class _OutgoingMessage {
  constructor(message, channel = null) {
    __privateAdd(this, _message, void 0);
    __privateAdd(this, _channel, void 0);
    __privateSet(this, _message, message);
    __privateSet(this, _channel, channel);
  }
  static createFromPromise(messagePromise, channel) {
    return messagePromise.then((message) => {
      if (message.kind === "success") {
        return {
          kind: "success",
          value: new _OutgoingMessage(message.value, channel)
        };
      }
      return message;
    });
  }
  static createResolved(message, channel) {
    return Promise.resolve({
      kind: "success",
      value: new _OutgoingMessage(message, channel)
    });
  }
  get message() {
    return __privateGet(this, _message);
  }
  get channel() {
    return __privateGet(this, _channel);
  }
};
_message = new WeakMap();
_channel = new WeakMap();
let OutgoingMessage = _OutgoingMessage;
OutgoingMessage$1.OutgoingMessage = OutgoingMessage;
Object.defineProperty(CommandProcessor$1, "__esModule", { value: true });
CommandProcessor$1.CommandProcessor = void 0;
const protocol_js_1$b = protocol;
const EventEmitter_js_1$2 = EventEmitter$1;
const log_js_1$6 = log;
const BidiNoOpParser_js_1 = BidiNoOpParser$1;
const BrowserProcessor_js_1 = BrowserProcessor$1;
const CdpProcessor_js_1 = CdpProcessor$1;
const BrowsingContextProcessor_js_1 = BrowsingContextProcessor$1;
const InputProcessor_js_1 = InputProcessor$1;
const NetworkProcessor_js_1 = NetworkProcessor$1;
const PermissionsProcessor_js_1 = PermissionsProcessor$1;
const ScriptProcessor_js_1 = ScriptProcessor$1;
const SessionProcessor_js_1 = SessionProcessor$1;
const StorageProcessor_js_1 = StorageProcessor$1;
const OutgoingMessage_js_1$1 = OutgoingMessage$1;
class CommandProcessor extends EventEmitter_js_1$2.EventEmitter {
  constructor(cdpConnection, browserCdpClient, eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, networkStorage, parser = new BidiNoOpParser_js_1.BidiNoOpParser(), logger) {
    super();
    __privateAdd(this, _processCommand);
    // Workaround for as zod.union always take the first schema
    // https://github.com/w3c/webdriver-bidi/issues/635
    __privateAdd(this, _processTargetParams);
    // keep-sorted start
    __privateAdd(this, _browserProcessor, void 0);
    __privateAdd(this, _browsingContextProcessor, void 0);
    __privateAdd(this, _cdpProcessor, void 0);
    __privateAdd(this, _inputProcessor, void 0);
    __privateAdd(this, _networkProcessor, void 0);
    __privateAdd(this, _permissionsProcessor, void 0);
    __privateAdd(this, _scriptProcessor, void 0);
    __privateAdd(this, _sessionProcessor, void 0);
    __privateAdd(this, _storageProcessor, void 0);
    // keep-sorted end
    __privateAdd(this, _parser, void 0);
    __privateAdd(this, _logger5, void 0);
    __privateSet(this, _parser, parser);
    __privateSet(this, _logger5, logger);
    __privateSet(this, _browserProcessor, new BrowserProcessor_js_1.BrowserProcessor(browserCdpClient));
    __privateSet(this, _browsingContextProcessor, new BrowsingContextProcessor_js_1.BrowsingContextProcessor(browserCdpClient, browsingContextStorage));
    __privateSet(this, _cdpProcessor, new CdpProcessor_js_1.CdpProcessor(browsingContextStorage, realmStorage, cdpConnection, browserCdpClient));
    __privateSet(this, _inputProcessor, new InputProcessor_js_1.InputProcessor(browsingContextStorage, realmStorage));
    __privateSet(this, _networkProcessor, new NetworkProcessor_js_1.NetworkProcessor(browsingContextStorage, networkStorage));
    __privateSet(this, _permissionsProcessor, new PermissionsProcessor_js_1.PermissionsProcessor(browserCdpClient));
    __privateSet(this, _scriptProcessor, new ScriptProcessor_js_1.ScriptProcessor(browsingContextStorage, realmStorage, preloadScriptStorage, logger));
    __privateSet(this, _sessionProcessor, new SessionProcessor_js_1.SessionProcessor(eventManager, browserCdpClient));
    __privateSet(this, _storageProcessor, new StorageProcessor_js_1.StorageProcessor(browserCdpClient, browsingContextStorage, logger));
  }
  async processCommand(command) {
    var _a4;
    try {
      const result = await __privateMethod(this, _processCommand, processCommand_fn).call(this, command);
      const response = {
        type: "success",
        id: command.id,
        result
      };
      this.emit("response", {
        message: OutgoingMessage_js_1$1.OutgoingMessage.createResolved(response, command.channel),
        event: command.method
      });
    } catch (e) {
      if (e instanceof protocol_js_1$b.Exception) {
        this.emit("response", {
          message: OutgoingMessage_js_1$1.OutgoingMessage.createResolved(e.toErrorResponse(command.id), command.channel),
          event: command.method
        });
      } else {
        const error = e;
        (_a4 = __privateGet(this, _logger5)) == null ? void 0 : _a4.call(this, log_js_1$6.LogType.bidi, error);
        this.emit("response", {
          message: OutgoingMessage_js_1$1.OutgoingMessage.createResolved(new protocol_js_1$b.UnknownErrorException(error.message, error.stack).toErrorResponse(command.id), command.channel),
          event: command.method
        });
      }
    }
  }
}
_browserProcessor = new WeakMap();
_browsingContextProcessor = new WeakMap();
_cdpProcessor = new WeakMap();
_inputProcessor = new WeakMap();
_networkProcessor = new WeakMap();
_permissionsProcessor = new WeakMap();
_scriptProcessor = new WeakMap();
_sessionProcessor = new WeakMap();
_storageProcessor = new WeakMap();
_parser = new WeakMap();
_logger5 = new WeakMap();
_processCommand = new WeakSet();
processCommand_fn = async function(command) {
  switch (command.method) {
    case "session.end":
      break;
    case "browser.close":
      return __privateGet(this, _browserProcessor).close();
    case "browser.createUserContext":
      return await __privateGet(this, _browserProcessor).createUserContext(command.params);
    case "browser.getUserContexts":
      return await __privateGet(this, _browserProcessor).getUserContexts();
    case "browser.removeUserContext":
      return await __privateGet(this, _browserProcessor).removeUserContext(__privateGet(this, _parser).parseRemoveUserContextParams(command.params));
    case "browsingContext.activate":
      return await __privateGet(this, _browsingContextProcessor).activate(__privateGet(this, _parser).parseActivateParams(command.params));
    case "browsingContext.captureScreenshot":
      return await __privateGet(this, _browsingContextProcessor).captureScreenshot(__privateGet(this, _parser).parseCaptureScreenshotParams(command.params));
    case "browsingContext.close":
      return await __privateGet(this, _browsingContextProcessor).close(__privateGet(this, _parser).parseCloseParams(command.params));
    case "browsingContext.create":
      return await __privateGet(this, _browsingContextProcessor).create(__privateGet(this, _parser).parseCreateParams(command.params));
    case "browsingContext.getTree":
      return __privateGet(this, _browsingContextProcessor).getTree(__privateGet(this, _parser).parseGetTreeParams(command.params));
    case "browsingContext.handleUserPrompt":
      return await __privateGet(this, _browsingContextProcessor).handleUserPrompt(__privateGet(this, _parser).parseHandleUserPromptParams(command.params));
    case "browsingContext.locateNodes":
      return await __privateGet(this, _browsingContextProcessor).locateNodes(__privateGet(this, _parser).parseLocateNodesParams(command.params));
    case "browsingContext.navigate":
      return await __privateGet(this, _browsingContextProcessor).navigate(__privateGet(this, _parser).parseNavigateParams(command.params));
    case "browsingContext.print":
      return await __privateGet(this, _browsingContextProcessor).print(__privateGet(this, _parser).parsePrintParams(command.params));
    case "browsingContext.reload":
      return await __privateGet(this, _browsingContextProcessor).reload(__privateGet(this, _parser).parseReloadParams(command.params));
    case "browsingContext.setViewport":
      return await __privateGet(this, _browsingContextProcessor).setViewport(__privateGet(this, _parser).parseSetViewportParams(command.params));
    case "browsingContext.traverseHistory":
      return await __privateGet(this, _browsingContextProcessor).traverseHistory(__privateGet(this, _parser).parseTraverseHistoryParams(command.params));
    case "cdp.getSession":
      return __privateGet(this, _cdpProcessor).getSession(__privateGet(this, _parser).parseGetSessionParams(command.params));
    case "cdp.resolveRealm":
      return __privateGet(this, _cdpProcessor).resolveRealm(__privateGet(this, _parser).parseResolveRealmParams(command.params));
    case "cdp.sendCommand":
      return await __privateGet(this, _cdpProcessor).sendCommand(__privateGet(this, _parser).parseSendCommandParams(command.params));
    case "input.performActions":
      return await __privateGet(this, _inputProcessor).performActions(__privateGet(this, _parser).parsePerformActionsParams(command.params));
    case "input.releaseActions":
      return await __privateGet(this, _inputProcessor).releaseActions(__privateGet(this, _parser).parseReleaseActionsParams(command.params));
    case "input.setFiles":
      return await __privateGet(this, _inputProcessor).setFiles(__privateGet(this, _parser).parseSetFilesParams(command.params));
    case "network.addIntercept":
      return await __privateGet(this, _networkProcessor).addIntercept(__privateGet(this, _parser).parseAddInterceptParams(command.params));
    case "network.continueRequest":
      return await __privateGet(this, _networkProcessor).continueRequest(__privateGet(this, _parser).parseContinueRequestParams(command.params));
    case "network.continueResponse":
      return await __privateGet(this, _networkProcessor).continueResponse(__privateGet(this, _parser).parseContinueResponseParams(command.params));
    case "network.continueWithAuth":
      return await __privateGet(this, _networkProcessor).continueWithAuth(__privateGet(this, _parser).parseContinueWithAuthParams(command.params));
    case "network.failRequest":
      return await __privateGet(this, _networkProcessor).failRequest(__privateGet(this, _parser).parseFailRequestParams(command.params));
    case "network.provideResponse":
      return await __privateGet(this, _networkProcessor).provideResponse(__privateGet(this, _parser).parseProvideResponseParams(command.params));
    case "network.removeIntercept":
      return await __privateGet(this, _networkProcessor).removeIntercept(__privateGet(this, _parser).parseRemoveInterceptParams(command.params));
    case "permissions.setPermission":
      return await __privateGet(this, _permissionsProcessor).setPermissions(__privateGet(this, _parser).parseSetPermissionsParams(command.params));
    case "script.addPreloadScript":
      return await __privateGet(this, _scriptProcessor).addPreloadScript(__privateGet(this, _parser).parseAddPreloadScriptParams(command.params));
    case "script.callFunction":
      return await __privateGet(this, _scriptProcessor).callFunction(__privateGet(this, _parser).parseCallFunctionParams(__privateMethod(this, _processTargetParams, processTargetParams_fn).call(this, command.params)));
    case "script.disown":
      return await __privateGet(this, _scriptProcessor).disown(__privateGet(this, _parser).parseDisownParams(__privateMethod(this, _processTargetParams, processTargetParams_fn).call(this, command.params)));
    case "script.evaluate":
      return await __privateGet(this, _scriptProcessor).evaluate(__privateGet(this, _parser).parseEvaluateParams(__privateMethod(this, _processTargetParams, processTargetParams_fn).call(this, command.params)));
    case "script.getRealms":
      return __privateGet(this, _scriptProcessor).getRealms(__privateGet(this, _parser).parseGetRealmsParams(command.params));
    case "script.removePreloadScript":
      return await __privateGet(this, _scriptProcessor).removePreloadScript(__privateGet(this, _parser).parseRemovePreloadScriptParams(command.params));
    case "session.new":
      return await __privateGet(this, _sessionProcessor).create(command.params);
    case "session.status":
      return __privateGet(this, _sessionProcessor).status();
    case "session.subscribe":
      return await __privateGet(this, _sessionProcessor).subscribe(__privateGet(this, _parser).parseSubscribeParams(command.params), command.channel);
    case "session.unsubscribe":
      return await __privateGet(this, _sessionProcessor).unsubscribe(__privateGet(this, _parser).parseSubscribeParams(command.params), command.channel);
    case "storage.deleteCookies":
      return await __privateGet(this, _storageProcessor).deleteCookies(__privateGet(this, _parser).parseDeleteCookiesParams(command.params));
    case "storage.getCookies":
      return await __privateGet(this, _storageProcessor).getCookies(__privateGet(this, _parser).parseGetCookiesParams(command.params));
    case "storage.setCookie":
      return await __privateGet(this, _storageProcessor).setCookie(__privateGet(this, _parser).parseSetCookieParams(command.params));
  }
  throw new protocol_js_1$b.UnknownCommandException(`Unknown command '${command.method}'.`);
};
_processTargetParams = new WeakSet();
processTargetParams_fn = function(params) {
  if (typeof params === "object" && params && "target" in params && typeof params.target === "object" && params.target && "context" in params.target) {
    delete params.target["realm"];
  }
  return params;
};
CommandProcessor$1.CommandProcessor = CommandProcessor;
var CdpTargetManager$1 = {};
var BrowsingContextImpl$1 = {};
var Deferred$1 = {};
Object.defineProperty(Deferred$1, "__esModule", { value: true });
Deferred$1.Deferred = void 0;
class Deferred {
  constructor() {
    __privateAdd(this, _isFinished, false);
    __privateAdd(this, _promise, void 0);
    __privateAdd(this, _resolve, void 0);
    __privateAdd(this, _reject, void 0);
    __publicField(this, _d2, "Promise");
    __privateSet(this, _promise, new Promise((resolve, reject) => {
      __privateSet(this, _resolve, resolve);
      __privateSet(this, _reject, reject);
    }));
    __privateGet(this, _promise).catch((_error) => {
    });
  }
  get isFinished() {
    return __privateGet(this, _isFinished);
  }
  then(onFulfilled, onRejected) {
    return __privateGet(this, _promise).then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return __privateGet(this, _promise).catch(onRejected);
  }
  resolve(value) {
    if (!__privateGet(this, _isFinished)) {
      __privateSet(this, _isFinished, true);
      __privateGet(this, _resolve).call(this, value);
    }
  }
  reject(reason) {
    if (!__privateGet(this, _isFinished)) {
      __privateSet(this, _isFinished, true);
      __privateGet(this, _reject).call(this, reason);
    }
  }
  finally(onFinally) {
    return __privateGet(this, _promise).finally(onFinally);
  }
}
_d2 = Symbol.toStringTag;
_isFinished = new WeakMap();
_promise = new WeakMap();
_resolve = new WeakMap();
_reject = new WeakMap();
Deferred$1.Deferred = Deferred;
var unitConversions = {};
Object.defineProperty(unitConversions, "__esModule", { value: true });
unitConversions.inchesFromCm = void 0;
function inchesFromCm(cm) {
  return cm / 2.54;
}
unitConversions.inchesFromCm = inchesFromCm;
var WindowRealm$2 = {};
var Realm$2 = {};
Object.defineProperty(Realm$2, "__esModule", { value: true });
Realm$2.Realm = void 0;
const protocol_js_1$a = protocol;
const log_js_1$5 = log;
const uuid_js_1$1 = uuid;
const ChannelProxy_js_1 = ChannelProxy$1;
let Realm$1 = (_e = class {
  constructor(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage) {
    __privateAdd(this, _registerEvent);
    __privateAdd(this, _flattenKeyValuePairs);
    __privateAdd(this, _flattenValueList);
    __privateAdd(this, _serializeCdpExceptionDetails);
    __privateAdd(this, _getExceptionResult);
    __privateAdd(this, _releaseObject);
    __privateAdd(this, _cdpClient, void 0);
    __privateAdd(this, _eventManager2, void 0);
    __privateAdd(this, _executionContextId, void 0);
    __privateAdd(this, _logger6, void 0);
    __privateAdd(this, _origin, void 0);
    __privateAdd(this, _realmId, void 0);
    __privateAdd(this, _realmStorage4, void 0);
    __privateSet(this, _cdpClient, cdpClient);
    __privateSet(this, _eventManager2, eventManager);
    __privateSet(this, _executionContextId, executionContextId);
    __privateSet(this, _logger6, logger);
    __privateSet(this, _origin, origin);
    __privateSet(this, _realmId, realmId);
    __privateSet(this, _realmStorage4, realmStorage);
    __privateGet(this, _realmStorage4).addRealm(this);
  }
  cdpToBidiValue(cdpValue, resultOwnership) {
    const bidiValue = this.serializeForBiDi(cdpValue.result.deepSerializedValue, /* @__PURE__ */ new Map());
    if (cdpValue.result.objectId) {
      const objectId = cdpValue.result.objectId;
      if (resultOwnership === "root") {
        bidiValue.handle = objectId;
        __privateGet(this, _realmStorage4).knownHandlesToRealmMap.set(objectId, this.realmId);
      } else {
        void __privateMethod(this, _releaseObject, releaseObject_fn).call(this, objectId).catch((error) => {
          var _a4;
          return (_a4 = __privateGet(this, _logger6)) == null ? void 0 : _a4.call(this, log_js_1$5.LogType.debugError, error);
        });
      }
    }
    return bidiValue;
  }
  /**
   * Relies on the CDP to implement proper BiDi serialization, except:
   * * CDP integer property `backendNodeId` is replaced with `sharedId` of
   * `{documentId}_element_{backendNodeId}`;
   * * CDP integer property `weakLocalObjectReference` is replaced with UUID `internalId`
   * using unique-per serialization `internalIdMap`.
   * * CDP type `platformobject` is replaced with `object`.
   * @param deepSerializedValue - CDP value to be converted to BiDi.
   * @param internalIdMap - Map from CDP integer `weakLocalObjectReference` to BiDi UUID
   * `internalId`.
   */
  serializeForBiDi(deepSerializedValue, internalIdMap) {
    if (Object.hasOwn(deepSerializedValue, "weakLocalObjectReference")) {
      const weakLocalObjectReference = deepSerializedValue.weakLocalObjectReference;
      if (!internalIdMap.has(weakLocalObjectReference)) {
        internalIdMap.set(weakLocalObjectReference, (0, uuid_js_1$1.uuidv4)());
      }
      deepSerializedValue.internalId = internalIdMap.get(weakLocalObjectReference);
      delete deepSerializedValue["weakLocalObjectReference"];
    }
    if (deepSerializedValue.type === "platformobject") {
      return { type: "object" };
    }
    const bidiValue = deepSerializedValue.value;
    if (bidiValue === void 0) {
      return deepSerializedValue;
    }
    if (["array", "set", "htmlcollection", "nodelist"].includes(deepSerializedValue.type)) {
      for (const i in bidiValue) {
        bidiValue[i] = this.serializeForBiDi(bidiValue[i], internalIdMap);
      }
    }
    if (["object", "map"].includes(deepSerializedValue.type)) {
      for (const i in bidiValue) {
        bidiValue[i] = [
          this.serializeForBiDi(bidiValue[i][0], internalIdMap),
          this.serializeForBiDi(bidiValue[i][1], internalIdMap)
        ];
      }
    }
    return deepSerializedValue;
  }
  get realmId() {
    return __privateGet(this, _realmId);
  }
  get executionContextId() {
    return __privateGet(this, _executionContextId);
  }
  get origin() {
    return __privateGet(this, _origin);
  }
  get source() {
    return {
      realm: this.realmId
    };
  }
  get cdpClient() {
    return __privateGet(this, _cdpClient);
  }
  get baseInfo() {
    return {
      realm: this.realmId,
      origin: this.origin
    };
  }
  async evaluate(expression, awaitPromise, resultOwnership = "none", serializationOptions = {}, userActivation = false, includeCommandLineApi = false) {
    var _a4;
    const cdpEvaluateResult = await this.cdpClient.sendCommand("Runtime.evaluate", {
      contextId: this.executionContextId,
      expression,
      awaitPromise,
      serializationOptions: __privateMethod(_a4 = _e, _getSerializationOptions, getSerializationOptions_fn).call(_a4, "deep", serializationOptions),
      userGesture: userActivation,
      includeCommandLineAPI: includeCommandLineApi
    });
    if (cdpEvaluateResult.exceptionDetails) {
      return await __privateMethod(this, _getExceptionResult, getExceptionResult_fn).call(this, cdpEvaluateResult.exceptionDetails, 0, resultOwnership);
    }
    return {
      realm: this.realmId,
      result: this.cdpToBidiValue(cdpEvaluateResult, resultOwnership),
      type: "success"
    };
  }
  initialize() {
    __privateMethod(this, _registerEvent, registerEvent_fn).call(this, {
      type: "event",
      method: protocol_js_1$a.ChromiumBidi.Script.EventNames.RealmCreated,
      params: this.realmInfo
    });
  }
  /**
   * Serializes a given CDP object into BiDi, keeping references in the
   * target's `globalThis`.
   */
  async serializeCdpObject(cdpRemoteObject, resultOwnership) {
    var _a4;
    const argument = __privateMethod(_a4 = _e, _cdpRemoteObjectToCallArgument, cdpRemoteObjectToCallArgument_fn).call(_a4, cdpRemoteObject);
    const cdpValue = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
      functionDeclaration: String((remoteObject) => remoteObject),
      awaitPromise: false,
      arguments: [argument],
      serializationOptions: {
        serialization: "deep"
      },
      executionContextId: this.executionContextId
    });
    return this.cdpToBidiValue(cdpValue, resultOwnership);
  }
  /**
   * Gets the string representation of an object. This is equivalent to
   * calling `toString()` on the object value.
   */
  async stringifyObject(cdpRemoteObject) {
    const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
      functionDeclaration: String((remoteObject) => String(remoteObject)),
      awaitPromise: false,
      arguments: [cdpRemoteObject],
      returnByValue: true,
      executionContextId: this.executionContextId
    });
    return result.value;
  }
  async callFunction(functionDeclaration, awaitPromise, thisLocalValue = {
    type: "undefined"
  }, argumentsLocalValues = [], resultOwnership = "none", serializationOptions = {}, userActivation = false) {
    var _a4;
    const callFunctionAndSerializeScript = `(...args) => {
      function callFunction(f, args) {
        const deserializedThis = args.shift();
        const deserializedArgs = args;
        return f.apply(deserializedThis, deserializedArgs);
      }
      return callFunction((
        ${functionDeclaration}
      ), args);
    }`;
    const thisAndArgumentsList = [
      await this.deserializeForCdp(thisLocalValue),
      ...await Promise.all(argumentsLocalValues.map(async (argumentLocalValue) => await this.deserializeForCdp(argumentLocalValue)))
    ];
    let cdpCallFunctionResult;
    try {
      cdpCallFunctionResult = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: callFunctionAndSerializeScript,
        awaitPromise,
        arguments: thisAndArgumentsList,
        serializationOptions: __privateMethod(_a4 = _e, _getSerializationOptions, getSerializationOptions_fn).call(_a4, "deep", serializationOptions),
        executionContextId: this.executionContextId,
        userGesture: userActivation
      });
    } catch (error) {
      if (error.code === -32e3 && [
        "Could not find object with given id",
        "Argument should belong to the same JavaScript world as target object",
        "Invalid remote object id"
      ].includes(error.message)) {
        throw new protocol_js_1$a.NoSuchHandleException("Handle was not found.");
      }
      throw error;
    }
    if (cdpCallFunctionResult.exceptionDetails) {
      return await __privateMethod(this, _getExceptionResult, getExceptionResult_fn).call(this, cdpCallFunctionResult.exceptionDetails, 1, resultOwnership);
    }
    return {
      type: "success",
      result: this.cdpToBidiValue(cdpCallFunctionResult, resultOwnership),
      realm: this.realmId
    };
  }
  async deserializeForCdp(localValue) {
    if ("handle" in localValue && localValue.handle) {
      return { objectId: localValue.handle };
    } else if ("handle" in localValue || "sharedId" in localValue) {
      throw new protocol_js_1$a.NoSuchHandleException("Handle was not found.");
    }
    switch (localValue.type) {
      case "undefined":
        return { unserializableValue: "undefined" };
      case "null":
        return { unserializableValue: "null" };
      case "string":
        return { value: localValue.value };
      case "number":
        if (localValue.value === "NaN") {
          return { unserializableValue: "NaN" };
        } else if (localValue.value === "-0") {
          return { unserializableValue: "-0" };
        } else if (localValue.value === "Infinity") {
          return { unserializableValue: "Infinity" };
        } else if (localValue.value === "-Infinity") {
          return { unserializableValue: "-Infinity" };
        }
        return {
          value: localValue.value
        };
      case "boolean":
        return { value: Boolean(localValue.value) };
      case "bigint":
        return {
          unserializableValue: `BigInt(${JSON.stringify(localValue.value)})`
        };
      case "date":
        return {
          unserializableValue: `new Date(Date.parse(${JSON.stringify(localValue.value)}))`
        };
      case "regexp":
        return {
          unserializableValue: `new RegExp(${JSON.stringify(localValue.value.pattern)}, ${JSON.stringify(localValue.value.flags)})`
        };
      case "map": {
        const keyValueArray = await __privateMethod(this, _flattenKeyValuePairs, flattenKeyValuePairs_fn).call(this, localValue.value);
        const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((...args) => {
            const result2 = /* @__PURE__ */ new Map();
            for (let i = 0; i < args.length; i += 2) {
              result2.set(args[i], args[i + 1]);
            }
            return result2;
          }),
          awaitPromise: false,
          arguments: keyValueArray,
          returnByValue: false,
          executionContextId: this.executionContextId
        });
        return { objectId: result.objectId };
      }
      case "object": {
        const keyValueArray = await __privateMethod(this, _flattenKeyValuePairs, flattenKeyValuePairs_fn).call(this, localValue.value);
        const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((...args) => {
            const result2 = {};
            for (let i = 0; i < args.length; i += 2) {
              const key = args[i];
              result2[key] = args[i + 1];
            }
            return result2;
          }),
          awaitPromise: false,
          arguments: keyValueArray,
          returnByValue: false,
          executionContextId: this.executionContextId
        });
        return { objectId: result.objectId };
      }
      case "array": {
        const args = await __privateMethod(this, _flattenValueList, flattenValueList_fn).call(this, localValue.value);
        const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((...args2) => args2),
          awaitPromise: false,
          arguments: args,
          returnByValue: false,
          executionContextId: this.executionContextId
        });
        return { objectId: result.objectId };
      }
      case "set": {
        const args = await __privateMethod(this, _flattenValueList, flattenValueList_fn).call(this, localValue.value);
        const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((...args2) => new Set(args2)),
          awaitPromise: false,
          arguments: args,
          returnByValue: false,
          executionContextId: this.executionContextId
        });
        return { objectId: result.objectId };
      }
      case "channel": {
        const channelProxy = new ChannelProxy_js_1.ChannelProxy(localValue.value, __privateGet(this, _logger6));
        const channelProxySendMessageHandle = await channelProxy.init(this, __privateGet(this, _eventManager2));
        return { objectId: channelProxySendMessageHandle };
      }
    }
    throw new Error(`Value ${JSON.stringify(localValue)} is not deserializable.`);
  }
  async disown(handle) {
    if (__privateGet(this, _realmStorage4).knownHandlesToRealmMap.get(handle) !== this.realmId) {
      return;
    }
    await __privateMethod(this, _releaseObject, releaseObject_fn).call(this, handle);
    __privateGet(this, _realmStorage4).knownHandlesToRealmMap.delete(handle);
  }
  dispose() {
    __privateMethod(this, _registerEvent, registerEvent_fn).call(this, {
      type: "event",
      method: protocol_js_1$a.ChromiumBidi.Script.EventNames.RealmDestroyed,
      params: {
        realm: this.realmId
      }
    });
  }
}, _cdpClient = new WeakMap(), _eventManager2 = new WeakMap(), _executionContextId = new WeakMap(), _logger6 = new WeakMap(), _origin = new WeakMap(), _realmId = new WeakMap(), _realmStorage4 = new WeakMap(), _registerEvent = new WeakSet(), registerEvent_fn = function(event) {
  if (this.associatedBrowsingContexts.length === 0) {
    __privateGet(this, _eventManager2).registerEvent(event, null);
  } else {
    for (const browsingContext of this.associatedBrowsingContexts) {
      __privateGet(this, _eventManager2).registerEvent(event, browsingContext.id);
    }
  }
}, _cdpRemoteObjectToCallArgument = new WeakSet(), cdpRemoteObjectToCallArgument_fn = function(cdpRemoteObject) {
  if (cdpRemoteObject.objectId !== void 0) {
    return { objectId: cdpRemoteObject.objectId };
  }
  if (cdpRemoteObject.unserializableValue !== void 0) {
    return { unserializableValue: cdpRemoteObject.unserializableValue };
  }
  return { value: cdpRemoteObject.value };
}, _flattenKeyValuePairs = new WeakSet(), flattenKeyValuePairs_fn = async function(mappingLocalValue) {
  const keyValueArray = await Promise.all(mappingLocalValue.map(async ([key, value]) => {
    let keyArg;
    if (typeof key === "string") {
      keyArg = { value: key };
    } else {
      keyArg = await this.deserializeForCdp(key);
    }
    const valueArg = await this.deserializeForCdp(value);
    return [keyArg, valueArg];
  }));
  return keyValueArray.flat();
}, _flattenValueList = new WeakSet(), flattenValueList_fn = async function(listLocalValue) {
  return await Promise.all(listLocalValue.map((localValue) => this.deserializeForCdp(localValue)));
}, _serializeCdpExceptionDetails = new WeakSet(), serializeCdpExceptionDetails_fn = async function(cdpExceptionDetails, lineOffset, resultOwnership) {
  var _a4;
  const callFrames = ((_a4 = cdpExceptionDetails.stackTrace) == null ? void 0 : _a4.callFrames.map((frame) => ({
    url: frame.url,
    functionName: frame.functionName,
    lineNumber: frame.lineNumber - lineOffset,
    columnNumber: frame.columnNumber
  }))) ?? [];
  const exception = cdpExceptionDetails.exception;
  return {
    exception: await this.serializeCdpObject(exception, resultOwnership),
    columnNumber: cdpExceptionDetails.columnNumber,
    lineNumber: cdpExceptionDetails.lineNumber - lineOffset,
    stackTrace: {
      callFrames
    },
    text: await this.stringifyObject(exception) || cdpExceptionDetails.text
  };
}, _getExceptionResult = new WeakSet(), getExceptionResult_fn = async function(exceptionDetails, lineOffset, resultOwnership) {
  return {
    exceptionDetails: await __privateMethod(this, _serializeCdpExceptionDetails, serializeCdpExceptionDetails_fn).call(this, exceptionDetails, lineOffset, resultOwnership),
    realm: this.realmId,
    type: "exception"
  };
}, _getSerializationOptions = new WeakSet(), getSerializationOptions_fn = function(serialization, serializationOptions) {
  var _a4, _b3;
  return {
    serialization,
    additionalParameters: __privateMethod(_a4 = _e, _getAdditionalSerializationParameters, getAdditionalSerializationParameters_fn).call(_a4, serializationOptions),
    ...__privateMethod(_b3 = _e, _getMaxObjectDepth, getMaxObjectDepth_fn).call(_b3, serializationOptions)
  };
}, _getAdditionalSerializationParameters = new WeakSet(), getAdditionalSerializationParameters_fn = function(serializationOptions) {
  const additionalParameters = {};
  if (serializationOptions.maxDomDepth !== void 0) {
    additionalParameters["maxNodeDepth"] = serializationOptions.maxDomDepth === null ? 1e3 : serializationOptions.maxDomDepth;
  }
  if (serializationOptions.includeShadowTree !== void 0) {
    additionalParameters["includeShadowTree"] = serializationOptions.includeShadowTree;
  }
  return additionalParameters;
}, _getMaxObjectDepth = new WeakSet(), getMaxObjectDepth_fn = function(serializationOptions) {
  return serializationOptions.maxObjectDepth === void 0 || serializationOptions.maxObjectDepth === null ? {} : { maxDepth: serializationOptions.maxObjectDepth };
}, _releaseObject = new WeakSet(), releaseObject_fn = async function(handle) {
  try {
    await this.cdpClient.sendCommand("Runtime.releaseObject", {
      objectId: handle
    });
  } catch (error) {
    if (!(error.code === -32e3 && error.message === "Invalid remote object id")) {
      throw error;
    }
  }
}, __privateAdd(_e, _cdpRemoteObjectToCallArgument), __privateAdd(_e, _getSerializationOptions), __privateAdd(_e, _getAdditionalSerializationParameters), __privateAdd(_e, _getMaxObjectDepth), _e);
Realm$2.Realm = Realm$1;
var SharedId = {};
Object.defineProperty(SharedId, "__esModule", { value: true });
SharedId.parseSharedId = SharedId.getSharedId = void 0;
const SHARED_ID_DIVIDER = "_element_";
function getSharedId(frameId, documentId, backendNodeId) {
  return `f.${frameId}.d.${documentId}.e.${backendNodeId}`;
}
SharedId.getSharedId = getSharedId;
function parseLegacySharedId(sharedId) {
  const match = sharedId.match(new RegExp(`(.*)${SHARED_ID_DIVIDER}(.*)`));
  if (!match) {
    return null;
  }
  const documentId = match[1];
  const elementId = match[2];
  if (documentId === void 0 || elementId === void 0) {
    return null;
  }
  const backendNodeId = parseInt(elementId ?? "");
  if (isNaN(backendNodeId)) {
    return null;
  }
  return {
    documentId,
    backendNodeId
  };
}
function parseSharedId(sharedId) {
  const legacyFormattedSharedId = parseLegacySharedId(sharedId);
  if (legacyFormattedSharedId !== null) {
    return { ...legacyFormattedSharedId, frameId: void 0 };
  }
  const match = sharedId.match(/f\.(.*)\.d\.(.*)\.e\.([0-9]*)/);
  if (!match) {
    return null;
  }
  const frameId = match[1];
  const documentId = match[2];
  const elementId = match[3];
  if (frameId === void 0 || documentId === void 0 || elementId === void 0) {
    return null;
  }
  const backendNodeId = parseInt(elementId ?? "");
  if (isNaN(backendNodeId)) {
    return null;
  }
  return {
    frameId,
    documentId,
    backendNodeId
  };
}
SharedId.parseSharedId = parseSharedId;
Object.defineProperty(WindowRealm$2, "__esModule", { value: true });
WindowRealm$2.WindowRealm = void 0;
const protocol_js_1$9 = protocol;
const Realm_js_1$1 = Realm$2;
const SharedId_js_1 = SharedId;
let WindowRealm$1 = (_f = class extends Realm_js_1$1.Realm {
  constructor(browsingContextId, browsingContextStorage, cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage, sandbox) {
    super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
    __privateAdd(this, _getBrowsingContextId);
    __privateAdd(this, _browsingContextId, void 0);
    __privateAdd(this, _browsingContextStorage7, void 0);
    __publicField(this, "sandbox");
    __privateSet(this, _browsingContextId, browsingContextId);
    __privateSet(this, _browsingContextStorage7, browsingContextStorage);
    this.sandbox = sandbox;
    this.initialize();
  }
  get browsingContext() {
    return __privateGet(this, _browsingContextStorage7).getContext(__privateGet(this, _browsingContextId));
  }
  get associatedBrowsingContexts() {
    return [this.browsingContext];
  }
  get realmType() {
    return "window";
  }
  get realmInfo() {
    return {
      ...this.baseInfo,
      type: this.realmType,
      context: __privateGet(this, _browsingContextId),
      sandbox: this.sandbox
    };
  }
  get source() {
    return {
      realm: this.realmId,
      context: this.browsingContext.id
    };
  }
  serializeForBiDi(deepSerializedValue, internalIdMap) {
    const bidiValue = deepSerializedValue.value;
    if (deepSerializedValue.type === "node" && bidiValue !== void 0) {
      if (Object.hasOwn(bidiValue, "backendNodeId")) {
        let navigableId = this.browsingContext.navigableId ?? "UNKNOWN";
        if (Object.hasOwn(bidiValue, "loaderId")) {
          navigableId = bidiValue.loaderId;
          delete bidiValue["loaderId"];
        }
        deepSerializedValue.sharedId = (0, SharedId_js_1.getSharedId)(__privateMethod(this, _getBrowsingContextId, getBrowsingContextId_fn).call(this, navigableId), navigableId, bidiValue.backendNodeId);
        delete bidiValue["backendNodeId"];
      }
      if (Object.hasOwn(bidiValue, "children")) {
        for (const i in bidiValue.children) {
          bidiValue.children[i] = this.serializeForBiDi(bidiValue.children[i], internalIdMap);
        }
      }
      if (Object.hasOwn(bidiValue, "shadowRoot") && bidiValue.shadowRoot !== null) {
        bidiValue.shadowRoot = this.serializeForBiDi(bidiValue.shadowRoot, internalIdMap);
      }
      if (bidiValue.namespaceURI === "") {
        bidiValue.namespaceURI = null;
      }
    }
    return super.serializeForBiDi(deepSerializedValue, internalIdMap);
  }
  async deserializeForCdp(localValue) {
    if ("sharedId" in localValue && localValue.sharedId) {
      const parsedSharedId = (0, SharedId_js_1.parseSharedId)(localValue.sharedId);
      if (parsedSharedId === null) {
        throw new protocol_js_1$9.NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
      }
      const { documentId, backendNodeId } = parsedSharedId;
      if (this.browsingContext.navigableId !== documentId) {
        throw new protocol_js_1$9.NoSuchNodeException(`SharedId "${localValue.sharedId}" belongs to different document. Current document is ${this.browsingContext.navigableId}.`);
      }
      try {
        const { object } = await this.cdpClient.sendCommand("DOM.resolveNode", {
          backendNodeId,
          executionContextId: this.executionContextId
        });
        return { objectId: object.objectId };
      } catch (error) {
        if (error.code === -32e3 && error.message === "No node with given id found") {
          throw new protocol_js_1$9.NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
        }
        throw new protocol_js_1$9.UnknownErrorException(error.message, error.stack);
      }
    }
    return await super.deserializeForCdp(localValue);
  }
  async evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi) {
    await __privateGet(this, _browsingContextStorage7).getContext(__privateGet(this, _browsingContextId)).targetUnblockedOrThrow();
    return await super.evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi);
  }
  async callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation) {
    await __privateGet(this, _browsingContextStorage7).getContext(__privateGet(this, _browsingContextId)).targetUnblockedOrThrow();
    return await super.callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation);
  }
}, _browsingContextId = new WeakMap(), _browsingContextStorage7 = new WeakMap(), _getBrowsingContextId = new WeakSet(), getBrowsingContextId_fn = function(navigableId) {
  const maybeBrowsingContext = __privateGet(this, _browsingContextStorage7).getAllContexts().find((context) => context.navigableId === navigableId);
  return (maybeBrowsingContext == null ? void 0 : maybeBrowsingContext.id) ?? "UNKNOWN";
}, _f);
WindowRealm$2.WindowRealm = WindowRealm$1;
Object.defineProperty(BrowsingContextImpl$1, "__esModule", { value: true });
BrowsingContextImpl$1.serializeOrigin = BrowsingContextImpl$1.BrowsingContextImpl = void 0;
const protocol_js_1$8 = protocol;
const assert_js_1$2 = assert$1;
const Deferred_js_1$2 = Deferred$1;
const log_js_1$4 = log;
const unitConversions_js_1 = unitConversions;
const WindowRealm_js_1$1 = WindowRealm$2;
const _BrowsingContextImpl = class _BrowsingContextImpl {
  constructor(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, logger) {
    __privateAdd(this, _deleteAllChildren);
    __privateAdd(this, _defaultRealm);
    __privateAdd(this, _initListeners);
    __privateAdd(this, _documentChanged);
    __privateAdd(this, _resetLifecycleIfFinished);
    __privateAdd(this, _failLifecycleIfNotFinished);
    /**
     * See
     * https://w3c.github.io/webdriver-bidi/#:~:text=If%20command%20parameters%20contains%20%22clip%22%3A
     */
    __privateAdd(this, _parseRect);
    __privateAdd(this, _getLocatorDelegate);
    __privateAdd(this, _locateNodesByLocator);
    /** The ID of this browsing context. */
    __privateAdd(this, _id3, void 0);
    __publicField(this, "userContext");
    /**
     * The ID of the parent browsing context.
     * If null, this is a top-level context.
     */
    __privateAdd(this, _parentId, void 0);
    /** Direct children browsing contexts. */
    __privateAdd(this, _children, /* @__PURE__ */ new Set());
    __privateAdd(this, _browsingContextStorage8, void 0);
    __privateAdd(this, _lifecycle, {
      DOMContentLoaded: new Deferred_js_1$2.Deferred(),
      load: new Deferred_js_1$2.Deferred()
    });
    __privateAdd(this, _navigation, {
      withinDocument: new Deferred_js_1$2.Deferred()
    });
    __privateAdd(this, _url, "about:blank");
    __privateAdd(this, _eventManager3, void 0);
    __privateAdd(this, _realmStorage5, void 0);
    __privateAdd(this, _loaderId, void 0);
    __privateAdd(this, _cdpTarget, void 0);
    __privateAdd(this, _maybeDefaultRealm, void 0);
    __privateAdd(this, _logger7, void 0);
    // Keeps track of the previously set viewport.
    __privateAdd(this, _previousViewport, { width: 0, height: 0 });
    __privateSet(this, _cdpTarget, cdpTarget);
    __privateSet(this, _id3, id);
    __privateSet(this, _parentId, parentId);
    this.userContext = userContext;
    __privateSet(this, _eventManager3, eventManager);
    __privateSet(this, _browsingContextStorage8, browsingContextStorage);
    __privateSet(this, _realmStorage5, realmStorage);
    __privateSet(this, _logger7, logger);
  }
  static create(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, logger) {
    var _a4;
    const context = new _BrowsingContextImpl(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, logger);
    __privateMethod(_a4 = context, _initListeners, initListeners_fn).call(_a4);
    browsingContextStorage.addContext(context);
    if (!context.isTopLevelContext()) {
      context.parent.addChild(context.id);
    }
    eventManager.registerEvent({
      type: "event",
      method: protocol_js_1$8.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
      params: context.serializeToBidiValue()
    }, context.id);
    return context;
  }
  static getTimestamp() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  /**
   * @see https://html.spec.whatwg.org/multipage/document-sequences.html#navigable
   */
  get navigableId() {
    return __privateGet(this, _loaderId);
  }
  dispose() {
    __privateMethod(this, _deleteAllChildren, deleteAllChildren_fn).call(this);
    __privateGet(this, _realmStorage5).deleteRealms({
      browsingContextId: this.id
    });
    if (!this.isTopLevelContext()) {
      __privateGet(this.parent, _children).delete(this.id);
    }
    __privateMethod(this, _failLifecycleIfNotFinished, failLifecycleIfNotFinished_fn).call(this);
    __privateGet(this, _eventManager3).registerEvent({
      type: "event",
      method: protocol_js_1$8.ChromiumBidi.BrowsingContext.EventNames.ContextDestroyed,
      params: this.serializeToBidiValue()
    }, this.id);
    __privateGet(this, _browsingContextStorage8).deleteContextById(this.id);
  }
  /** Returns the ID of this context. */
  get id() {
    return __privateGet(this, _id3);
  }
  /** Returns the parent context ID. */
  get parentId() {
    return __privateGet(this, _parentId);
  }
  /** Returns the parent context. */
  get parent() {
    if (this.parentId === null) {
      return null;
    }
    return __privateGet(this, _browsingContextStorage8).getContext(this.parentId);
  }
  /** Returns all direct children contexts. */
  get directChildren() {
    return [...__privateGet(this, _children)].map((id) => __privateGet(this, _browsingContextStorage8).getContext(id));
  }
  /** Returns all children contexts, flattened. */
  get allChildren() {
    const children = this.directChildren;
    return children.concat(...children.map((child) => child.allChildren));
  }
  /**
   * Returns true if this is a top-level context.
   * This is the case whenever the parent context ID is null.
   */
  isTopLevelContext() {
    return __privateGet(this, _parentId) === null;
  }
  get top() {
    let topContext = this;
    let parent = topContext.parent;
    while (parent) {
      topContext = parent;
      parent = topContext.parent;
    }
    return topContext;
  }
  addChild(childId) {
    __privateGet(this, _children).add(childId);
  }
  get cdpTarget() {
    return __privateGet(this, _cdpTarget);
  }
  updateCdpTarget(cdpTarget) {
    __privateSet(this, _cdpTarget, cdpTarget);
    __privateMethod(this, _initListeners, initListeners_fn).call(this);
  }
  get url() {
    return __privateGet(this, _url);
  }
  async lifecycleLoaded() {
    await __privateGet(this, _lifecycle).load;
  }
  async targetUnblockedOrThrow() {
    const result = await __privateGet(this, _cdpTarget).unblocked;
    if (result.kind === "error") {
      throw result.error;
    }
  }
  async getOrCreateSandbox(sandbox) {
    if (sandbox === void 0 || sandbox === "") {
      return __privateGet(this, _defaultRealm, defaultRealm_get);
    }
    let maybeSandboxes = __privateGet(this, _realmStorage5).findRealms({
      browsingContextId: this.id,
      sandbox
    });
    if (maybeSandboxes.length === 0) {
      await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.createIsolatedWorld", {
        frameId: this.id,
        worldName: sandbox
      });
      maybeSandboxes = __privateGet(this, _realmStorage5).findRealms({
        browsingContextId: this.id,
        sandbox
      });
      (0, assert_js_1$2.assert)(maybeSandboxes.length !== 0);
    }
    return maybeSandboxes[0];
  }
  serializeToBidiValue(maxDepth = 0, addParentField = true) {
    return {
      context: __privateGet(this, _id3),
      url: this.url,
      userContext: this.userContext,
      children: maxDepth > 0 ? this.directChildren.map((c) => c.serializeToBidiValue(maxDepth - 1, false)) : null,
      ...addParentField ? { parent: __privateGet(this, _parentId) } : {}
    };
  }
  onTargetInfoChanged(params) {
    __privateSet(this, _url, params.targetInfo.url);
  }
  async navigate(url, wait) {
    try {
      new URL(url);
    } catch {
      throw new protocol_js_1$8.InvalidArgumentException(`Invalid URL: ${url}`);
    }
    await this.targetUnblockedOrThrow();
    const cdpNavigateResult = await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.navigate", {
      url,
      frameId: this.id
    });
    if (cdpNavigateResult.errorText) {
      __privateGet(this, _eventManager3).registerEvent({
        type: "event",
        method: protocol_js_1$8.ChromiumBidi.BrowsingContext.EventNames.NavigationFailed,
        params: {
          context: this.id,
          navigation: cdpNavigateResult.loaderId ?? null,
          timestamp: _BrowsingContextImpl.getTimestamp(),
          url
        }
      }, this.id);
      throw new protocol_js_1$8.UnknownErrorException(cdpNavigateResult.errorText);
    }
    __privateMethod(this, _documentChanged, documentChanged_fn).call(this, cdpNavigateResult.loaderId);
    switch (wait) {
      case "none":
        break;
      case "interactive":
        if (cdpNavigateResult.loaderId === void 0) {
          await __privateGet(this, _navigation).withinDocument;
        } else {
          await __privateGet(this, _lifecycle).DOMContentLoaded;
        }
        break;
      case "complete":
        if (cdpNavigateResult.loaderId === void 0) {
          await __privateGet(this, _navigation).withinDocument;
        } else {
          await __privateGet(this, _lifecycle).load;
        }
        break;
    }
    return {
      navigation: cdpNavigateResult.loaderId ?? null,
      // Url can change due to redirect get the latest one.
      url: wait === "none" ? url : __privateGet(this, _url)
    };
  }
  async reload(ignoreCache, wait) {
    await this.targetUnblockedOrThrow();
    __privateMethod(this, _resetLifecycleIfFinished, resetLifecycleIfFinished_fn).call(this);
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.reload", {
      ignoreCache
    });
    switch (wait) {
      case "none":
        break;
      case "interactive":
        await __privateGet(this, _lifecycle).DOMContentLoaded;
        break;
      case "complete":
        await __privateGet(this, _lifecycle).load;
        break;
    }
    return {
      navigation: wait === "none" ? null : this.navigableId ?? null,
      url: this.url
    };
  }
  async setViewport(viewport, devicePixelRatio) {
    if (viewport === null && devicePixelRatio === null) {
      await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Emulation.clearDeviceMetricsOverride");
    } else {
      try {
        let appliedViewport;
        if (viewport === void 0) {
          appliedViewport = __privateGet(this, _previousViewport);
        } else if (viewport === null) {
          appliedViewport = {
            width: 0,
            height: 0
          };
        } else {
          appliedViewport = viewport;
        }
        __privateSet(this, _previousViewport, appliedViewport);
        await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Emulation.setDeviceMetricsOverride", {
          width: __privateGet(this, _previousViewport).width,
          height: __privateGet(this, _previousViewport).height,
          deviceScaleFactor: devicePixelRatio ? devicePixelRatio : 0,
          mobile: false,
          dontSetVisibleSize: true
        });
      } catch (err) {
        if (err.message.startsWith(
          // https://crsrc.org/c/content/browser/devtools/protocol/emulation_handler.cc;l=257;drc=2f6eee84cf98d4227e7c41718dd71b82f26d90ff
          "Width and height values must be positive"
        )) {
          throw new protocol_js_1$8.UnsupportedOperationException("Provided viewport dimensions are not supported");
        }
        throw err;
      }
    }
  }
  async handleUserPrompt(params) {
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.handleJavaScriptDialog", {
      accept: params.accept ?? true,
      promptText: params.userText
    });
  }
  async activate() {
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.bringToFront");
  }
  async captureScreenshot(params) {
    if (!this.isTopLevelContext()) {
      throw new protocol_js_1$8.UnsupportedOperationException(`Non-top-level 'context' (${params.context}) is currently not supported`);
    }
    const formatParameters = getImageFormatParameters(params);
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.bringToFront");
    let captureBeyondViewport = false;
    let script;
    params.origin ?? (params.origin = "viewport");
    switch (params.origin) {
      case "document": {
        script = String(() => {
          const element = document.documentElement;
          return {
            x: 0,
            y: 0,
            width: element.scrollWidth,
            height: element.scrollHeight
          };
        });
        captureBeyondViewport = true;
        break;
      }
      case "viewport": {
        script = String(() => {
          const viewport = window.visualViewport;
          return {
            x: viewport.pageLeft,
            y: viewport.pageTop,
            width: viewport.width,
            height: viewport.height
          };
        });
        break;
      }
    }
    const realm = await this.getOrCreateSandbox(void 0);
    const originResult = await realm.callFunction(script, false);
    (0, assert_js_1$2.assert)(originResult.type === "success");
    const origin = deserializeDOMRect(originResult.result);
    (0, assert_js_1$2.assert)(origin);
    const rect = params.clip ? getIntersectionRect(await __privateMethod(this, _parseRect, parseRect_fn).call(this, params.clip), origin) : origin;
    if (rect.width === 0 || rect.height === 0) {
      throw new protocol_js_1$8.UnableToCaptureScreenException(`Unable to capture screenshot with zero dimensions: width=${rect.width}, height=${rect.height}`);
    }
    return await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.captureScreenshot", {
      clip: { ...rect, scale: 1 },
      ...formatParameters,
      captureBeyondViewport
    });
  }
  async print(params) {
    var _a4, _b3, _c3, _d3, _e4, _f3;
    const cdpParams = {};
    if (params.background !== void 0) {
      cdpParams.printBackground = params.background;
    }
    if (((_a4 = params.margin) == null ? void 0 : _a4.bottom) !== void 0) {
      cdpParams.marginBottom = (0, unitConversions_js_1.inchesFromCm)(params.margin.bottom);
    }
    if (((_b3 = params.margin) == null ? void 0 : _b3.left) !== void 0) {
      cdpParams.marginLeft = (0, unitConversions_js_1.inchesFromCm)(params.margin.left);
    }
    if (((_c3 = params.margin) == null ? void 0 : _c3.right) !== void 0) {
      cdpParams.marginRight = (0, unitConversions_js_1.inchesFromCm)(params.margin.right);
    }
    if (((_d3 = params.margin) == null ? void 0 : _d3.top) !== void 0) {
      cdpParams.marginTop = (0, unitConversions_js_1.inchesFromCm)(params.margin.top);
    }
    if (params.orientation !== void 0) {
      cdpParams.landscape = params.orientation === "landscape";
    }
    if (((_e4 = params.page) == null ? void 0 : _e4.height) !== void 0) {
      cdpParams.paperHeight = (0, unitConversions_js_1.inchesFromCm)(params.page.height);
    }
    if (((_f3 = params.page) == null ? void 0 : _f3.width) !== void 0) {
      cdpParams.paperWidth = (0, unitConversions_js_1.inchesFromCm)(params.page.width);
    }
    if (params.pageRanges !== void 0) {
      for (const range of params.pageRanges) {
        if (typeof range === "number") {
          continue;
        }
        const rangeParts = range.split("-");
        if (rangeParts.length < 1 || rangeParts.length > 2) {
          throw new protocol_js_1$8.InvalidArgumentException(`Invalid page range: ${range} is not a valid integer range.`);
        }
        if (rangeParts.length === 1) {
          void parseInteger(rangeParts[0] ?? "");
          continue;
        }
        let lowerBound;
        let upperBound;
        const [rangeLowerPart = "", rangeUpperPart = ""] = rangeParts;
        if (rangeLowerPart === "") {
          lowerBound = 1;
        } else {
          lowerBound = parseInteger(rangeLowerPart);
        }
        if (rangeUpperPart === "") {
          upperBound = Number.MAX_SAFE_INTEGER;
        } else {
          upperBound = parseInteger(rangeUpperPart);
        }
        if (lowerBound > upperBound) {
          throw new protocol_js_1$8.InvalidArgumentException(`Invalid page range: ${rangeLowerPart} > ${rangeUpperPart}`);
        }
      }
      cdpParams.pageRanges = params.pageRanges.join(",");
    }
    if (params.scale !== void 0) {
      cdpParams.scale = params.scale;
    }
    if (params.shrinkToFit !== void 0) {
      cdpParams.preferCSSPageSize = !params.shrinkToFit;
    }
    try {
      const result = await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.printToPDF", cdpParams);
      return {
        data: result.data
      };
    } catch (error) {
      if (error.message === "invalid print parameters: content area is empty") {
        throw new protocol_js_1$8.UnsupportedOperationException(error.message);
      }
      throw error;
    }
  }
  async close() {
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.close");
  }
  async traverseHistory(delta) {
    if (delta === 0) {
      return;
    }
    const history = await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.getNavigationHistory");
    const entry = history.entries[history.currentIndex + delta];
    if (!entry) {
      throw new protocol_js_1$8.NoSuchHistoryEntryException(`No history entry at delta ${delta}`);
    }
    await __privateGet(this, _cdpTarget).cdpClient.sendCommand("Page.navigateToHistoryEntry", {
      entryId: entry.id
    });
  }
  async toggleModulesIfNeeded() {
    await __privateGet(this, _cdpTarget).toggleNetworkIfNeeded();
  }
  async locateNodes(params) {
    return await __privateMethod(this, _locateNodesByLocator, locateNodesByLocator_fn).call(this, __privateGet(this, _defaultRealm, defaultRealm_get), params.locator, params.startNodes ?? [], params.maxNodeCount, params.serializationOptions);
  }
};
_id3 = new WeakMap();
_parentId = new WeakMap();
_children = new WeakMap();
_browsingContextStorage8 = new WeakMap();
_lifecycle = new WeakMap();
_navigation = new WeakMap();
_url = new WeakMap();
_eventManager3 = new WeakMap();
_realmStorage5 = new WeakMap();
_loaderId = new WeakMap();
_cdpTarget = new WeakMap();
_maybeDefaultRealm = new WeakMap();
_logger7 = new WeakMap();
_previousViewport = new WeakMap();
_deleteAllChildren = new WeakSet();
deleteAllChildren_fn = function() {
  this.directChildren.map((child) => child.dispose());
};
_defaultRealm = new WeakSet();
defaultRealm_get = function() {
  (0, assert_js_1$2.assert)(__privateGet(this, _maybeDefaultRealm), `No default realm for browsing context ${__privateGet(this, _id3)}`);
  return __privateGet(this, _maybeDefaultRealm);
};
_initListeners = new WeakSet();
initListeners_fn = function() {
  __privateGet(this, _cdpTarget).cdpClient.on("Page.frameNavigated", (params) => {
    if (this.id !== params.frame.id) {
      return;
    }
    __privateSet(this, _url, params.frame.url + (params.frame.urlFragment ?? ""));
    __privateMethod(this, _deleteAllChildren, deleteAllChildren_fn).call(this);
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Page.navigatedWithinDocument", (params) => {
    if (this.id !== params.frameId) {
      return;
    }
    const timestamp = _BrowsingContextImpl.getTimestamp();
    __privateSet(this, _url, params.url);
    __privateGet(this, _navigation).withinDocument.resolve();
    __privateGet(this, _eventManager3).registerEvent({
      type: "event",
      method: protocol_js_1$8.ChromiumBidi.BrowsingContext.EventNames.FragmentNavigated,
      params: {
        context: this.id,
        navigation: null,
        timestamp,
        url: __privateGet(this, _url)
      }
    }, this.id);
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Page.frameStartedLoading", (params) => {
    if (this.id !== params.frameId) {
      return;
    }
    __privateGet(this, _eventManager3).registerEvent({
      type: "event",
      method: protocol_js_1$8.ChromiumBidi.BrowsingContext.EventNames.NavigationStarted,
      params: {
        context: this.id,
        navigation: null,
        timestamp: _BrowsingContextImpl.getTimestamp(),
        url: ""
      }
    }, this.id);
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Page.lifecycleEvent", (params) => {
    if (this.id !== params.frameId) {
      return;
    }
    if (params.name === "init") {
      __privateMethod(this, _documentChanged, documentChanged_fn).call(this, params.loaderId);
      return;
    }
    if (params.name === "commit") {
      __privateSet(this, _loaderId, params.loaderId);
      return;
    }
    if (!__privateGet(this, _loaderId)) {
      __privateSet(this, _loaderId, params.loaderId);
    }
    if (params.loaderId !== __privateGet(this, _loaderId)) {
      return;
    }
    const timestamp = _BrowsingContextImpl.getTimestamp();
    switch (params.name) {
      case "DOMContentLoaded":
        __privateGet(this, _eventManager3).registerEvent({
          type: "event",
          method: protocol_js_1$8.ChromiumBidi.BrowsingContext.EventNames.DomContentLoaded,
          params: {
            context: this.id,
            navigation: __privateGet(this, _loaderId) ?? null,
            timestamp,
            url: __privateGet(this, _url)
          }
        }, this.id);
        __privateGet(this, _lifecycle).DOMContentLoaded.resolve();
        break;
      case "load":
        __privateGet(this, _eventManager3).registerEvent({
          type: "event",
          method: protocol_js_1$8.ChromiumBidi.BrowsingContext.EventNames.Load,
          params: {
            context: this.id,
            navigation: __privateGet(this, _loaderId) ?? null,
            timestamp,
            url: __privateGet(this, _url)
          }
        }, this.id);
        __privateGet(this, _lifecycle).load.resolve();
        break;
    }
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Runtime.executionContextCreated", (params) => {
    const { auxData, name, uniqueId, id } = params.context;
    if (!auxData || auxData.frameId !== this.id) {
      return;
    }
    let origin;
    let sandbox;
    switch (auxData.type) {
      case "isolated":
        sandbox = name;
        origin = __privateGet(this, _defaultRealm, defaultRealm_get).origin;
        break;
      case "default":
        origin = serializeOrigin(params.context.origin);
        break;
      default:
        return;
    }
    const realm = new WindowRealm_js_1$1.WindowRealm(this.id, __privateGet(this, _browsingContextStorage8), __privateGet(this, _cdpTarget).cdpClient, __privateGet(this, _eventManager3), id, __privateGet(this, _logger7), origin, uniqueId, __privateGet(this, _realmStorage5), sandbox);
    if (auxData.isDefault) {
      __privateSet(this, _maybeDefaultRealm, realm);
      void Promise.all(__privateGet(this, _cdpTarget).getChannels().map((channel) => channel.startListenerFromWindow(realm, __privateGet(this, _eventManager3))));
    }
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Runtime.executionContextDestroyed", (params) => {
    __privateGet(this, _realmStorage5).deleteRealms({
      cdpSessionId: __privateGet(this, _cdpTarget).cdpSessionId,
      executionContextId: params.executionContextId
    });
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Runtime.executionContextsCleared", () => {
    __privateGet(this, _realmStorage5).deleteRealms({
      cdpSessionId: __privateGet(this, _cdpTarget).cdpSessionId
    });
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Page.javascriptDialogClosed", (params) => {
    const accepted = params.result;
    __privateGet(this, _eventManager3).registerEvent({
      type: "event",
      method: protocol_js_1$8.ChromiumBidi.BrowsingContext.EventNames.UserPromptClosed,
      params: {
        context: this.id,
        accepted,
        userText: accepted && params.userInput ? params.userInput : void 0
      }
    }, this.id);
  });
  __privateGet(this, _cdpTarget).cdpClient.on("Page.javascriptDialogOpening", (params) => {
    __privateGet(this, _eventManager3).registerEvent({
      type: "event",
      method: protocol_js_1$8.ChromiumBidi.BrowsingContext.EventNames.UserPromptOpened,
      params: {
        context: this.id,
        type: params.type,
        message: params.message,
        // Don't set the value if empty string
        defaultValue: params.defaultPrompt || void 0
      }
    }, this.id);
  });
};
_documentChanged = new WeakSet();
documentChanged_fn = function(loaderId) {
  var _a4;
  if (loaderId === void 0 || __privateGet(this, _loaderId) === loaderId) {
    if (__privateGet(this, _navigation).withinDocument.isFinished) {
      __privateGet(this, _navigation).withinDocument = new Deferred_js_1$2.Deferred();
    } else {
      (_a4 = __privateGet(this, _logger7)) == null ? void 0 : _a4.call(this, _BrowsingContextImpl.LOGGER_PREFIX, "Document changed (navigatedWithinDocument)");
    }
    return;
  }
  __privateMethod(this, _resetLifecycleIfFinished, resetLifecycleIfFinished_fn).call(this);
  __privateSet(this, _loaderId, loaderId);
};
_resetLifecycleIfFinished = new WeakSet();
resetLifecycleIfFinished_fn = function() {
  var _a4, _b3;
  if (__privateGet(this, _lifecycle).DOMContentLoaded.isFinished) {
    __privateGet(this, _lifecycle).DOMContentLoaded = new Deferred_js_1$2.Deferred();
  } else {
    (_a4 = __privateGet(this, _logger7)) == null ? void 0 : _a4.call(this, _BrowsingContextImpl.LOGGER_PREFIX, "Document changed (DOMContentLoaded)");
  }
  if (__privateGet(this, _lifecycle).load.isFinished) {
    __privateGet(this, _lifecycle).load = new Deferred_js_1$2.Deferred();
  } else {
    (_b3 = __privateGet(this, _logger7)) == null ? void 0 : _b3.call(this, _BrowsingContextImpl.LOGGER_PREFIX, "Document changed (load)");
  }
};
_failLifecycleIfNotFinished = new WeakSet();
failLifecycleIfNotFinished_fn = function() {
  if (!__privateGet(this, _lifecycle).DOMContentLoaded.isFinished) {
    __privateGet(this, _lifecycle).DOMContentLoaded.reject(new protocol_js_1$8.UnknownErrorException("navigation canceled"));
  }
  if (!__privateGet(this, _lifecycle).load.isFinished) {
    __privateGet(this, _lifecycle).load.reject(new protocol_js_1$8.UnknownErrorException("navigation canceled"));
  }
};
_parseRect = new WeakSet();
parseRect_fn = async function(clip) {
  switch (clip.type) {
    case "box":
      return { x: clip.x, y: clip.y, width: clip.width, height: clip.height };
    case "element": {
      const sandbox = await this.getOrCreateSandbox(void 0);
      const result = await sandbox.callFunction(String((element) => {
        return element instanceof Element;
      }), false, { type: "undefined" }, [clip.element]);
      if (result.type === "exception") {
        throw new protocol_js_1$8.NoSuchElementException(`Element '${clip.element.sharedId}' was not found`);
      }
      (0, assert_js_1$2.assert)(result.result.type === "boolean");
      if (!result.result.value) {
        throw new protocol_js_1$8.NoSuchElementException(`Node '${clip.element.sharedId}' is not an Element`);
      }
      {
        const result2 = await sandbox.callFunction(String((element) => {
          const rect2 = element.getBoundingClientRect();
          return {
            x: rect2.x,
            y: rect2.y,
            height: rect2.height,
            width: rect2.width
          };
        }), false, { type: "undefined" }, [clip.element]);
        (0, assert_js_1$2.assert)(result2.type === "success");
        const rect = deserializeDOMRect(result2.result);
        if (!rect) {
          throw new protocol_js_1$8.UnableToCaptureScreenException(`Could not get bounding box for Element '${clip.element.sharedId}'`);
        }
        return rect;
      }
    }
  }
};
_getLocatorDelegate = new WeakSet();
getLocatorDelegate_fn = async function(realm, locator, maxNodeCount, startNodes) {
  switch (locator.type) {
    case "css":
      return {
        functionDeclaration: String((cssSelector, maxNodeCount2, ...startNodes2) => {
          const locateNodesUsingCss = (element) => {
            if (!(element instanceof HTMLElement)) {
              throw new Error("startNodes in css selector should be HTMLElement");
            }
            return [...element.querySelectorAll(cssSelector)];
          };
          startNodes2 = startNodes2.length > 0 ? startNodes2 : [document.body];
          const returnedNodes = startNodes2.map((startNode) => (
            // TODO: stop search early if `maxNodeCount` is reached.
            locateNodesUsingCss(startNode)
          )).flat(1);
          return maxNodeCount2 === 0 ? returnedNodes : returnedNodes.slice(0, maxNodeCount2);
        }),
        argumentsLocalValues: [
          // `cssSelector`
          { type: "string", value: locator.value },
          // `maxNodeCount` with `0` means no limit.
          { type: "number", value: maxNodeCount ?? 0 },
          // `startNodes`
          ...startNodes
        ]
      };
    case "xpath":
      return {
        functionDeclaration: String((xPathSelector, maxNodeCount2, ...startNodes2) => {
          const evaluator = new XPathEvaluator();
          const expression = evaluator.createExpression(xPathSelector);
          const locateNodesUsingXpath = (element) => {
            const xPathResult = expression.evaluate(element, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
            const returnedNodes2 = [];
            for (let i = 0; i < xPathResult.snapshotLength; i++) {
              returnedNodes2.push(xPathResult.snapshotItem(i));
            }
            return returnedNodes2;
          };
          startNodes2 = startNodes2.length > 0 ? startNodes2 : [document.body];
          const returnedNodes = startNodes2.map((startNode) => (
            // TODO: stop search early if `maxNodeCount` is reached.
            locateNodesUsingXpath(startNode)
          )).flat(1);
          return maxNodeCount2 === 0 ? returnedNodes : returnedNodes.slice(0, maxNodeCount2);
        }),
        argumentsLocalValues: [
          // `xPathSelector`
          { type: "string", value: locator.value },
          // `maxNodeCount` with `0` means no limit.
          { type: "number", value: maxNodeCount ?? 0 },
          // `startNodes`
          ...startNodes
        ]
      };
    case "innerText":
      if (locator.value === "") {
        throw new protocol_js_1$8.InvalidSelectorException("innerText locator cannot be empty");
      }
      return {
        functionDeclaration: String((innerTextSelector, fullMatch, ignoreCase, maxNodeCount2, maxDepth, ...startNodes2) => {
          const searchText = ignoreCase ? innerTextSelector.toUpperCase() : innerTextSelector;
          const locateNodesUsingInnerText = (element, currentMaxDepth) => {
            var _a4;
            const returnedNodes2 = [];
            const nodeInnerText = ignoreCase ? (_a4 = element.innerText) == null ? void 0 : _a4.toUpperCase() : element.innerText;
            if (!nodeInnerText.includes(searchText)) {
              return [];
            }
            const childNodes = [];
            for (const child of element.children) {
              if (child instanceof HTMLElement) {
                childNodes.push(child);
              }
            }
            if (childNodes.length === 0) {
              if (fullMatch && nodeInnerText === searchText) {
                returnedNodes2.push(element);
              } else {
                if (!fullMatch) {
                  returnedNodes2.push(element);
                }
              }
            } else {
              const childNodeMatches = (
                // Don't search deeper if `maxDepth` is reached.
                currentMaxDepth === 0 ? [] : childNodes.map((child) => locateNodesUsingInnerText(child, currentMaxDepth - 1)).flat(1)
              );
              if (childNodeMatches.length === 0) {
                if (!fullMatch || nodeInnerText === searchText) {
                  returnedNodes2.push(element);
                }
              } else {
                returnedNodes2.push(...childNodeMatches);
              }
            }
            return returnedNodes2;
          };
          startNodes2 = startNodes2.length > 0 ? startNodes2 : [document.body];
          const returnedNodes = startNodes2.map((startNode) => (
            // TODO: stop search early if `maxNodeCount` is reached.
            locateNodesUsingInnerText(startNode, maxDepth)
          )).flat(1);
          return maxNodeCount2 === 0 ? returnedNodes : returnedNodes.slice(0, maxNodeCount2);
        }),
        argumentsLocalValues: [
          // `innerTextSelector`
          { type: "string", value: locator.value },
          // `fullMatch` with default `true`.
          { type: "boolean", value: locator.matchType !== "partial" },
          // `ignoreCase` with default `false`.
          { type: "boolean", value: locator.ignoreCase === true },
          // `maxNodeCount` with `0` means no limit.
          { type: "number", value: maxNodeCount ?? 0 },
          // `maxDepth` with default `1000` (same as default full serialization depth).
          { type: "number", value: locator.maxDepth ?? 1e3 },
          // `startNodes`
          ...startNodes
        ]
      };
    case "accessibility": {
      if (!locator.value.name && !locator.value.role) {
        throw new protocol_js_1$8.InvalidSelectorException("Either name or role has to be specified");
      }
      await Promise.all([
        __privateGet(this, _cdpTarget).cdpClient.sendCommand("Accessibility.enable"),
        __privateGet(this, _cdpTarget).cdpClient.sendCommand("Accessibility.getRootAXNode")
      ]);
      const bindings = await realm.evaluate(
        /* expression=*/
        "({getAccessibleName, getAccessibleRole})",
        /* awaitPromise=*/
        false,
        "root",
        /* serializationOptions= */
        void 0,
        /* userActivation=*/
        false,
        /* includeCommandLineApi=*/
        true
      );
      if (bindings.type !== "success") {
        throw new Error("Could not get bindings");
      }
      if (bindings.result.type !== "object") {
        throw new Error("Could not get bindings");
      }
      return {
        functionDeclaration: String((name, role, bindings2, maxNodeCount2, ...startNodes2) => {
          const returnedNodes = [];
          let aborted = false;
          function collect(contextNodes, selector) {
            if (aborted) {
              return;
            }
            for (const contextNode of contextNodes) {
              let match = true;
              if (selector.role) {
                const role2 = bindings2.getAccessibleRole(contextNode);
                if (selector.role !== role2) {
                  match = false;
                }
              }
              if (selector.name) {
                const name2 = bindings2.getAccessibleName(contextNode);
                if (selector.name !== name2) {
                  match = false;
                }
              }
              if (match) {
                if (maxNodeCount2 !== 0 && returnedNodes.length === maxNodeCount2) {
                  aborted = true;
                  break;
                }
                returnedNodes.push(contextNode);
              }
              const childNodes = [];
              for (const child of contextNode.children) {
                if (child instanceof HTMLElement) {
                  childNodes.push(child);
                }
              }
              collect(childNodes, selector);
            }
          }
          startNodes2 = startNodes2.length > 0 ? startNodes2 : [document.body];
          collect(startNodes2, {
            role,
            name
          });
          return returnedNodes;
        }),
        argumentsLocalValues: [
          // `name`
          { type: "string", value: locator.value.name || "" },
          // `role`
          { type: "string", value: locator.value.role || "" },
          // `bindings`.
          { handle: bindings.result.handle },
          // `maxNodeCount` with `0` means no limit.
          { type: "number", value: maxNodeCount ?? 0 },
          // `startNodes`
          ...startNodes
        ]
      };
    }
  }
};
_locateNodesByLocator = new WeakSet();
locateNodesByLocator_fn = async function(realm, locator, startNodes, maxNodeCount, serializationOptions) {
  var _a4, _b3, _c3;
  const locatorDelegate = await __privateMethod(this, _getLocatorDelegate, getLocatorDelegate_fn).call(this, realm, locator, maxNodeCount, startNodes);
  serializationOptions = {
    ...serializationOptions,
    // The returned object is an array of nodes, so no need in deeper JS serialization.
    maxObjectDepth: 1
  };
  const locatorResult = await realm.callFunction(locatorDelegate.functionDeclaration, false, { type: "undefined" }, locatorDelegate.argumentsLocalValues, "none", serializationOptions);
  if (locatorResult.type !== "success") {
    (_a4 = __privateGet(this, _logger7)) == null ? void 0 : _a4.call(this, _BrowsingContextImpl.LOGGER_PREFIX, "Failed locateNodesByLocator", locatorResult);
    if (
      // CSS selector.
      ((_b3 = locatorResult.exceptionDetails.text) == null ? void 0 : _b3.endsWith("is not a valid selector.")) || // XPath selector.
      ((_c3 = locatorResult.exceptionDetails.text) == null ? void 0 : _c3.endsWith("is not a valid XPath expression."))
    ) {
      throw new protocol_js_1$8.InvalidSelectorException(`Not valid selector ${typeof locator.value === "string" ? locator.value : JSON.stringify(locator.value)}`);
    }
    if (locatorResult.exceptionDetails.text === "Error: startNodes in css selector should be HTMLElement") {
      throw new protocol_js_1$8.InvalidArgumentException(`startNodes in css selector should be HTMLElement`);
    }
    throw new protocol_js_1$8.UnknownErrorException(`Unexpected error in selector script: ${locatorResult.exceptionDetails.text}`);
  }
  if (locatorResult.result.type !== "array") {
    throw new protocol_js_1$8.UnknownErrorException(`Unexpected selector script result type: ${locatorResult.result.type}`);
  }
  const nodes = locatorResult.result.value.map((value) => {
    if (value.type !== "node") {
      throw new protocol_js_1$8.UnknownErrorException(`Unexpected selector script result element: ${value.type}`);
    }
    return value;
  });
  return { nodes };
};
__publicField(_BrowsingContextImpl, "LOGGER_PREFIX", `${log_js_1$4.LogType.debug}:browsingContext`);
let BrowsingContextImpl = _BrowsingContextImpl;
BrowsingContextImpl$1.BrowsingContextImpl = BrowsingContextImpl;
function serializeOrigin(origin) {
  if (["://", ""].includes(origin)) {
    origin = "null";
  }
  return origin;
}
BrowsingContextImpl$1.serializeOrigin = serializeOrigin;
function getImageFormatParameters(params) {
  const { quality, type } = params.format ?? {
    type: "image/png"
  };
  switch (type) {
    case "image/png": {
      return { format: "png" };
    }
    case "image/jpeg": {
      return {
        format: "jpeg",
        ...quality === void 0 ? {} : { quality: Math.round(quality * 100) }
      };
    }
    case "image/webp": {
      return {
        format: "webp",
        ...quality === void 0 ? {} : { quality: Math.round(quality * 100) }
      };
    }
  }
  throw new protocol_js_1$8.InvalidArgumentException(`Image format '${type}' is not a supported format`);
}
function deserializeDOMRect(result) {
  var _a4, _b3, _c3, _d3;
  if (result.type !== "object" || result.value === void 0) {
    return;
  }
  const x2 = (_a4 = result.value.find(([key]) => {
    return key === "x";
  })) == null ? void 0 : _a4[1];
  const y2 = (_b3 = result.value.find(([key]) => {
    return key === "y";
  })) == null ? void 0 : _b3[1];
  const height = (_c3 = result.value.find(([key]) => {
    return key === "height";
  })) == null ? void 0 : _c3[1];
  const width = (_d3 = result.value.find(([key]) => {
    return key === "width";
  })) == null ? void 0 : _d3[1];
  if ((x2 == null ? void 0 : x2.type) !== "number" || (y2 == null ? void 0 : y2.type) !== "number" || (height == null ? void 0 : height.type) !== "number" || (width == null ? void 0 : width.type) !== "number") {
    return;
  }
  return {
    x: x2.value,
    y: y2.value,
    width: width.value,
    height: height.value
  };
}
function normalizeRect(box) {
  return {
    ...box.width < 0 ? {
      x: box.x + box.width,
      width: -box.width
    } : {
      x: box.x,
      width: box.width
    },
    ...box.height < 0 ? {
      y: box.y + box.height,
      height: -box.height
    } : {
      y: box.y,
      height: box.height
    }
  };
}
function getIntersectionRect(first, second) {
  first = normalizeRect(first);
  second = normalizeRect(second);
  const x2 = Math.max(first.x, second.x);
  const y2 = Math.max(first.y, second.y);
  return {
    x: x2,
    y: y2,
    width: Math.max(Math.min(first.x + first.width, second.x + second.width) - x2, 0),
    height: Math.max(Math.min(first.y + first.height, second.y + second.height) - y2, 0)
  };
}
function parseInteger(value) {
  value = value.trim();
  if (!/^[0-9]+$/.test(value)) {
    throw new protocol_js_1$8.InvalidArgumentException(`Invalid integer: ${value}`);
  }
  return parseInt(value);
}
var WorkerRealm$1 = {};
Object.defineProperty(WorkerRealm$1, "__esModule", { value: true });
WorkerRealm$1.WorkerRealm = void 0;
const Realm_js_1 = Realm$2;
class WorkerRealm extends Realm_js_1.Realm {
  constructor(cdpClient, eventManager, executionContextId, logger, origin, ownerRealms, realmId, realmStorage, realmType) {
    super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
    __privateAdd(this, _realmType, void 0);
    __privateAdd(this, _ownerRealms, void 0);
    __privateSet(this, _ownerRealms, ownerRealms);
    __privateSet(this, _realmType, realmType);
    this.initialize();
  }
  get associatedBrowsingContexts() {
    return __privateGet(this, _ownerRealms).flatMap((realm) => realm.associatedBrowsingContexts);
  }
  get realmType() {
    return __privateGet(this, _realmType);
  }
  get source() {
    var _a4;
    return {
      realm: this.realmId,
      // This is a hack to make Puppeteer able to track workers.
      // TODO: remove after Puppeteer tracks workers by owners and use the base version.
      context: (_a4 = this.associatedBrowsingContexts[0]) == null ? void 0 : _a4.id
    };
  }
  get realmInfo() {
    const owners = __privateGet(this, _ownerRealms).map((realm) => realm.realmId);
    const { realmType } = this;
    switch (realmType) {
      case "dedicated-worker": {
        const owner = owners[0];
        if (owner === void 0 || owners.length !== 1) {
          throw new Error("Dedicated worker must have exactly one owner");
        }
        return {
          ...this.baseInfo,
          type: realmType,
          owners: [owner]
        };
      }
      case "service-worker":
      case "shared-worker": {
        return {
          ...this.baseInfo,
          type: realmType
        };
      }
    }
  }
}
_realmType = new WeakMap();
_ownerRealms = new WeakMap();
WorkerRealm$1.WorkerRealm = WorkerRealm;
var CdpTarget$1 = {};
var LogManager$1 = {};
var logHelper = {};
Object.defineProperty(logHelper, "__esModule", { value: true });
logHelper.getRemoteValuesText = logHelper.logMessageFormatter = void 0;
const assert_js_1$1 = assert$1;
const specifiers = ["%s", "%d", "%i", "%f", "%o", "%O", "%c"];
function isFormatSpecifier(str) {
  return specifiers.some((spec) => str.includes(spec));
}
function logMessageFormatter(args) {
  let output = "";
  const argFormat = args[0].value.toString();
  const argValues = args.slice(1, void 0);
  const tokens = argFormat.split(new RegExp(specifiers.map((spec) => `(${spec})`).join("|"), "g"));
  for (const token of tokens) {
    if (token === void 0 || token === "") {
      continue;
    }
    if (isFormatSpecifier(token)) {
      const arg = argValues.shift();
      (0, assert_js_1$1.assert)(arg, `Less value is provided: "${getRemoteValuesText(args, false)}"`);
      if (token === "%s") {
        output += stringFromArg(arg);
      } else if (token === "%d" || token === "%i") {
        if (arg.type === "bigint" || arg.type === "number" || arg.type === "string") {
          output += parseInt(arg.value.toString(), 10);
        } else {
          output += "NaN";
        }
      } else if (token === "%f") {
        if (arg.type === "bigint" || arg.type === "number" || arg.type === "string") {
          output += parseFloat(arg.value.toString());
        } else {
          output += "NaN";
        }
      } else {
        output += toJson(arg);
      }
    } else {
      output += token;
    }
  }
  if (argValues.length > 0) {
    throw new Error(`More value is provided: "${getRemoteValuesText(args, false)}"`);
  }
  return output;
}
logHelper.logMessageFormatter = logMessageFormatter;
function toJson(arg) {
  var _a4;
  if (arg.type !== "array" && arg.type !== "bigint" && arg.type !== "date" && arg.type !== "number" && arg.type !== "object" && arg.type !== "string") {
    return stringFromArg(arg);
  }
  if (arg.type === "bigint") {
    return `${arg.value.toString()}n`;
  }
  if (arg.type === "number") {
    return arg.value.toString();
  }
  if (["date", "string"].includes(arg.type)) {
    return JSON.stringify(arg.value);
  }
  if (arg.type === "object") {
    return `{${arg.value.map((pair) => {
      return `${JSON.stringify(pair[0])}:${toJson(pair[1])}`;
    }).join(",")}}`;
  }
  if (arg.type === "array") {
    return `[${((_a4 = arg.value) == null ? void 0 : _a4.map((val) => toJson(val)).join(",")) ?? ""}]`;
  }
  throw Error(`Invalid value type: ${arg}`);
}
function stringFromArg(arg) {
  var _a4, _b3, _c3, _d3;
  if (!Object.hasOwn(arg, "value")) {
    return arg.type;
  }
  switch (arg.type) {
    case "string":
    case "number":
    case "boolean":
    case "bigint":
      return String(arg.value);
    case "regexp":
      return `/${arg.value.pattern}/${arg.value.flags ?? ""}`;
    case "date":
      return new Date(arg.value).toString();
    case "object":
      return `Object(${((_a4 = arg.value) == null ? void 0 : _a4.length) ?? ""})`;
    case "array":
      return `Array(${((_b3 = arg.value) == null ? void 0 : _b3.length) ?? ""})`;
    case "map":
      return `Map(${(_c3 = arg.value) == null ? void 0 : _c3.length})`;
    case "set":
      return `Set(${(_d3 = arg.value) == null ? void 0 : _d3.length})`;
    default:
      return arg.type;
  }
}
function getRemoteValuesText(args, formatText) {
  const arg = args[0];
  if (!arg) {
    return "";
  }
  if (arg.type === "string" && isFormatSpecifier(arg.value.toString()) && formatText) {
    return logMessageFormatter(args);
  }
  return args.map((arg2) => {
    return stringFromArg(arg2);
  }).join(" ");
}
logHelper.getRemoteValuesText = getRemoteValuesText;
Object.defineProperty(LogManager$1, "__esModule", { value: true });
LogManager$1.LogManager = void 0;
const protocol_js_1$7 = protocol;
const log_js_1$3 = log;
const logHelper_js_1 = logHelper;
function getBidiStackTrace(cdpStackTrace) {
  const stackFrames = cdpStackTrace == null ? void 0 : cdpStackTrace.callFrames.map((callFrame) => {
    return {
      columnNumber: callFrame.columnNumber,
      functionName: callFrame.functionName,
      lineNumber: callFrame.lineNumber,
      url: callFrame.url
    };
  });
  return stackFrames ? { callFrames: stackFrames } : void 0;
}
function getLogLevel(consoleApiType) {
  if (["error", "assert"].includes(consoleApiType)) {
    return "error";
  }
  if (["debug", "trace"].includes(consoleApiType)) {
    return "debug";
  }
  if (["warn", "warning"].includes(consoleApiType)) {
    return "warn";
  }
  return "info";
}
const _LogManager = class _LogManager {
  constructor(cdpTarget, realmStorage, eventManager, logger) {
    __privateAdd(this, _initializeEntryAddedEventListener);
    __privateAdd(this, _eventManager4, void 0);
    __privateAdd(this, _realmStorage6, void 0);
    __privateAdd(this, _cdpTarget2, void 0);
    __privateAdd(this, _logger8, void 0);
    __privateSet(this, _cdpTarget2, cdpTarget);
    __privateSet(this, _realmStorage6, realmStorage);
    __privateSet(this, _eventManager4, eventManager);
    __privateSet(this, _logger8, logger);
  }
  static create(cdpTarget, realmStorage, eventManager, logger) {
    var _a4;
    const logManager = new _LogManager(cdpTarget, realmStorage, eventManager, logger);
    __privateMethod(_a4 = logManager, _initializeEntryAddedEventListener, initializeEntryAddedEventListener_fn).call(_a4);
    return logManager;
  }
};
_eventManager4 = new WeakMap();
_realmStorage6 = new WeakMap();
_cdpTarget2 = new WeakMap();
_logger8 = new WeakMap();
_initializeEntryAddedEventListener = new WeakSet();
initializeEntryAddedEventListener_fn = function() {
  __privateGet(this, _cdpTarget2).cdpClient.on("Runtime.consoleAPICalled", (params) => {
    var _a4;
    const realm = __privateGet(this, _realmStorage6).findRealm({
      cdpSessionId: __privateGet(this, _cdpTarget2).cdpSessionId,
      executionContextId: params.executionContextId
    });
    if (realm === void 0) {
      (_a4 = __privateGet(this, _logger8)) == null ? void 0 : _a4.call(this, log_js_1$3.LogType.cdp, params);
      return;
    }
    const argsPromise = realm === void 0 ? Promise.resolve(params.args) : (
      // Properly serialize arguments if possible.
      Promise.all(params.args.map((arg) => {
        return realm.serializeCdpObject(
          arg,
          "none"
          /* Script.ResultOwnership.None */
        );
      }))
    );
    for (const browsingContext of realm.associatedBrowsingContexts) {
      __privateGet(this, _eventManager4).registerPromiseEvent(argsPromise.then((args) => ({
        kind: "success",
        value: {
          type: "event",
          method: protocol_js_1$7.ChromiumBidi.Log.EventNames.LogEntryAdded,
          params: {
            level: getLogLevel(params.type),
            source: realm.source,
            text: (0, logHelper_js_1.getRemoteValuesText)(args, true),
            timestamp: Math.round(params.timestamp),
            stackTrace: getBidiStackTrace(params.stackTrace),
            type: "console",
            // Console method is `warn`, not `warning`.
            method: params.type === "warning" ? "warn" : params.type,
            args
          }
        }
      })), browsingContext.id, protocol_js_1$7.ChromiumBidi.Log.EventNames.LogEntryAdded);
    }
  });
  __privateGet(this, _cdpTarget2).cdpClient.on("Runtime.exceptionThrown", (params) => {
    var _a4, _b3;
    const realm = __privateGet(this, _realmStorage6).findRealm({
      cdpSessionId: __privateGet(this, _cdpTarget2).cdpSessionId,
      executionContextId: params.exceptionDetails.executionContextId
    });
    if (realm === void 0) {
      (_a4 = __privateGet(this, _logger8)) == null ? void 0 : _a4.call(this, log_js_1$3.LogType.cdp, params);
      return;
    }
    for (const browsingContext of realm.associatedBrowsingContexts) {
      __privateGet(this, _eventManager4).registerPromiseEvent(__privateMethod(_b3 = _LogManager, _getExceptionText, getExceptionText_fn).call(_b3, params, realm).then((text) => ({
        kind: "success",
        value: {
          type: "event",
          method: protocol_js_1$7.ChromiumBidi.Log.EventNames.LogEntryAdded,
          params: {
            level: "error",
            source: realm.source,
            text,
            timestamp: Math.round(params.timestamp),
            stackTrace: getBidiStackTrace(params.exceptionDetails.stackTrace),
            type: "javascript"
          }
        }
      })), browsingContext.id, protocol_js_1$7.ChromiumBidi.Log.EventNames.LogEntryAdded);
    }
  });
};
_getExceptionText = new WeakSet();
getExceptionText_fn = async function(params, realm) {
  if (!params.exceptionDetails.exception) {
    return params.exceptionDetails.text;
  }
  if (realm === void 0) {
    return JSON.stringify(params.exceptionDetails.exception);
  }
  return await realm.stringifyObject(params.exceptionDetails.exception);
};
/**
 * Try the best to get the exception text.
 */
__privateAdd(_LogManager, _getExceptionText);
let LogManager = _LogManager;
LogManager$1.LogManager = LogManager;
Object.defineProperty(CdpTarget$1, "__esModule", { value: true });
CdpTarget$1.CdpTarget = void 0;
const chromium_bidi_js_1 = chromiumBidi;
const Deferred_js_1$1 = Deferred$1;
const LogManager_js_1 = LogManager$1;
const _CdpTarget = class _CdpTarget {
  constructor(targetId, cdpClient, browserCdpClient, eventManager, preloadScriptStorage, browsingContextStorage, networkStorage, acceptInsecureCerts) {
    /**
     * Enables all the required CDP domains and unblocks the target.
     */
    __privateAdd(this, _unblock);
    __privateAdd(this, _setEventListeners);
    /** Loads all top-level preload scripts. */
    __privateAdd(this, _initAndEvaluatePreloadScripts);
    __privateAdd(this, _id4, void 0);
    __privateAdd(this, _cdpClient2, void 0);
    __privateAdd(this, _browserCdpClient7, void 0);
    __privateAdd(this, _eventManager5, void 0);
    __privateAdd(this, _preloadScriptStorage2, void 0);
    __privateAdd(this, _browsingContextStorage9, void 0);
    __privateAdd(this, _networkStorage2, void 0);
    __privateAdd(this, _unblocked, new Deferred_js_1$1.Deferred());
    __privateAdd(this, _acceptInsecureCerts, void 0);
    __privateAdd(this, _networkDomainEnabled, false);
    __privateAdd(this, _fetchDomainStages, {
      request: false,
      response: false,
      auth: false
    });
    __privateSet(this, _id4, targetId);
    __privateSet(this, _cdpClient2, cdpClient);
    __privateSet(this, _browserCdpClient7, browserCdpClient);
    __privateSet(this, _eventManager5, eventManager);
    __privateSet(this, _preloadScriptStorage2, preloadScriptStorage);
    __privateSet(this, _networkStorage2, networkStorage);
    __privateSet(this, _browsingContextStorage9, browsingContextStorage);
    __privateSet(this, _acceptInsecureCerts, acceptInsecureCerts);
  }
  static create(targetId, cdpClient, browserCdpClient, realmStorage, eventManager, preloadScriptStorage, browsingContextStorage, networkStorage, acceptInsecureCerts, logger) {
    var _a4, _b3;
    const cdpTarget = new _CdpTarget(targetId, cdpClient, browserCdpClient, eventManager, preloadScriptStorage, browsingContextStorage, networkStorage, acceptInsecureCerts);
    LogManager_js_1.LogManager.create(cdpTarget, realmStorage, eventManager, logger);
    __privateMethod(_a4 = cdpTarget, _setEventListeners, setEventListeners_fn).call(_a4);
    void __privateMethod(_b3 = cdpTarget, _unblock, unblock_fn).call(_b3);
    return cdpTarget;
  }
  /** Returns a deferred that resolves when the target is unblocked. */
  get unblocked() {
    return __privateGet(this, _unblocked);
  }
  get id() {
    return __privateGet(this, _id4);
  }
  get cdpClient() {
    return __privateGet(this, _cdpClient2);
  }
  get browserCdpClient() {
    return __privateGet(this, _browserCdpClient7);
  }
  /** Needed for CDP escape path. */
  get cdpSessionId() {
    return __privateGet(this, _cdpClient2).sessionId;
  }
  async toggleFetchIfNeeded() {
    const stages = __privateGet(this, _networkStorage2).getInterceptionStages(this.topLevelId);
    if (
      // Only toggle interception when Network is enabled
      !__privateGet(this, _networkDomainEnabled) || __privateGet(this, _fetchDomainStages).request === stages.request && __privateGet(this, _fetchDomainStages).response === stages.response && __privateGet(this, _fetchDomainStages).auth === stages.auth
    ) {
      return;
    }
    const patterns = [];
    __privateSet(this, _fetchDomainStages, stages);
    if (stages.request || stages.auth) {
      patterns.push({
        urlPattern: "*",
        requestStage: "Request"
      });
    }
    if (stages.response) {
      patterns.push({
        urlPattern: "*",
        requestStage: "Response"
      });
    }
    if (patterns.length) {
      await __privateGet(this, _cdpClient2).sendCommand("Fetch.enable", {
        patterns,
        handleAuthRequests: stages.auth
      });
    } else {
      await __privateGet(this, _cdpClient2).sendCommand("Fetch.disable");
    }
  }
  /**
   * Toggles both Network and Fetch domains.
   */
  async toggleNetworkIfNeeded() {
    const enabled = this.isSubscribedTo(chromium_bidi_js_1.BiDiModule.Network);
    if (enabled === __privateGet(this, _networkDomainEnabled)) {
      return;
    }
    __privateSet(this, _networkDomainEnabled, enabled);
    try {
      await Promise.all([
        __privateGet(this, _cdpClient2).sendCommand(enabled ? "Network.enable" : "Network.disable"),
        this.toggleFetchIfNeeded()
      ]);
    } catch (err) {
      __privateSet(this, _networkDomainEnabled, !enabled);
    }
  }
  /**
   * All the ProxyChannels from all the preload scripts of the given
   * BrowsingContext.
   */
  getChannels() {
    return __privateGet(this, _preloadScriptStorage2).find().flatMap((script) => script.channels);
  }
  get topLevelId() {
    return __privateGet(this, _browsingContextStorage9).findTopLevelContextId(this.id) ?? this.id;
  }
  isSubscribedTo(moduleOrEvent) {
    return __privateGet(this, _eventManager5).subscriptionManager.isSubscribedTo(moduleOrEvent, this.topLevelId);
  }
};
_id4 = new WeakMap();
_cdpClient2 = new WeakMap();
_browserCdpClient7 = new WeakMap();
_eventManager5 = new WeakMap();
_preloadScriptStorage2 = new WeakMap();
_browsingContextStorage9 = new WeakMap();
_networkStorage2 = new WeakMap();
_unblocked = new WeakMap();
_acceptInsecureCerts = new WeakMap();
_networkDomainEnabled = new WeakMap();
_fetchDomainStages = new WeakMap();
_unblock = new WeakSet();
unblock_fn = async function() {
  try {
    await Promise.all([
      __privateGet(this, _cdpClient2).sendCommand("Runtime.enable"),
      __privateGet(this, _cdpClient2).sendCommand("Page.enable"),
      __privateGet(this, _cdpClient2).sendCommand("Page.setLifecycleEventsEnabled", {
        enabled: true
      }),
      // Set ignore certificate errors for each target.
      __privateGet(this, _cdpClient2).sendCommand("Security.setIgnoreCertificateErrors", {
        ignore: __privateGet(this, _acceptInsecureCerts)
      }),
      this.toggleNetworkIfNeeded(),
      __privateGet(this, _cdpClient2).sendCommand("Target.setAutoAttach", {
        autoAttach: true,
        waitForDebuggerOnStart: true,
        flatten: true
      }),
      __privateMethod(this, _initAndEvaluatePreloadScripts, initAndEvaluatePreloadScripts_fn).call(this),
      __privateGet(this, _cdpClient2).sendCommand("Runtime.runIfWaitingForDebugger")
    ]);
  } catch (error) {
    if (!__privateGet(this, _cdpClient2).isCloseError(error)) {
      __privateGet(this, _unblocked).resolve({
        kind: "error",
        error
      });
      return;
    }
  }
  __privateGet(this, _unblocked).resolve({
    kind: "success",
    value: void 0
  });
};
_setEventListeners = new WeakSet();
setEventListeners_fn = function() {
  __privateGet(this, _cdpClient2).on("*", (event, params) => {
    if (typeof event !== "string") {
      return;
    }
    __privateGet(this, _eventManager5).registerEvent({
      type: "event",
      method: `cdp.${event}`,
      params: {
        event,
        params,
        session: this.cdpSessionId
      }
    }, this.id);
  });
};
_initAndEvaluatePreloadScripts = new WeakSet();
initAndEvaluatePreloadScripts_fn = async function() {
  await Promise.all(__privateGet(this, _preloadScriptStorage2).find({
    // Needed for OOPIF
    targetId: this.topLevelId,
    global: true
  }).map((script) => {
    return script.initInTarget(this, true);
  }));
};
let CdpTarget = _CdpTarget;
CdpTarget$1.CdpTarget = CdpTarget;
Object.defineProperty(CdpTargetManager$1, "__esModule", { value: true });
CdpTargetManager$1.CdpTargetManager = void 0;
const log_js_1$2 = log;
const BrowsingContextImpl_js_1 = BrowsingContextImpl$1;
const WorkerRealm_js_1 = WorkerRealm$1;
const CdpTarget_js_1 = CdpTarget$1;
const cdpToBidiTargetTypes = {
  service_worker: "service-worker",
  shared_worker: "shared-worker",
  worker: "dedicated-worker"
};
class CdpTargetManager {
  constructor(cdpConnection, browserCdpClient, selfTargetId, eventManager, browsingContextStorage, realmStorage, networkStorage, preloadScriptStorage, acceptInsecureCerts, defaultUserContextId, logger) {
    /**
     * This method is called for each CDP session, since this class is responsible
     * for creating and destroying all targets and browsing contexts.
     */
    __privateAdd(this, _setEventListeners2);
    __privateAdd(this, _handleFrameAttachedEvent);
    __privateAdd(this, _handleFrameDetachedEvent);
    __privateAdd(this, _handleAttachedToTargetEvent);
    __privateAdd(this, _createCdpTarget);
    __privateAdd(this, _handleWorkerTarget);
    __privateAdd(this, _handleDetachedFromTargetEvent);
    __privateAdd(this, _handleTargetInfoChangedEvent);
    __privateAdd(this, _handleTargetCrashedEvent);
    __privateAdd(this, _browserCdpClient8, void 0);
    __privateAdd(this, _cdpConnection2, void 0);
    __privateAdd(this, _selfTargetId, void 0);
    __privateAdd(this, _eventManager6, void 0);
    __privateAdd(this, _browsingContextStorage10, void 0);
    __privateAdd(this, _networkStorage3, void 0);
    __privateAdd(this, _acceptInsecureCerts2, void 0);
    __privateAdd(this, _preloadScriptStorage3, void 0);
    __privateAdd(this, _realmStorage7, void 0);
    __privateAdd(this, _defaultUserContextId, void 0);
    __privateAdd(this, _logger9, void 0);
    __privateAdd(this, _workers, /* @__PURE__ */ new Map());
    __privateSet(this, _acceptInsecureCerts2, acceptInsecureCerts);
    __privateSet(this, _cdpConnection2, cdpConnection);
    __privateSet(this, _browserCdpClient8, browserCdpClient);
    __privateSet(this, _selfTargetId, selfTargetId);
    __privateSet(this, _eventManager6, eventManager);
    __privateSet(this, _browsingContextStorage10, browsingContextStorage);
    __privateSet(this, _preloadScriptStorage3, preloadScriptStorage);
    __privateSet(this, _networkStorage3, networkStorage);
    __privateSet(this, _realmStorage7, realmStorage);
    __privateSet(this, _defaultUserContextId, defaultUserContextId);
    __privateSet(this, _logger9, logger);
    __privateMethod(this, _setEventListeners2, setEventListeners_fn2).call(this, browserCdpClient);
  }
}
_browserCdpClient8 = new WeakMap();
_cdpConnection2 = new WeakMap();
_selfTargetId = new WeakMap();
_eventManager6 = new WeakMap();
_browsingContextStorage10 = new WeakMap();
_networkStorage3 = new WeakMap();
_acceptInsecureCerts2 = new WeakMap();
_preloadScriptStorage3 = new WeakMap();
_realmStorage7 = new WeakMap();
_defaultUserContextId = new WeakMap();
_logger9 = new WeakMap();
_setEventListeners2 = new WeakSet();
setEventListeners_fn2 = function(cdpClient) {
  cdpClient.on("Target.attachedToTarget", (params) => {
    __privateMethod(this, _handleAttachedToTargetEvent, handleAttachedToTargetEvent_fn).call(this, params, cdpClient);
  });
  cdpClient.on("Target.detachedFromTarget", __privateMethod(this, _handleDetachedFromTargetEvent, handleDetachedFromTargetEvent_fn).bind(this));
  cdpClient.on("Target.targetInfoChanged", __privateMethod(this, _handleTargetInfoChangedEvent, handleTargetInfoChangedEvent_fn).bind(this));
  cdpClient.on("Inspector.targetCrashed", () => {
    __privateMethod(this, _handleTargetCrashedEvent, handleTargetCrashedEvent_fn).call(this, cdpClient);
  });
  cdpClient.on("Page.frameAttached", __privateMethod(this, _handleFrameAttachedEvent, handleFrameAttachedEvent_fn).bind(this));
  cdpClient.on("Page.frameDetached", __privateMethod(this, _handleFrameDetachedEvent, handleFrameDetachedEvent_fn).bind(this));
};
_handleFrameAttachedEvent = new WeakSet();
handleFrameAttachedEvent_fn = function(params) {
  const parentBrowsingContext = __privateGet(this, _browsingContextStorage10).findContext(params.parentFrameId);
  if (parentBrowsingContext !== void 0) {
    BrowsingContextImpl_js_1.BrowsingContextImpl.create(params.frameId, params.parentFrameId, parentBrowsingContext.userContext, parentBrowsingContext.cdpTarget, __privateGet(this, _eventManager6), __privateGet(this, _browsingContextStorage10), __privateGet(this, _realmStorage7), __privateGet(this, _logger9));
  }
};
_handleFrameDetachedEvent = new WeakSet();
handleFrameDetachedEvent_fn = function(params) {
  var _a4;
  if (params.reason === "swap") {
    return;
  }
  (_a4 = __privateGet(this, _browsingContextStorage10).findContext(params.frameId)) == null ? void 0 : _a4.dispose();
};
_handleAttachedToTargetEvent = new WeakSet();
handleAttachedToTargetEvent_fn = function(params, parentSessionCdpClient) {
  const { sessionId, targetInfo } = params;
  const targetCdpClient = __privateGet(this, _cdpConnection2).getCdpClient(sessionId);
  switch (targetInfo.type) {
    case "page":
    case "iframe": {
      if (targetInfo.targetId === __privateGet(this, _selfTargetId)) {
        break;
      }
      const cdpTarget = __privateMethod(this, _createCdpTarget, createCdpTarget_fn).call(this, targetCdpClient, targetInfo);
      const maybeContext = __privateGet(this, _browsingContextStorage10).findContext(targetInfo.targetId);
      if (maybeContext) {
        maybeContext.updateCdpTarget(cdpTarget);
      } else {
        const userContext = targetInfo.browserContextId && targetInfo.browserContextId !== __privateGet(this, _defaultUserContextId) ? targetInfo.browserContextId : "default";
        BrowsingContextImpl_js_1.BrowsingContextImpl.create(targetInfo.targetId, null, userContext, cdpTarget, __privateGet(this, _eventManager6), __privateGet(this, _browsingContextStorage10), __privateGet(this, _realmStorage7), __privateGet(this, _logger9));
      }
      return;
    }
    case "service_worker":
    case "worker": {
      const realm = __privateGet(this, _realmStorage7).findRealm({
        cdpSessionId: parentSessionCdpClient.sessionId
      });
      if (!realm) {
        break;
      }
      const cdpTarget = __privateMethod(this, _createCdpTarget, createCdpTarget_fn).call(this, targetCdpClient, targetInfo);
      __privateMethod(this, _handleWorkerTarget, handleWorkerTarget_fn).call(this, cdpToBidiTargetTypes[targetInfo.type], cdpTarget, realm);
      return;
    }
    case "shared_worker": {
      const cdpTarget = __privateMethod(this, _createCdpTarget, createCdpTarget_fn).call(this, targetCdpClient, targetInfo);
      __privateMethod(this, _handleWorkerTarget, handleWorkerTarget_fn).call(this, cdpToBidiTargetTypes[targetInfo.type], cdpTarget);
      return;
    }
  }
  targetCdpClient.sendCommand("Runtime.runIfWaitingForDebugger").then(() => parentSessionCdpClient.sendCommand("Target.detachFromTarget", params)).catch((error) => {
    var _a4;
    return (_a4 = __privateGet(this, _logger9)) == null ? void 0 : _a4.call(this, log_js_1$2.LogType.debugError, error);
  });
};
_createCdpTarget = new WeakSet();
createCdpTarget_fn = function(targetCdpClient, targetInfo) {
  __privateMethod(this, _setEventListeners2, setEventListeners_fn2).call(this, targetCdpClient);
  const target = CdpTarget_js_1.CdpTarget.create(targetInfo.targetId, targetCdpClient, __privateGet(this, _browserCdpClient8), __privateGet(this, _realmStorage7), __privateGet(this, _eventManager6), __privateGet(this, _preloadScriptStorage3), __privateGet(this, _browsingContextStorage10), __privateGet(this, _networkStorage3), __privateGet(this, _acceptInsecureCerts2), __privateGet(this, _logger9));
  __privateGet(this, _networkStorage3).onCdpTargetCreated(target);
  return target;
};
_workers = new WeakMap();
_handleWorkerTarget = new WeakSet();
handleWorkerTarget_fn = function(realmType, cdpTarget, ownerRealm) {
  cdpTarget.cdpClient.on("Runtime.executionContextCreated", (params) => {
    const { uniqueId, id, origin } = params.context;
    const workerRealm = new WorkerRealm_js_1.WorkerRealm(cdpTarget.cdpClient, __privateGet(this, _eventManager6), id, __privateGet(this, _logger9), (0, BrowsingContextImpl_js_1.serializeOrigin)(origin), ownerRealm ? [ownerRealm] : [], uniqueId, __privateGet(this, _realmStorage7), realmType);
    __privateGet(this, _workers).set(cdpTarget.cdpSessionId, workerRealm);
  });
};
_handleDetachedFromTargetEvent = new WeakSet();
handleDetachedFromTargetEvent_fn = function({ sessionId, targetId }) {
  if (targetId) {
    __privateGet(this, _preloadScriptStorage3).find({ targetId }).map((preloadScript) => {
      preloadScript.dispose(targetId);
    });
  }
  const context = __privateGet(this, _browsingContextStorage10).findContextBySession(sessionId);
  if (context) {
    context.dispose();
    return;
  }
  const worker = __privateGet(this, _workers).get(sessionId);
  if (worker) {
    __privateGet(this, _realmStorage7).deleteRealms({
      cdpSessionId: worker.cdpClient.sessionId
    });
  }
};
_handleTargetInfoChangedEvent = new WeakSet();
handleTargetInfoChangedEvent_fn = function(params) {
  const context = __privateGet(this, _browsingContextStorage10).findContext(params.targetInfo.targetId);
  if (context) {
    context.onTargetInfoChanged(params);
  }
};
_handleTargetCrashedEvent = new WeakSet();
handleTargetCrashedEvent_fn = function(cdpClient) {
  const realms = __privateGet(this, _realmStorage7).findRealms({
    cdpSessionId: cdpClient.sessionId
  });
  for (const realm of realms) {
    realm.dispose();
  }
};
CdpTargetManager$1.CdpTargetManager = CdpTargetManager;
var BrowsingContextStorage$1 = {};
Object.defineProperty(BrowsingContextStorage$1, "__esModule", { value: true });
BrowsingContextStorage$1.BrowsingContextStorage = void 0;
const protocol_js_1$6 = protocol;
class BrowsingContextStorage {
  constructor() {
    /** Map from context ID to context implementation. */
    __privateAdd(this, _contexts2, /* @__PURE__ */ new Map());
  }
  /** Gets all top-level contexts, i.e. those with no parent. */
  getTopLevelContexts() {
    return this.getAllContexts().filter((context) => context.isTopLevelContext());
  }
  /** Gets all contexts. */
  getAllContexts() {
    return Array.from(__privateGet(this, _contexts2).values());
  }
  /** Deletes the context with the given ID. */
  deleteContextById(id) {
    __privateGet(this, _contexts2).delete(id);
  }
  /** Deletes the given context. */
  deleteContext(context) {
    __privateGet(this, _contexts2).delete(context.id);
  }
  /** Tracks the given context. */
  addContext(context) {
    __privateGet(this, _contexts2).set(context.id, context);
  }
  /** Returns true whether there is an existing context with the given ID. */
  hasContext(id) {
    return __privateGet(this, _contexts2).has(id);
  }
  /** Gets the context with the given ID, if any. */
  findContext(id) {
    return __privateGet(this, _contexts2).get(id);
  }
  /** Returns the top-level context ID of the given context, if any. */
  findTopLevelContextId(id) {
    if (id === null) {
      return null;
    }
    const maybeContext = this.findContext(id);
    const parentId = (maybeContext == null ? void 0 : maybeContext.parentId) ?? null;
    if (parentId === null) {
      return id;
    }
    return this.findTopLevelContextId(parentId);
  }
  findContextBySession(sessionId) {
    for (const context of __privateGet(this, _contexts2).values()) {
      if (context.cdpTarget.cdpSessionId === sessionId) {
        return context;
      }
    }
    return;
  }
  /** Gets the context with the given ID, if any, otherwise throws. */
  getContext(id) {
    const result = this.findContext(id);
    if (result === void 0) {
      throw new protocol_js_1$6.NoSuchFrameException(`Context ${id} not found`);
    }
    return result;
  }
  verifyTopLevelContextsList(contexts) {
    const foundContexts = /* @__PURE__ */ new Set();
    if (!contexts) {
      return foundContexts;
    }
    for (const contextId of contexts) {
      const context = this.getContext(contextId);
      if (context.isTopLevelContext()) {
        foundContexts.add(context);
      } else {
        throw new protocol_js_1$6.InvalidArgumentException(`Non top-level context '${contextId}' given.`);
      }
    }
    return foundContexts;
  }
}
_contexts2 = new WeakMap();
BrowsingContextStorage$1.BrowsingContextStorage = BrowsingContextStorage;
var NetworkStorage$1 = {};
var NetworkRequest$1 = {};
Object.defineProperty(NetworkRequest$1, "__esModule", { value: true });
NetworkRequest$1.NetworkRequest = void 0;
const protocol_js_1$5 = protocol;
const assert_js_1 = assert$1;
const Deferred_js_1 = Deferred$1;
const log_js_1$1 = log;
const NetworkUtils_js_1$1 = NetworkUtils;
const REALM_REGEX = new RegExp('(?<=realm=").*(?=")');
const _NetworkRequest = class _NetworkRequest {
  constructor(id, eventManager, networkStorage, cdpTarget, redirectCount = 0, logger) {
    __privateAdd(this, _phaseChanged);
    __privateAdd(this, _interceptsInPhase);
    __privateAdd(this, _isBlockedInPhase);
    __privateAdd(this, _emitEventsIfReady);
    __privateAdd(this, _context2);
    __privateAdd(this, _emitEvent);
    __privateAdd(this, _getBaseEventParams);
    __privateAdd(this, _getResponseEventParams);
    __privateAdd(this, _getNavigationId);
    __privateAdd(this, _getRequestData);
    // TODO: implement.
    __privateAdd(this, _getTimings);
    __privateAdd(this, _getBeforeRequestEvent);
    __privateAdd(this, _getResponseStartedEvent);
    __privateAdd(this, _getResponseReceivedEvent);
    __privateAdd(this, _isIgnoredEvent);
    __privateAdd(this, _authChallenges);
    /**
     * Each network request has an associated request id, which is a string
     * uniquely identifying that request.
     *
     * The identifier for a request resulting from a redirect matches that of the
     * request that initiated it.
     */
    __privateAdd(this, _id5, void 0);
    __privateAdd(this, _fetchId, void 0);
    /**
     * Indicates the network intercept phase, if the request is currently blocked.
     * Undefined necessarily implies that the request is not blocked.
     */
    __privateAdd(this, _interceptPhase, void 0);
    __privateAdd(this, _servedFromCache, false);
    __privateAdd(this, _redirectCount, void 0);
    __privateAdd(this, _request, {});
    __privateAdd(this, _response, {});
    __privateAdd(this, _eventManager7, void 0);
    __privateAdd(this, _networkStorage4, void 0);
    __privateAdd(this, _cdpTarget3, void 0);
    __privateAdd(this, _logger10, void 0);
    __privateAdd(this, _emittedEvents, {
      [protocol_js_1$5.ChromiumBidi.Network.EventNames.AuthRequired]: false,
      [protocol_js_1$5.ChromiumBidi.Network.EventNames.BeforeRequestSent]: false,
      [protocol_js_1$5.ChromiumBidi.Network.EventNames.FetchError]: false,
      [protocol_js_1$5.ChromiumBidi.Network.EventNames.ResponseCompleted]: false,
      [protocol_js_1$5.ChromiumBidi.Network.EventNames.ResponseStarted]: false
    });
    __publicField(this, "waitNextPhase", new Deferred_js_1.Deferred());
    __privateSet(this, _id5, id);
    __privateSet(this, _eventManager7, eventManager);
    __privateSet(this, _networkStorage4, networkStorage);
    __privateSet(this, _cdpTarget3, cdpTarget);
    __privateSet(this, _redirectCount, redirectCount);
    __privateSet(this, _logger10, logger);
  }
  get id() {
    return __privateGet(this, _id5);
  }
  get fetchId() {
    return __privateGet(this, _fetchId);
  }
  /**
   * When blocked returns the phase for it
   */
  get interceptPhase() {
    return __privateGet(this, _interceptPhase);
  }
  get url() {
    var _a4, _b3, _c3, _d3, _e4, _f3, _g3;
    const fragment = ((_a4 = __privateGet(this, _request).info) == null ? void 0 : _a4.request.urlFragment) ?? ((_b3 = __privateGet(this, _request).paused) == null ? void 0 : _b3.request.urlFragment) ?? "";
    const url = ((_c3 = __privateGet(this, _response).info) == null ? void 0 : _c3.url) ?? ((_d3 = __privateGet(this, _response).paused) == null ? void 0 : _d3.request.url) ?? ((_e4 = __privateGet(this, _request).auth) == null ? void 0 : _e4.request.url) ?? ((_f3 = __privateGet(this, _request).info) == null ? void 0 : _f3.request.url) ?? ((_g3 = __privateGet(this, _request).paused) == null ? void 0 : _g3.request.url) ?? _NetworkRequest.unknownParameter;
    return `${url}${fragment}`;
  }
  get method() {
    var _a4, _b3, _c3, _d3;
    return ((_a4 = __privateGet(this, _request).info) == null ? void 0 : _a4.request.method) ?? ((_b3 = __privateGet(this, _request).paused) == null ? void 0 : _b3.request.method) ?? ((_c3 = __privateGet(this, _request).auth) == null ? void 0 : _c3.request.method) ?? ((_d3 = __privateGet(this, _response).paused) == null ? void 0 : _d3.request.method) ?? _NetworkRequest.unknownParameter;
  }
  get redirectCount() {
    return __privateGet(this, _redirectCount);
  }
  get cdpTarget() {
    return __privateGet(this, _cdpTarget3);
  }
  get cdpClient() {
    return __privateGet(this, _cdpTarget3).cdpClient;
  }
  isRedirecting() {
    return Boolean(__privateGet(this, _request).info);
  }
  isDataUrl() {
    return this.url.startsWith("data:");
  }
  handleRedirect(event) {
    __privateGet(this, _response).hasExtraInfo = false;
    __privateGet(this, _response).info = event.redirectResponse;
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this, {
      wasRedirected: true
    });
  }
  onRequestWillBeSentEvent(event) {
    __privateGet(this, _request).info = event;
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onRequestWillBeSentExtraInfoEvent(event) {
    __privateGet(this, _request).extraInfo = event;
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onResponseReceivedExtraInfoEvent(event) {
    if (event.statusCode >= 300 && event.statusCode <= 399 && __privateGet(this, _request).info && event.headers["location"] === __privateGet(this, _request).info.request.url) {
      return;
    }
    __privateGet(this, _response).extraInfo = event;
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onResponseReceivedEvent(event) {
    __privateGet(this, _response).hasExtraInfo = event.hasExtraInfo;
    __privateGet(this, _response).info = event.response;
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onServedFromCache() {
    __privateSet(this, _servedFromCache, true);
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onLoadingFailedEvent(event) {
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this, {
      hasFailed: true
    });
    __privateMethod(this, _emitEvent, emitEvent_fn).call(this, () => {
      return {
        method: protocol_js_1$5.ChromiumBidi.Network.EventNames.FetchError,
        params: {
          ...__privateMethod(this, _getBaseEventParams, getBaseEventParams_fn).call(this),
          errorText: event.errorText
        }
      };
    });
  }
  /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-failRequest */
  async failRequest(errorReason) {
    (0, assert_js_1.assert)(__privateGet(this, _fetchId), "Network Interception not set-up.");
    await this.cdpClient.sendCommand("Fetch.failRequest", {
      requestId: __privateGet(this, _fetchId),
      errorReason
    });
    __privateSet(this, _interceptPhase, void 0);
  }
  onRequestPaused(event) {
    __privateSet(this, _fetchId, event.requestId);
    if (event.responseStatusCode || event.responseErrorReason) {
      __privateGet(this, _response).paused = event;
      if (__privateMethod(this, _isBlockedInPhase, isBlockedInPhase_fn).call(this, "responseStarted") && // CDP may emit multiple events for a single request
      !__privateGet(this, _emittedEvents)[protocol_js_1$5.ChromiumBidi.Network.EventNames.ResponseStarted] && // Continue all response that have not enabled Network domain
      __privateGet(this, _fetchId) !== this.id) {
        __privateSet(this, _interceptPhase, "responseStarted");
      } else {
        void this.continueResponse();
      }
    } else {
      __privateGet(this, _request).paused = event;
      if (__privateMethod(this, _isBlockedInPhase, isBlockedInPhase_fn).call(this, "beforeRequestSent") && // CDP may emit multiple events for a single request
      !__privateGet(this, _emittedEvents)[protocol_js_1$5.ChromiumBidi.Network.EventNames.BeforeRequestSent] && // Continue all requests that have not enabled Network domain
      __privateGet(this, _fetchId) !== this.id) {
        __privateSet(this, _interceptPhase, "beforeRequestSent");
      } else {
        void this.continueRequest();
      }
    }
    __privateMethod(this, _emitEventsIfReady, emitEventsIfReady_fn).call(this);
  }
  onAuthRequired(event) {
    __privateSet(this, _fetchId, event.requestId);
    __privateGet(this, _request).auth = event;
    if (__privateMethod(this, _isBlockedInPhase, isBlockedInPhase_fn).call(this, "authRequired") && // Continue all auth requests that have not enabled Network domain
    __privateGet(this, _fetchId) !== this.id) {
      __privateSet(this, _interceptPhase, "authRequired");
    } else {
      void this.continueWithAuth();
    }
    __privateMethod(this, _emitEvent, emitEvent_fn).call(this, () => {
      return {
        method: protocol_js_1$5.ChromiumBidi.Network.EventNames.AuthRequired,
        params: {
          ...__privateMethod(this, _getBaseEventParams, getBaseEventParams_fn).call(this, "authRequired"),
          response: __privateMethod(this, _getResponseEventParams, getResponseEventParams_fn).call(this)
        }
      };
    });
  }
  /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueRequest */
  async continueRequest({ url, method, headers, postData } = {}) {
    (0, assert_js_1.assert)(__privateGet(this, _fetchId), "Network Interception not set-up.");
    await this.cdpClient.sendCommand("Fetch.continueRequest", {
      requestId: __privateGet(this, _fetchId),
      url,
      method,
      headers,
      postData
    });
    __privateSet(this, _interceptPhase, void 0);
  }
  /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueResponse */
  async continueResponse({ responseCode, responsePhrase, responseHeaders } = {}) {
    (0, assert_js_1.assert)(__privateGet(this, _fetchId), "Network Interception not set-up.");
    await this.cdpClient.sendCommand("Fetch.continueResponse", {
      requestId: __privateGet(this, _fetchId),
      responseCode,
      responsePhrase,
      responseHeaders
    });
    __privateSet(this, _interceptPhase, void 0);
  }
  /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueWithAuth */
  async continueWithAuth(authChallengeResponse = {
    response: "Default"
  }) {
    (0, assert_js_1.assert)(__privateGet(this, _fetchId), "Network Interception not set-up.");
    await this.cdpClient.sendCommand("Fetch.continueWithAuth", {
      requestId: __privateGet(this, _fetchId),
      authChallengeResponse
    });
    __privateSet(this, _interceptPhase, void 0);
  }
  /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-provideResponse */
  async provideResponse({ responseCode, responsePhrase, responseHeaders, body }) {
    (0, assert_js_1.assert)(__privateGet(this, _fetchId), "Network Interception not set-up.");
    await this.cdpClient.sendCommand("Fetch.fulfillRequest", {
      requestId: __privateGet(this, _fetchId),
      responseCode,
      responsePhrase,
      responseHeaders,
      body
    });
    __privateSet(this, _interceptPhase, void 0);
  }
  /** Returns the HTTP status code associated with this request if any. */
  get statusCode() {
    var _a4, _b3, _c3;
    return ((_a4 = __privateGet(this, _response).paused) == null ? void 0 : _a4.responseStatusCode) ?? ((_b3 = __privateGet(this, _response).extraInfo) == null ? void 0 : _b3.statusCode) ?? ((_c3 = __privateGet(this, _response).info) == null ? void 0 : _c3.status);
  }
};
_id5 = new WeakMap();
_fetchId = new WeakMap();
_interceptPhase = new WeakMap();
_servedFromCache = new WeakMap();
_redirectCount = new WeakMap();
_request = new WeakMap();
_response = new WeakMap();
_eventManager7 = new WeakMap();
_networkStorage4 = new WeakMap();
_cdpTarget3 = new WeakMap();
_logger10 = new WeakMap();
_emittedEvents = new WeakMap();
_phaseChanged = new WeakSet();
phaseChanged_fn = function() {
  this.waitNextPhase.resolve();
  this.waitNextPhase = new Deferred_js_1.Deferred();
};
_interceptsInPhase = new WeakSet();
interceptsInPhase_fn = function(phase) {
  if (!__privateGet(this, _cdpTarget3).isSubscribedTo(`network.${phase}`)) {
    return /* @__PURE__ */ new Set();
  }
  return __privateGet(this, _networkStorage4).getInterceptsForPhase(this, phase);
};
_isBlockedInPhase = new WeakSet();
isBlockedInPhase_fn = function(phase) {
  return __privateMethod(this, _interceptsInPhase, interceptsInPhase_fn).call(this, phase).size > 0;
};
_emitEventsIfReady = new WeakSet();
emitEventsIfReady_fn = function(options = {}) {
  const requestExtraInfoCompleted = (
    // Flush redirects
    options.wasRedirected || options.hasFailed || this.isDataUrl() || Boolean(__privateGet(this, _request).extraInfo) || // Requests from cache don't have extra info
    __privateGet(this, _servedFromCache) || // Sometimes there is no extra info and the response
    // is the only place we can find out
    Boolean(__privateGet(this, _response).info && !__privateGet(this, _response).hasExtraInfo)
  );
  const noInterceptionExpected = (
    // We can't intercept data urls from CDP
    this.isDataUrl() || // Cached requests never hit the network
    __privateGet(this, _servedFromCache)
  );
  const requestInterceptionExpected = !noInterceptionExpected && __privateMethod(this, _isBlockedInPhase, isBlockedInPhase_fn).call(this, "beforeRequestSent");
  const requestInterceptionCompleted = !requestInterceptionExpected || requestInterceptionExpected && Boolean(__privateGet(this, _request).paused);
  if (Boolean(__privateGet(this, _request).info) && (requestInterceptionExpected ? requestInterceptionCompleted : requestExtraInfoCompleted)) {
    __privateMethod(this, _emitEvent, emitEvent_fn).call(this, __privateMethod(this, _getBeforeRequestEvent, getBeforeRequestEvent_fn).bind(this));
  }
  const responseExtraInfoCompleted = Boolean(__privateGet(this, _response).extraInfo) || // Response from cache don't have extra info
  __privateGet(this, _servedFromCache) || // Don't expect extra info if the flag is false
  Boolean(__privateGet(this, _response).info && !__privateGet(this, _response).hasExtraInfo);
  const responseInterceptionExpected = !noInterceptionExpected && __privateMethod(this, _isBlockedInPhase, isBlockedInPhase_fn).call(this, "responseStarted");
  if (__privateGet(this, _response).info || responseInterceptionExpected && Boolean(__privateGet(this, _response).paused)) {
    __privateMethod(this, _emitEvent, emitEvent_fn).call(this, __privateMethod(this, _getResponseStartedEvent, getResponseStartedEvent_fn).bind(this));
  }
  const responseInterceptionCompleted = !responseInterceptionExpected || responseInterceptionExpected && Boolean(__privateGet(this, _response).paused);
  if (Boolean(__privateGet(this, _response).info) && responseExtraInfoCompleted && responseInterceptionCompleted) {
    __privateMethod(this, _emitEvent, emitEvent_fn).call(this, __privateMethod(this, _getResponseReceivedEvent, getResponseReceivedEvent_fn).bind(this));
  }
};
_context2 = new WeakSet();
context_get = function() {
  var _a4, _b3, _c3, _d3;
  return ((_a4 = __privateGet(this, _response).paused) == null ? void 0 : _a4.frameId) ?? ((_b3 = __privateGet(this, _request).info) == null ? void 0 : _b3.frameId) ?? ((_c3 = __privateGet(this, _request).paused) == null ? void 0 : _c3.frameId) ?? ((_d3 = __privateGet(this, _request).auth) == null ? void 0 : _d3.frameId) ?? null;
};
_emitEvent = new WeakSet();
emitEvent_fn = function(getEvent) {
  var _a4;
  let event;
  try {
    event = getEvent();
  } catch (error) {
    (_a4 = __privateGet(this, _logger10)) == null ? void 0 : _a4.call(this, log_js_1$1.LogType.debugError, error);
    return;
  }
  if (__privateMethod(this, _isIgnoredEvent, isIgnoredEvent_fn).call(this) || __privateGet(this, _emittedEvents)[event.method] && // Special case this event can be emitted multiple times
  event.method !== protocol_js_1$5.ChromiumBidi.Network.EventNames.AuthRequired) {
    return;
  }
  __privateMethod(this, _phaseChanged, phaseChanged_fn).call(this);
  __privateGet(this, _emittedEvents)[event.method] = true;
  __privateGet(this, _eventManager7).registerEvent(Object.assign(event, {
    type: "event"
  }), __privateGet(this, _context2, context_get));
};
_getBaseEventParams = new WeakSet();
getBaseEventParams_fn = function(phase) {
  var _a4;
  const interceptProps = {
    isBlocked: false
  };
  if (phase) {
    const blockedBy = __privateMethod(this, _interceptsInPhase, interceptsInPhase_fn).call(this, phase);
    interceptProps.isBlocked = blockedBy.size > 0;
    if (interceptProps.isBlocked) {
      interceptProps.intercepts = [...blockedBy];
    }
  }
  return {
    context: __privateGet(this, _context2, context_get),
    navigation: __privateMethod(this, _getNavigationId, getNavigationId_fn).call(this),
    redirectCount: __privateGet(this, _redirectCount),
    request: __privateMethod(this, _getRequestData, getRequestData_fn).call(this),
    // Timestamp should be in milliseconds, while CDP provides it in seconds.
    timestamp: Math.round((((_a4 = __privateGet(this, _request).info) == null ? void 0 : _a4.wallTime) ?? 0) * 1e3),
    // Contains isBlocked and intercepts
    ...interceptProps
  };
};
_getResponseEventParams = new WeakSet();
getResponseEventParams_fn = function() {
  var _a4, _b3, _c3, _d3, _e4, _f3, _g3, _h2, _i3, _j;
  if ((_a4 = __privateGet(this, _response).info) == null ? void 0 : _a4.fromDiskCache) {
    __privateGet(this, _response).extraInfo = void 0;
  }
  const headers = (0, NetworkUtils_js_1$1.bidiNetworkHeadersFromCdpNetworkHeaders)((_b3 = __privateGet(this, _response).info) == null ? void 0 : _b3.headers);
  const authChallenges = __privateMethod(this, _authChallenges, authChallenges_fn).call(this, ((_c3 = __privateGet(this, _response).info) == null ? void 0 : _c3.headers) ?? {});
  return {
    url: this.url,
    protocol: ((_d3 = __privateGet(this, _response).info) == null ? void 0 : _d3.protocol) ?? "",
    status: this.statusCode ?? -1,
    // TODO: Throw an exception or use some other status code?
    statusText: ((_e4 = __privateGet(this, _response).info) == null ? void 0 : _e4.statusText) || ((_f3 = __privateGet(this, _response).paused) == null ? void 0 : _f3.responseStatusText) || "",
    fromCache: ((_g3 = __privateGet(this, _response).info) == null ? void 0 : _g3.fromDiskCache) || ((_h2 = __privateGet(this, _response).info) == null ? void 0 : _h2.fromPrefetchCache) || __privateGet(this, _servedFromCache),
    headers,
    mimeType: ((_i3 = __privateGet(this, _response).info) == null ? void 0 : _i3.mimeType) || "",
    bytesReceived: ((_j = __privateGet(this, _response).info) == null ? void 0 : _j.encodedDataLength) || 0,
    headersSize: (0, NetworkUtils_js_1$1.computeHeadersSize)(headers),
    // TODO: consider removing from spec.
    bodySize: 0,
    content: {
      // TODO: consider removing from spec.
      size: 0
    },
    ...authChallenges ? { authChallenges } : {}
  };
};
_getNavigationId = new WeakSet();
getNavigationId_fn = function() {
  if (!__privateGet(this, _request).info || !__privateGet(this, _request).info.loaderId || // When we navigate all CDP network events have `loaderId`
  // CDP's `loaderId` and `requestId` match when
  // that request triggered the loading
  __privateGet(this, _request).info.loaderId !== __privateGet(this, _request).info.requestId) {
    return null;
  }
  return __privateGet(this, _request).info.loaderId;
};
_getRequestData = new WeakSet();
getRequestData_fn = function() {
  var _a4, _b3;
  const cookies = __privateGet(this, _request).extraInfo ? __privateMethod(_a4 = _NetworkRequest, _getCookies, getCookies_fn).call(_a4, __privateGet(this, _request).extraInfo.associatedCookies) : [];
  const headers = (0, NetworkUtils_js_1$1.bidiNetworkHeadersFromCdpNetworkHeaders)((_b3 = __privateGet(this, _request).info) == null ? void 0 : _b3.request.headers);
  return {
    request: __privateGet(this, _id5),
    url: this.url,
    method: this.method,
    headers,
    cookies,
    headersSize: (0, NetworkUtils_js_1$1.computeHeadersSize)(headers),
    // TODO: implement.
    bodySize: 0,
    timings: __privateMethod(this, _getTimings, getTimings_fn).call(this)
  };
};
_getTimings = new WeakSet();
getTimings_fn = function() {
  return {
    timeOrigin: 0,
    requestTime: 0,
    redirectStart: 0,
    redirectEnd: 0,
    fetchStart: 0,
    dnsStart: 0,
    dnsEnd: 0,
    connectStart: 0,
    connectEnd: 0,
    tlsStart: 0,
    requestStart: 0,
    responseStart: 0,
    responseEnd: 0
  };
};
_getBeforeRequestEvent = new WeakSet();
getBeforeRequestEvent_fn = function() {
  var _a4;
  (0, assert_js_1.assert)(__privateGet(this, _request).info, "RequestWillBeSentEvent is not set");
  return {
    method: protocol_js_1$5.ChromiumBidi.Network.EventNames.BeforeRequestSent,
    params: {
      ...__privateMethod(this, _getBaseEventParams, getBaseEventParams_fn).call(this, "beforeRequestSent"),
      initiator: {
        type: __privateMethod(_a4 = _NetworkRequest, _getInitiatorType, getInitiatorType_fn).call(_a4, __privateGet(this, _request).info.initiator.type),
        columnNumber: __privateGet(this, _request).info.initiator.columnNumber,
        lineNumber: __privateGet(this, _request).info.initiator.lineNumber,
        stackTrace: __privateGet(this, _request).info.initiator.stack,
        request: __privateGet(this, _request).info.initiator.requestId
      }
    }
  };
};
_getResponseStartedEvent = new WeakSet();
getResponseStartedEvent_fn = function() {
  (0, assert_js_1.assert)(__privateGet(this, _request).info, "RequestWillBeSentEvent is not set");
  (0, assert_js_1.assert)(
    // The response paused comes before any data for the response
    __privateGet(this, _response).paused || __privateGet(this, _response).info,
    "ResponseReceivedEvent is not set"
  );
  return {
    method: protocol_js_1$5.ChromiumBidi.Network.EventNames.ResponseStarted,
    params: {
      ...__privateMethod(this, _getBaseEventParams, getBaseEventParams_fn).call(this, "responseStarted"),
      response: __privateMethod(this, _getResponseEventParams, getResponseEventParams_fn).call(this)
    }
  };
};
_getResponseReceivedEvent = new WeakSet();
getResponseReceivedEvent_fn = function() {
  (0, assert_js_1.assert)(__privateGet(this, _request).info, "RequestWillBeSentEvent is not set");
  (0, assert_js_1.assert)(__privateGet(this, _response).info, "ResponseReceivedEvent is not set");
  return {
    method: protocol_js_1$5.ChromiumBidi.Network.EventNames.ResponseCompleted,
    params: {
      ...__privateMethod(this, _getBaseEventParams, getBaseEventParams_fn).call(this),
      response: __privateMethod(this, _getResponseEventParams, getResponseEventParams_fn).call(this)
    }
  };
};
_isIgnoredEvent = new WeakSet();
isIgnoredEvent_fn = function() {
  var _a4, _b3;
  const faviconUrl = "/favicon.ico";
  return ((_a4 = __privateGet(this, _request).paused) == null ? void 0 : _a4.request.url.endsWith(faviconUrl)) ?? ((_b3 = __privateGet(this, _request).info) == null ? void 0 : _b3.request.url.endsWith(faviconUrl)) ?? false;
};
_authChallenges = new WeakSet();
authChallenges_fn = function(headers) {
  var _a4;
  if (!(this.statusCode === 401 || this.statusCode === 407)) {
    return void 0;
  }
  const headerName = this.statusCode === 401 ? "WWW-Authenticate" : "Proxy-Authenticate";
  const authChallenges = [];
  for (const [header, value] of Object.entries(headers)) {
    if (header.localeCompare(headerName, void 0, { sensitivity: "base" }) === 0) {
      authChallenges.push({
        scheme: value.split(" ").at(0) ?? "",
        realm: ((_a4 = value.match(REALM_REGEX)) == null ? void 0 : _a4.at(0)) ?? ""
      });
    }
  }
  return authChallenges;
};
_getInitiatorType = new WeakSet();
getInitiatorType_fn = function(initiatorType) {
  switch (initiatorType) {
    case "parser":
    case "script":
    case "preflight":
      return initiatorType;
    default:
      return "other";
  }
};
_getCookies = new WeakSet();
getCookies_fn = function(associatedCookies) {
  return associatedCookies.filter(({ blockedReasons }) => {
    return !Array.isArray(blockedReasons) || blockedReasons.length === 0;
  }).map(({ cookie }) => (0, NetworkUtils_js_1$1.cdpToBiDiCookie)(cookie));
};
__privateAdd(_NetworkRequest, _getInitiatorType);
__privateAdd(_NetworkRequest, _getCookies);
__publicField(_NetworkRequest, "unknownParameter", "UNKNOWN");
let NetworkRequest = _NetworkRequest;
NetworkRequest$1.NetworkRequest = NetworkRequest;
Object.defineProperty(NetworkStorage$1, "__esModule", { value: true });
NetworkStorage$1.NetworkStorage = void 0;
const protocol_js_1$4 = protocol;
const uuid_js_1 = uuid;
const NetworkRequest_js_1 = NetworkRequest$1;
const NetworkUtils_js_1 = NetworkUtils;
class NetworkStorage {
  constructor(eventManager, browserClient, logger) {
    /**
     * Gets the network request with the given ID, if any.
     * Otherwise, creates a new network request with the given ID and cdp target.
     */
    __privateAdd(this, _getOrCreateNetworkRequest);
    __privateAdd(this, _eventManager8, void 0);
    __privateAdd(this, _logger11, void 0);
    /**
     * A map from network request ID to Network Request objects.
     * Needed as long as information about requests comes from different events.
     */
    __privateAdd(this, _requests, /* @__PURE__ */ new Map());
    /** A map from intercept ID to track active network intercepts. */
    __privateAdd(this, _intercepts, /* @__PURE__ */ new Map());
    __privateSet(this, _eventManager8, eventManager);
    browserClient.on("Target.detachedFromTarget", ({ sessionId }) => {
      this.disposeRequestMap(sessionId);
    });
    __privateSet(this, _logger11, logger);
  }
  onCdpTargetCreated(cdpTarget) {
    const cdpClient = cdpTarget.cdpClient;
    const listeners = [
      [
        "Network.requestWillBeSent",
        (params) => {
          const request = this.getRequestById(params.requestId);
          if (request && request.isRedirecting()) {
            request.handleRedirect(params);
            this.deleteRequest(params.requestId);
            __privateMethod(this, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget, request.redirectCount + 1).onRequestWillBeSentEvent(params);
          } else {
            __privateMethod(this, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onRequestWillBeSentEvent(params);
          }
        }
      ],
      [
        "Network.requestWillBeSentExtraInfo",
        (params) => {
          __privateMethod(this, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onRequestWillBeSentExtraInfoEvent(params);
        }
      ],
      [
        "Network.responseReceived",
        (params) => {
          __privateMethod(this, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onResponseReceivedEvent(params);
        }
      ],
      [
        "Network.responseReceivedExtraInfo",
        (params) => {
          __privateMethod(this, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onResponseReceivedExtraInfoEvent(params);
        }
      ],
      [
        "Network.requestServedFromCache",
        (params) => {
          __privateMethod(this, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onServedFromCache();
        }
      ],
      [
        "Network.loadingFailed",
        (params) => {
          __privateMethod(this, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(this, params.requestId, cdpTarget).onLoadingFailedEvent(params);
        }
      ],
      [
        "Fetch.requestPaused",
        (event) => {
          __privateMethod(this, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(
            this,
            // CDP quirk if the Network domain is not present this is undefined
            event.networkId ?? event.requestId,
            cdpTarget
          ).onRequestPaused(event);
        }
      ],
      [
        "Fetch.authRequired",
        (event) => {
          let request = this.getRequestByFetchId(event.requestId);
          if (!request) {
            request = __privateMethod(this, _getOrCreateNetworkRequest, getOrCreateNetworkRequest_fn).call(this, event.requestId, cdpTarget);
          }
          request.onAuthRequired(event);
        }
      ]
    ];
    for (const [event, listener] of listeners) {
      cdpClient.on(event, listener);
    }
  }
  getInterceptionStages(browsingContextId) {
    const stages = {
      request: false,
      response: false,
      auth: false
    };
    for (const intercept of __privateGet(this, _intercepts).values()) {
      if (intercept.contexts && !intercept.contexts.includes(browsingContextId)) {
        continue;
      }
      stages.request || (stages.request = intercept.phases.includes(
        "beforeRequestSent"
        /* Network.InterceptPhase.BeforeRequestSent */
      ));
      stages.response || (stages.response = intercept.phases.includes(
        "responseStarted"
        /* Network.InterceptPhase.ResponseStarted */
      ));
      stages.auth || (stages.auth = intercept.phases.includes(
        "authRequired"
        /* Network.InterceptPhase.AuthRequired */
      ));
    }
    return stages;
  }
  getInterceptsForPhase(request, phase) {
    if (request.url === NetworkRequest_js_1.NetworkRequest.unknownParameter) {
      return /* @__PURE__ */ new Set();
    }
    const intercepts = /* @__PURE__ */ new Set();
    for (const [interceptId, intercept] of __privateGet(this, _intercepts).entries()) {
      if (!intercept.phases.includes(phase) || intercept.contexts && !intercept.contexts.includes(request.cdpTarget.topLevelId)) {
        continue;
      }
      if (intercept.urlPatterns.length === 0) {
        intercepts.add(interceptId);
        continue;
      }
      for (const pattern of intercept.urlPatterns) {
        if ((0, NetworkUtils_js_1.matchUrlPattern)(pattern, request.url)) {
          intercepts.add(interceptId);
          break;
        }
      }
    }
    return intercepts;
  }
  disposeRequestMap(sessionId) {
    for (const request of __privateGet(this, _requests).values()) {
      if (request.cdpClient.sessionId === sessionId) {
        __privateGet(this, _requests).delete(request.id);
      }
    }
  }
  /**
   * Adds the given entry to the intercept map.
   * URL patterns are assumed to be parsed.
   *
   * @return The intercept ID.
   */
  addIntercept(value) {
    const interceptId = (0, uuid_js_1.uuidv4)();
    __privateGet(this, _intercepts).set(interceptId, value);
    return interceptId;
  }
  /**
   * Removes the given intercept from the intercept map.
   * Throws NoSuchInterceptException if the intercept does not exist.
   */
  removeIntercept(intercept) {
    if (!__privateGet(this, _intercepts).has(intercept)) {
      throw new protocol_js_1$4.NoSuchInterceptException(`Intercept '${intercept}' does not exist.`);
    }
    __privateGet(this, _intercepts).delete(intercept);
  }
  getRequestById(id) {
    return __privateGet(this, _requests).get(id);
  }
  getRequestByFetchId(fetchId) {
    for (const request of __privateGet(this, _requests).values()) {
      if (request.fetchId === fetchId) {
        return request;
      }
    }
    return;
  }
  addRequest(request) {
    __privateGet(this, _requests).set(request.id, request);
  }
  deleteRequest(id) {
    __privateGet(this, _requests).delete(id);
  }
}
_eventManager8 = new WeakMap();
_logger11 = new WeakMap();
_requests = new WeakMap();
_intercepts = new WeakMap();
_getOrCreateNetworkRequest = new WeakSet();
getOrCreateNetworkRequest_fn = function(id, cdpTarget, redirectCount) {
  let request = this.getRequestById(id);
  if (request) {
    return request;
  }
  request = new NetworkRequest_js_1.NetworkRequest(id, __privateGet(this, _eventManager8), this, cdpTarget, redirectCount, __privateGet(this, _logger11));
  this.addRequest(request);
  return request;
};
NetworkStorage$1.NetworkStorage = NetworkStorage;
var PreloadScriptStorage$1 = {};
Object.defineProperty(PreloadScriptStorage$1, "__esModule", { value: true });
PreloadScriptStorage$1.PreloadScriptStorage = void 0;
class PreloadScriptStorage {
  constructor() {
    /** Tracks all BiDi preload scripts.  */
    __privateAdd(this, _scripts, /* @__PURE__ */ new Set());
  }
  /**
   * Finds all entries that match the given filter (OR logic).
   */
  find(filter) {
    if (!filter) {
      return [...__privateGet(this, _scripts)];
    }
    return [...__privateGet(this, _scripts)].filter((script) => {
      if (filter.id !== void 0 && filter.id === script.id) {
        return true;
      }
      if (filter.targetId !== void 0 && script.targetIds.has(filter.targetId)) {
        return true;
      }
      if (filter.global !== void 0 && // Global scripts have no contexts
      (filter.global && script.contexts === void 0 || // Non global scripts always have contexts
      !filter.global && script.contexts !== void 0)) {
        return true;
      }
      return false;
    });
  }
  add(preloadScript) {
    __privateGet(this, _scripts).add(preloadScript);
  }
  /** Deletes all BiDi preload script entries that match the given filter. */
  remove(filter) {
    for (const preloadScript of this.find(filter)) {
      __privateGet(this, _scripts).delete(preloadScript);
    }
  }
}
_scripts = new WeakMap();
PreloadScriptStorage$1.PreloadScriptStorage = PreloadScriptStorage;
var RealmStorage$1 = {};
Object.defineProperty(RealmStorage$1, "__esModule", { value: true });
RealmStorage$1.RealmStorage = void 0;
const protocol_js_1$3 = protocol;
const WindowRealm_js_1 = WindowRealm$2;
class RealmStorage {
  constructor() {
    /** Tracks handles and their realms sent to the client. */
    __privateAdd(this, _knownHandlesToRealmMap, /* @__PURE__ */ new Map());
    /** Map from realm ID to Realm. */
    __privateAdd(this, _realmMap, /* @__PURE__ */ new Map());
  }
  get knownHandlesToRealmMap() {
    return __privateGet(this, _knownHandlesToRealmMap);
  }
  addRealm(realm) {
    __privateGet(this, _realmMap).set(realm.realmId, realm);
  }
  /** Finds all realms that match the given filter. */
  findRealms(filter) {
    return Array.from(__privateGet(this, _realmMap).values()).filter((realm) => {
      if (filter.realmId !== void 0 && filter.realmId !== realm.realmId) {
        return false;
      }
      if (filter.browsingContextId !== void 0 && !realm.associatedBrowsingContexts.map((browsingContext) => browsingContext.id).includes(filter.browsingContextId)) {
        return false;
      }
      if (filter.sandbox !== void 0 && (!(realm instanceof WindowRealm_js_1.WindowRealm) || filter.sandbox !== realm.sandbox)) {
        return false;
      }
      if (filter.executionContextId !== void 0 && filter.executionContextId !== realm.executionContextId) {
        return false;
      }
      if (filter.origin !== void 0 && filter.origin !== realm.origin) {
        return false;
      }
      if (filter.type !== void 0 && filter.type !== realm.realmType) {
        return false;
      }
      if (filter.cdpSessionId !== void 0 && filter.cdpSessionId !== realm.cdpClient.sessionId) {
        return false;
      }
      return true;
    });
  }
  findRealm(filter) {
    const maybeRealms = this.findRealms(filter);
    if (maybeRealms.length !== 1) {
      return void 0;
    }
    return maybeRealms[0];
  }
  /** Gets the only realm that matches the given filter, if any, otherwise throws. */
  getRealm(filter) {
    const maybeRealm = this.findRealm(filter);
    if (maybeRealm === void 0) {
      throw new protocol_js_1$3.NoSuchFrameException(`Realm ${JSON.stringify(filter)} not found`);
    }
    return maybeRealm;
  }
  /** Deletes all realms that match the given filter. */
  deleteRealms(filter) {
    this.findRealms(filter).map((realm) => {
      realm.dispose();
      __privateGet(this, _realmMap).delete(realm.realmId);
      Array.from(this.knownHandlesToRealmMap.entries()).filter(([, r]) => r === realm.realmId).map(([handle]) => this.knownHandlesToRealmMap.delete(handle));
    });
  }
}
_knownHandlesToRealmMap = new WeakMap();
_realmMap = new WeakMap();
RealmStorage$1.RealmStorage = RealmStorage;
var EventManager$1 = {};
var Buffer$2 = {};
Object.defineProperty(Buffer$2, "__esModule", { value: true });
Buffer$2.Buffer = void 0;
let Buffer$1 = (_g = class {
  /**
   * @param capacity The buffer capacity.
   * @param onItemRemoved Delegate called for each removed element.
   */
  constructor(capacity, onItemRemoved) {
    __privateAdd(this, _capacity, void 0);
    __privateAdd(this, _entries, []);
    __privateAdd(this, _onItemRemoved, void 0);
    __privateSet(this, _capacity, capacity);
    __privateSet(this, _onItemRemoved, onItemRemoved);
  }
  get() {
    return __privateGet(this, _entries);
  }
  add(value) {
    var _a4;
    __privateGet(this, _entries).push(value);
    while (__privateGet(this, _entries).length > __privateGet(this, _capacity)) {
      const item = __privateGet(this, _entries).shift();
      if (item !== void 0) {
        (_a4 = __privateGet(this, _onItemRemoved)) == null ? void 0 : _a4.call(this, item);
      }
    }
  }
}, _capacity = new WeakMap(), _entries = new WeakMap(), _onItemRemoved = new WeakMap(), _g);
Buffer$2.Buffer = Buffer$1;
var DefaultMap$1 = {};
Object.defineProperty(DefaultMap$1, "__esModule", { value: true });
DefaultMap$1.DefaultMap = void 0;
class DefaultMap extends Map {
  constructor(getDefaultValue, entries) {
    super(entries);
    /** The default value to return whenever a key is not present in the map. */
    __privateAdd(this, _getDefaultValue, void 0);
    __privateSet(this, _getDefaultValue, getDefaultValue);
  }
  get(key) {
    if (!this.has(key)) {
      this.set(key, __privateGet(this, _getDefaultValue).call(this, key));
    }
    return super.get(key);
  }
}
_getDefaultValue = new WeakMap();
DefaultMap$1.DefaultMap = DefaultMap;
var IdWrapper$1 = {};
Object.defineProperty(IdWrapper$1, "__esModule", { value: true });
IdWrapper$1.IdWrapper = void 0;
const _IdWrapper = class _IdWrapper {
  constructor() {
    __privateAdd(this, _id6, void 0);
    __privateSet(this, _id6, ++__privateWrapper(_IdWrapper, _counter)._);
  }
  get id() {
    return __privateGet(this, _id6);
  }
};
_counter = new WeakMap();
_id6 = new WeakMap();
__privateAdd(_IdWrapper, _counter, 0);
let IdWrapper = _IdWrapper;
IdWrapper$1.IdWrapper = IdWrapper;
var events = {};
Object.defineProperty(events, "__esModule", { value: true });
events.assertSupportedEvent = events.isCdpEvent = void 0;
const protocol_js_1$2 = protocol;
function isCdpEvent$1(name) {
  var _a4;
  return ((_a4 = name.split(".").at(0)) == null ? void 0 : _a4.startsWith(protocol_js_1$2.ChromiumBidi.BiDiModule.Cdp)) ?? false;
}
events.isCdpEvent = isCdpEvent$1;
function assertSupportedEvent(name) {
  if (!protocol_js_1$2.ChromiumBidi.EVENT_NAMES.has(name) && !isCdpEvent$1(name)) {
    throw new protocol_js_1$2.InvalidArgumentException(`Unknown event: ${name}`);
  }
}
events.assertSupportedEvent = assertSupportedEvent;
var SubscriptionManager$1 = {};
Object.defineProperty(SubscriptionManager$1, "__esModule", { value: true });
SubscriptionManager$1.SubscriptionManager = SubscriptionManager$1.unrollEvents = SubscriptionManager$1.cartesianProduct = void 0;
const protocol_js_1$1 = protocol;
const events_js_1$1 = events;
function cartesianProduct(...a) {
  return a.reduce((a2, b2) => a2.flatMap((d) => b2.map((e) => [d, e].flat())));
}
SubscriptionManager$1.cartesianProduct = cartesianProduct;
function unrollEvents(events2) {
  const allEvents = /* @__PURE__ */ new Set();
  function addEvents(events3) {
    for (const event of events3) {
      allEvents.add(event);
    }
  }
  for (const event of events2) {
    switch (event) {
      case protocol_js_1$1.ChromiumBidi.BiDiModule.BrowsingContext:
        addEvents(Object.values(protocol_js_1$1.ChromiumBidi.BrowsingContext.EventNames));
        break;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Log:
        addEvents(Object.values(protocol_js_1$1.ChromiumBidi.Log.EventNames));
        break;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Network:
        addEvents(Object.values(protocol_js_1$1.ChromiumBidi.Network.EventNames));
        break;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Script:
        addEvents(Object.values(protocol_js_1$1.ChromiumBidi.Script.EventNames));
        break;
      default:
        allEvents.add(event);
    }
  }
  return [...allEvents.values()];
}
SubscriptionManager$1.unrollEvents = unrollEvents;
class SubscriptionManager {
  constructor(browsingContextStorage) {
    __privateAdd(this, _getEventSubscriptionPriorityForChannel);
    __privateAdd(this, _checkUnsubscribe);
    __privateAdd(this, _subscriptionPriority, 0);
    // BrowsingContext `null` means the event has subscription across all the
    // browsing contexts.
    // Channel `null` means no `channel` should be added.
    __privateAdd(this, _channelToContextToEventMap, /* @__PURE__ */ new Map());
    __privateAdd(this, _browsingContextStorage11, void 0);
    __privateSet(this, _browsingContextStorage11, browsingContextStorage);
  }
  getChannelsSubscribedToEvent(eventMethod, contextId) {
    const prioritiesAndChannels = Array.from(__privateGet(this, _channelToContextToEventMap).keys()).map((channel) => ({
      priority: __privateMethod(this, _getEventSubscriptionPriorityForChannel, getEventSubscriptionPriorityForChannel_fn).call(this, eventMethod, contextId, channel),
      channel
    })).filter(({ priority }) => priority !== null);
    return prioritiesAndChannels.sort((a, b2) => a.priority - b2.priority).map(({ channel }) => channel);
  }
  /**
   * @param module BiDi+ module
   * @param contextId `null` == globally subscribed
   *
   * @returns
   */
  isSubscribedTo(moduleOrEvent, contextId = null) {
    const topLevelContext = __privateGet(this, _browsingContextStorage11).findTopLevelContextId(contextId);
    for (const browserContextToEventMap of __privateGet(this, _channelToContextToEventMap).values()) {
      for (const [id, eventMap] of browserContextToEventMap.entries()) {
        if (topLevelContext !== id && id !== null) {
          continue;
        }
        for (const event of eventMap.keys()) {
          if (
            // Event explicitly subscribed
            event === moduleOrEvent || // Event subscribed via module
            event === moduleOrEvent.split(".").at(0) || // Event explicitly subscribed compared to module
            event.split(".").at(0) === moduleOrEvent
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }
  subscribe(event, contextId, channel) {
    contextId = __privateGet(this, _browsingContextStorage11).findTopLevelContextId(contextId);
    switch (event) {
      case protocol_js_1$1.ChromiumBidi.BiDiModule.BrowsingContext:
        Object.values(protocol_js_1$1.ChromiumBidi.BrowsingContext.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel));
        return;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Log:
        Object.values(protocol_js_1$1.ChromiumBidi.Log.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel));
        return;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Network:
        Object.values(protocol_js_1$1.ChromiumBidi.Network.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel));
        return;
      case protocol_js_1$1.ChromiumBidi.BiDiModule.Script:
        Object.values(protocol_js_1$1.ChromiumBidi.Script.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel));
        return;
    }
    if (!__privateGet(this, _channelToContextToEventMap).has(channel)) {
      __privateGet(this, _channelToContextToEventMap).set(channel, /* @__PURE__ */ new Map());
    }
    const contextToEventMap = __privateGet(this, _channelToContextToEventMap).get(channel);
    if (!contextToEventMap.has(contextId)) {
      contextToEventMap.set(contextId, /* @__PURE__ */ new Map());
    }
    const eventMap = contextToEventMap.get(contextId);
    if (eventMap.has(event)) {
      return;
    }
    eventMap.set(event, __privateWrapper(this, _subscriptionPriority)._++);
  }
  /**
   * Unsubscribes atomically from all events in the given contexts and channel.
   */
  unsubscribeAll(events2, contextIds, channel) {
    for (const contextId of contextIds) {
      if (contextId !== null) {
        __privateGet(this, _browsingContextStorage11).getContext(contextId);
      }
    }
    const eventContextPairs = cartesianProduct(unrollEvents(events2), contextIds);
    eventContextPairs.map(([event, contextId]) => __privateMethod(this, _checkUnsubscribe, checkUnsubscribe_fn).call(this, event, contextId, channel)).forEach((unsubscribe) => unsubscribe());
  }
  /**
   * Unsubscribes from the event in the given context and channel.
   * Syntactic sugar for "unsubscribeAll".
   */
  unsubscribe(eventName, contextId, channel) {
    this.unsubscribeAll([eventName], [contextId], channel);
  }
}
_subscriptionPriority = new WeakMap();
_channelToContextToEventMap = new WeakMap();
_browsingContextStorage11 = new WeakMap();
_getEventSubscriptionPriorityForChannel = new WeakSet();
getEventSubscriptionPriorityForChannel_fn = function(eventMethod, contextId, channel) {
  const contextToEventMap = __privateGet(this, _channelToContextToEventMap).get(channel);
  if (contextToEventMap === void 0) {
    return null;
  }
  const maybeTopLevelContextId = __privateGet(this, _browsingContextStorage11).findTopLevelContextId(contextId);
  const relevantContexts = [.../* @__PURE__ */ new Set([null, maybeTopLevelContextId])];
  const priorities = relevantContexts.map((context) => {
    var _a4, _b3;
    const priority = (_a4 = contextToEventMap.get(context)) == null ? void 0 : _a4.get(eventMethod);
    if ((0, events_js_1$1.isCdpEvent)(eventMethod)) {
      const cdpPriority = (_b3 = contextToEventMap.get(context)) == null ? void 0 : _b3.get(protocol_js_1$1.ChromiumBidi.BiDiModule.Cdp);
      return priority && cdpPriority ? Math.min(priority, cdpPriority) : (
        // At this point we know that we have subscribed
        // to only one of the two
        priority ?? cdpPriority
      );
    }
    return priority;
  }).filter((p) => p !== void 0);
  if (priorities.length === 0) {
    return null;
  }
  return Math.min(...priorities);
};
_checkUnsubscribe = new WeakSet();
checkUnsubscribe_fn = function(event, contextId, channel) {
  contextId = __privateGet(this, _browsingContextStorage11).findTopLevelContextId(contextId);
  if (!__privateGet(this, _channelToContextToEventMap).has(channel)) {
    throw new protocol_js_1$1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? "null" : contextId}. No subscription found.`);
  }
  const contextToEventMap = __privateGet(this, _channelToContextToEventMap).get(channel);
  if (!contextToEventMap.has(contextId)) {
    throw new protocol_js_1$1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? "null" : contextId}. No subscription found.`);
  }
  const eventMap = contextToEventMap.get(contextId);
  if (!eventMap.has(event)) {
    throw new protocol_js_1$1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? "null" : contextId}. No subscription found.`);
  }
  return () => {
    eventMap.delete(event);
    if (eventMap.size === 0) {
      contextToEventMap.delete(event);
    }
    if (contextToEventMap.size === 0) {
      __privateGet(this, _channelToContextToEventMap).delete(channel);
    }
  };
};
SubscriptionManager$1.SubscriptionManager = SubscriptionManager;
Object.defineProperty(EventManager$1, "__esModule", { value: true });
EventManager$1.EventManager = void 0;
const protocol_js_1 = protocol;
const Buffer_js_1 = Buffer$2;
const DefaultMap_js_1 = DefaultMap$1;
const EventEmitter_js_1$1 = EventEmitter$1;
const IdWrapper_js_1 = IdWrapper$1;
const OutgoingMessage_js_1 = OutgoingMessage$1;
const events_js_1 = events;
const SubscriptionManager_js_1 = SubscriptionManager$1;
class EventWrapper {
  constructor(event, contextId) {
    __privateAdd(this, _idWrapper, new IdWrapper_js_1.IdWrapper());
    __privateAdd(this, _contextId, void 0);
    __privateAdd(this, _event, void 0);
    __privateSet(this, _event, event);
    __privateSet(this, _contextId, contextId);
  }
  get id() {
    return __privateGet(this, _idWrapper).id;
  }
  get contextId() {
    return __privateGet(this, _contextId);
  }
  get event() {
    return __privateGet(this, _event);
  }
}
_idWrapper = new WeakMap();
_contextId = new WeakMap();
_event = new WeakMap();
const eventBufferLength = /* @__PURE__ */ new Map([[protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded, 100]]);
const _EventManager = class _EventManager extends EventEmitter_js_1$1.EventEmitter {
  constructor(browsingContextStorage) {
    super();
    /**
     * If the event is buffer-able, put it in the buffer.
     */
    __privateAdd(this, _bufferEvent);
    /**
     * If the event is buffer-able, mark it as sent to the given contextId and channel.
     */
    __privateAdd(this, _markEventSent);
    /**
     * Returns events which are buffered and not yet sent to the given channel events.
     */
    __privateAdd(this, _getBufferedEvents);
    /**
     * Maps event name to a set of contexts where this event already happened.
     * Needed for getting buffered events from all the contexts in case of
     * subscripting to all contexts.
     */
    __privateAdd(this, _eventToContextsMap, new DefaultMap_js_1.DefaultMap(() => /* @__PURE__ */ new Set()));
    /**
     * Maps `eventName` + `browsingContext` to buffer. Used to get buffered events
     * during subscription. Channel-agnostic.
     */
    __privateAdd(this, _eventBuffers, /* @__PURE__ */ new Map());
    /**
     * Maps `eventName` + `browsingContext` + `channel` to last sent event id.
     * Used to avoid sending duplicated events when user
     * subscribes -> unsubscribes -> subscribes.
     */
    __privateAdd(this, _lastMessageSent, /* @__PURE__ */ new Map());
    __privateAdd(this, _subscriptionManager, void 0);
    __privateAdd(this, _browsingContextStorage12, void 0);
    __privateSet(this, _browsingContextStorage12, browsingContextStorage);
    __privateSet(this, _subscriptionManager, new SubscriptionManager_js_1.SubscriptionManager(browsingContextStorage));
  }
  get subscriptionManager() {
    return __privateGet(this, _subscriptionManager);
  }
  registerEvent(event, contextId) {
    this.registerPromiseEvent(Promise.resolve({
      kind: "success",
      value: event
    }), contextId, event.method);
  }
  registerPromiseEvent(event, contextId, eventName) {
    const eventWrapper = new EventWrapper(event, contextId);
    const sortedChannels = __privateGet(this, _subscriptionManager).getChannelsSubscribedToEvent(eventName, contextId);
    __privateMethod(this, _bufferEvent, bufferEvent_fn).call(this, eventWrapper, eventName);
    for (const channel of sortedChannels) {
      this.emit("event", {
        message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(event, channel),
        event: eventName
      });
      __privateMethod(this, _markEventSent, markEventSent_fn).call(this, eventWrapper, channel, eventName);
    }
  }
  async subscribe(eventNames, contextIds, channel) {
    for (const name of eventNames) {
      (0, events_js_1.assertSupportedEvent)(name);
    }
    for (const contextId of contextIds) {
      if (contextId !== null) {
        __privateGet(this, _browsingContextStorage12).getContext(contextId);
      }
    }
    for (const eventName of eventNames) {
      for (const contextId of contextIds) {
        __privateGet(this, _subscriptionManager).subscribe(eventName, contextId, channel);
        for (const eventWrapper of __privateMethod(this, _getBufferedEvents, getBufferedEvents_fn).call(this, eventName, contextId, channel)) {
          this.emit("event", {
            message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(eventWrapper.event, channel),
            event: eventName
          });
          __privateMethod(this, _markEventSent, markEventSent_fn).call(this, eventWrapper, channel, eventName);
        }
      }
    }
    await this.toggleModulesIfNeeded();
  }
  async unsubscribe(eventNames, contextIds, channel) {
    for (const name of eventNames) {
      (0, events_js_1.assertSupportedEvent)(name);
    }
    __privateGet(this, _subscriptionManager).unsubscribeAll(eventNames, contextIds, channel);
    await this.toggleModulesIfNeeded();
  }
  async toggleModulesIfNeeded() {
    await Promise.all(__privateGet(this, _browsingContextStorage12).getAllContexts().map(async (context) => {
      return await context.toggleModulesIfNeeded();
    }));
  }
};
_eventToContextsMap = new WeakMap();
_eventBuffers = new WeakMap();
_lastMessageSent = new WeakMap();
_subscriptionManager = new WeakMap();
_browsingContextStorage12 = new WeakMap();
_getMapKey = new WeakSet();
getMapKey_fn = function(eventName, browsingContext, channel) {
  return JSON.stringify({ eventName, browsingContext, channel });
};
_bufferEvent = new WeakSet();
bufferEvent_fn = function(eventWrapper, eventName) {
  var _a4;
  if (!eventBufferLength.has(eventName)) {
    return;
  }
  const bufferMapKey = __privateMethod(_a4 = _EventManager, _getMapKey, getMapKey_fn).call(_a4, eventName, eventWrapper.contextId);
  if (!__privateGet(this, _eventBuffers).has(bufferMapKey)) {
    __privateGet(this, _eventBuffers).set(bufferMapKey, new Buffer_js_1.Buffer(eventBufferLength.get(eventName)));
  }
  __privateGet(this, _eventBuffers).get(bufferMapKey).add(eventWrapper);
  __privateGet(this, _eventToContextsMap).get(eventName).add(eventWrapper.contextId);
};
_markEventSent = new WeakSet();
markEventSent_fn = function(eventWrapper, channel, eventName) {
  var _a4;
  if (!eventBufferLength.has(eventName)) {
    return;
  }
  const lastSentMapKey = __privateMethod(_a4 = _EventManager, _getMapKey, getMapKey_fn).call(_a4, eventName, eventWrapper.contextId, channel);
  __privateGet(this, _lastMessageSent).set(lastSentMapKey, Math.max(__privateGet(this, _lastMessageSent).get(lastSentMapKey) ?? 0, eventWrapper.id));
};
_getBufferedEvents = new WeakSet();
getBufferedEvents_fn = function(eventName, contextId, channel) {
  var _a4, _b3, _c3;
  const bufferMapKey = __privateMethod(_a4 = _EventManager, _getMapKey, getMapKey_fn).call(_a4, eventName, contextId);
  const lastSentMapKey = __privateMethod(_b3 = _EventManager, _getMapKey, getMapKey_fn).call(_b3, eventName, contextId, channel);
  const lastSentMessageId = __privateGet(this, _lastMessageSent).get(lastSentMapKey) ?? -Infinity;
  const result = ((_c3 = __privateGet(this, _eventBuffers).get(bufferMapKey)) == null ? void 0 : _c3.get().filter((wrapper) => wrapper.id > lastSentMessageId)) ?? [];
  if (contextId === null) {
    Array.from(__privateGet(this, _eventToContextsMap).get(eventName).keys()).filter((_contextId2) => (
      // Events without context are already in the result.
      _contextId2 !== null && // Events from deleted contexts should not be sent.
      __privateGet(this, _browsingContextStorage12).hasContext(_contextId2)
    )).map((_contextId2) => __privateMethod(this, _getBufferedEvents, getBufferedEvents_fn).call(this, eventName, _contextId2, channel)).forEach((events2) => result.push(...events2));
  }
  return result.sort((e1, e2) => e1.id - e2.id);
};
/**
 * Returns consistent key to be used to access value maps.
 */
__privateAdd(_EventManager, _getMapKey);
let EventManager = _EventManager;
EventManager$1.EventManager = EventManager;
Object.defineProperty(BidiServer$1, "__esModule", { value: true });
BidiServer$1.BidiServer = void 0;
const EventEmitter_js_1 = EventEmitter$1;
const log_js_1 = log;
const ProcessingQueue_js_1 = ProcessingQueue$1;
const CommandProcessor_js_1 = CommandProcessor$1;
const CdpTargetManager_js_1 = CdpTargetManager$1;
const BrowsingContextStorage_js_1 = BrowsingContextStorage$1;
const NetworkStorage_js_1 = NetworkStorage$1;
const PreloadScriptStorage_js_1 = PreloadScriptStorage$1;
const RealmStorage_js_1 = RealmStorage$1;
const EventManager_js_1 = EventManager$1;
const _BidiServer = class _BidiServer extends EventEmitter_js_1.EventEmitter {
  constructor(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, options, parser, logger) {
    super();
    __privateAdd(this, _topLevelContextsLoaded);
    __privateAdd(this, _messageQueue, void 0);
    __privateAdd(this, _transport, void 0);
    __privateAdd(this, _commandProcessor, void 0);
    __privateAdd(this, _eventManager9, void 0);
    __privateAdd(this, _browsingContextStorage13, new BrowsingContextStorage_js_1.BrowsingContextStorage());
    __privateAdd(this, _realmStorage8, new RealmStorage_js_1.RealmStorage());
    __privateAdd(this, _preloadScriptStorage4, new PreloadScriptStorage_js_1.PreloadScriptStorage());
    __privateAdd(this, _logger12, void 0);
    __privateAdd(this, _handleIncomingMessage, (message) => {
      void __privateGet(this, _commandProcessor).processCommand(message).catch((error) => {
        var _a4;
        (_a4 = __privateGet(this, _logger12)) == null ? void 0 : _a4.call(this, log_js_1.LogType.debugError, error);
      });
    });
    __privateAdd(this, _processOutgoingMessage, async (messageEntry) => {
      const message = messageEntry.message;
      if (messageEntry.channel !== null) {
        message["channel"] = messageEntry.channel;
      }
      await __privateGet(this, _transport).sendMessage(message);
    });
    __privateSet(this, _logger12, logger);
    __privateSet(this, _messageQueue, new ProcessingQueue_js_1.ProcessingQueue(__privateGet(this, _processOutgoingMessage), __privateGet(this, _logger12)));
    __privateSet(this, _transport, bidiTransport);
    __privateGet(this, _transport).setOnMessage(__privateGet(this, _handleIncomingMessage));
    __privateSet(this, _eventManager9, new EventManager_js_1.EventManager(__privateGet(this, _browsingContextStorage13)));
    const networkStorage = new NetworkStorage_js_1.NetworkStorage(__privateGet(this, _eventManager9), browserCdpClient, logger);
    new CdpTargetManager_js_1.CdpTargetManager(cdpConnection, browserCdpClient, selfTargetId, __privateGet(this, _eventManager9), __privateGet(this, _browsingContextStorage13), __privateGet(this, _realmStorage8), networkStorage, __privateGet(this, _preloadScriptStorage4), (options == null ? void 0 : options.acceptInsecureCerts) ?? false, defaultUserContextId, logger);
    __privateSet(this, _commandProcessor, new CommandProcessor_js_1.CommandProcessor(cdpConnection, browserCdpClient, __privateGet(this, _eventManager9), __privateGet(this, _browsingContextStorage13), __privateGet(this, _realmStorage8), __privateGet(this, _preloadScriptStorage4), networkStorage, parser, __privateGet(this, _logger12)));
    __privateGet(this, _eventManager9).on("event", ({ message, event }) => {
      this.emitOutgoingMessage(message, event);
    });
    __privateGet(this, _commandProcessor).on("response", ({ message, event }) => {
      this.emitOutgoingMessage(message, event);
    });
  }
  /**
   * Creates and starts BiDi Mapper instance.
   */
  static async createAndStart(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, options, parser, logger) {
    var _a4;
    const [{ browserContextIds }, { targetInfos }] = await Promise.all([
      browserCdpClient.sendCommand("Target.getBrowserContexts"),
      browserCdpClient.sendCommand("Target.getTargets")
    ]);
    let defaultUserContextId = "default";
    for (const info of targetInfos) {
      if (info.browserContextId && !browserContextIds.includes(info.browserContextId)) {
        defaultUserContextId = info.browserContextId;
        break;
      }
    }
    const server = new _BidiServer(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, options, parser, logger);
    await browserCdpClient.sendCommand("Target.setDiscoverTargets", {
      discover: true
    });
    await browserCdpClient.sendCommand("Target.setAutoAttach", {
      autoAttach: true,
      waitForDebuggerOnStart: true,
      flatten: true
    });
    await __privateMethod(_a4 = server, _topLevelContextsLoaded, topLevelContextsLoaded_fn).call(_a4);
    return server;
  }
  /**
   * Sends BiDi message.
   */
  emitOutgoingMessage(messageEntry, event) {
    __privateGet(this, _messageQueue).add(messageEntry, event);
  }
  close() {
    __privateGet(this, _transport).close();
  }
};
_messageQueue = new WeakMap();
_transport = new WeakMap();
_commandProcessor = new WeakMap();
_eventManager9 = new WeakMap();
_browsingContextStorage13 = new WeakMap();
_realmStorage8 = new WeakMap();
_preloadScriptStorage4 = new WeakMap();
_logger12 = new WeakMap();
_handleIncomingMessage = new WeakMap();
_processOutgoingMessage = new WeakMap();
_topLevelContextsLoaded = new WeakSet();
topLevelContextsLoaded_fn = async function() {
  await Promise.all(__privateGet(this, _browsingContextStorage13).getTopLevelContexts().map((c) => c.lifecycleLoaded()));
};
let BidiServer = _BidiServer;
BidiServer$1.BidiServer = BidiServer;
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.OutgoingMessage = exports2.EventEmitter = exports2.BidiServer = void 0;
  var BidiServer_js_1 = BidiServer$1;
  Object.defineProperty(exports2, "BidiServer", { enumerable: true, get: function() {
    return BidiServer_js_1.BidiServer;
  } });
  var EventEmitter_js_12 = EventEmitter$1;
  Object.defineProperty(exports2, "EventEmitter", { enumerable: true, get: function() {
    return EventEmitter_js_12.EventEmitter;
  } });
  var OutgoingMessage_js_12 = OutgoingMessage$1;
  Object.defineProperty(exports2, "OutgoingMessage", { enumerable: true, get: function() {
    return OutgoingMessage_js_12.OutgoingMessage;
  } });
})(BidiMapper);
const _BidiCdpSession = class _BidiCdpSession extends main.CDPSession {
  constructor(frame, sessionId) {
    super();
    __privateAdd(this, _detached, false);
    __privateAdd(this, _connection, void 0);
    __privateAdd(this, _sessionId, main.Deferred.create());
    __publicField(this, "frame");
    /**
     * @internal
     */
    __publicField(this, "onClose", () => {
      _BidiCdpSession.sessions.delete(this.id());
      __privateSet(this, _detached, true);
    });
    this.frame = frame;
    if (!this.frame.page().browser().cdpSupported) {
      return;
    }
    const connection = this.frame.page().browser().connection;
    __privateSet(this, _connection, connection);
    if (sessionId) {
      __privateGet(this, _sessionId).resolve(sessionId);
      _BidiCdpSession.sessions.set(sessionId, this);
    } else {
      (async () => {
        try {
          const { result } = await connection.send("cdp.getSession", {
            context: frame._id
          });
          __privateGet(this, _sessionId).resolve(result.session);
          _BidiCdpSession.sessions.set(result.session, this);
        } catch (error) {
          __privateGet(this, _sessionId).reject(error);
        }
      })();
    }
    _BidiCdpSession.sessions.set(__privateGet(this, _sessionId).value(), this);
  }
  connection() {
    return void 0;
  }
  async send(method, params, options) {
    if (__privateGet(this, _connection) === void 0) {
      throw new main.UnsupportedOperation("CDP support is required for this feature. The current browser does not support CDP.");
    }
    if (__privateGet(this, _detached)) {
      throw new main.TargetCloseError(`Protocol error (${method}): Session closed. Most likely the page has been closed.`);
    }
    const session = await __privateGet(this, _sessionId).valueOrThrow();
    const { result } = await __privateGet(this, _connection).send("cdp.sendCommand", {
      method,
      params,
      session
    }, options == null ? void 0 : options.timeout);
    return result.result;
  }
  async detach() {
    if (__privateGet(this, _connection) === void 0 || __privateGet(this, _connection).closed || __privateGet(this, _detached)) {
      return;
    }
    try {
      await this.frame.client.send("Target.detachFromTarget", {
        sessionId: this.id()
      });
    } finally {
      this.onClose();
    }
  }
  id() {
    const value = __privateGet(this, _sessionId).value();
    return typeof value === "string" ? value : "";
  }
};
_detached = new WeakMap();
_connection = new WeakMap();
_sessionId = new WeakMap();
__publicField(_BidiCdpSession, "sessions", /* @__PURE__ */ new Map());
let BidiCdpSession = _BidiCdpSession;
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const debugProtocolSend = main.debug("puppeteer:webDriverBiDi:SEND ►");
const debugProtocolReceive = main.debug("puppeteer:webDriverBiDi:RECV ◀");
class BidiConnection extends main.EventEmitter {
  constructor(url, transport, delay = 0, timeout) {
    super();
    __privateAdd(this, _url2, void 0);
    __privateAdd(this, _transport2, void 0);
    __privateAdd(this, _delay, void 0);
    __privateAdd(this, _timeout, 0);
    __privateAdd(this, _closed, false);
    __privateAdd(this, _callbacks, new main.CallbackRegistry());
    __privateAdd(this, _emitters, []);
    __privateSet(this, _url2, url);
    __privateSet(this, _delay, delay);
    __privateSet(this, _timeout, timeout ?? 18e4);
    __privateSet(this, _transport2, transport);
    __privateGet(this, _transport2).onmessage = this.onMessage.bind(this);
    __privateGet(this, _transport2).onclose = this.unbind.bind(this);
  }
  get closed() {
    return __privateGet(this, _closed);
  }
  get url() {
    return __privateGet(this, _url2);
  }
  pipeTo(emitter) {
    __privateGet(this, _emitters).push(emitter);
  }
  emit(type, event) {
    for (const emitter of __privateGet(this, _emitters)) {
      emitter.emit(type, event);
    }
    return super.emit(type, event);
  }
  send(method, params, timeout) {
    main.assert(!__privateGet(this, _closed), "Protocol error: Connection closed.");
    return __privateGet(this, _callbacks).create(method, timeout ?? __privateGet(this, _timeout), (id) => {
      const stringifiedMessage = JSON.stringify({
        id,
        method,
        params
      });
      debugProtocolSend(stringifiedMessage);
      __privateGet(this, _transport2).send(stringifiedMessage);
    });
  }
  /**
   * @internal
   */
  async onMessage(message) {
    var _a4;
    if (__privateGet(this, _delay)) {
      await new Promise((f) => {
        return setTimeout(f, __privateGet(this, _delay));
      });
    }
    debugProtocolReceive(message);
    const object = JSON.parse(message);
    if ("type" in object) {
      switch (object.type) {
        case "success":
          __privateGet(this, _callbacks).resolve(object.id, object);
          return;
        case "error":
          if (object.id === null) {
            break;
          }
          __privateGet(this, _callbacks).reject(object.id, createProtocolError(object), object.message);
          return;
        case "event":
          if (isCdpEvent(object)) {
            (_a4 = BidiCdpSession.sessions.get(object.params.session)) == null ? void 0 : _a4.emit(object.params.event, object.params.params);
            return;
          }
          this.emit(object.method, object.params);
          return;
      }
    }
    if ("id" in object) {
      __privateGet(this, _callbacks).reject(object.id, `Protocol Error. Message is not in BiDi protocol format: '${message}'`, object.message);
    }
    main.debugError(object);
  }
  /**
   * Unbinds the connection, but keeps the transport open. Useful when the transport will
   * be reused by other connection e.g. with different protocol.
   * @internal
   */
  unbind() {
    if (__privateGet(this, _closed)) {
      return;
    }
    __privateSet(this, _closed, true);
    __privateGet(this, _transport2).onmessage = () => {
    };
    __privateGet(this, _transport2).onclose = () => {
    };
    __privateGet(this, _callbacks).clear();
  }
  /**
   * Unbinds the connection and closes the transport.
   */
  dispose() {
    this.unbind();
    __privateGet(this, _transport2).close();
  }
  getPendingProtocolErrors() {
    return __privateGet(this, _callbacks).getPendingProtocolErrors();
  }
}
_url2 = new WeakMap();
_transport2 = new WeakMap();
_delay = new WeakMap();
_timeout = new WeakMap();
_closed = new WeakMap();
_callbacks = new WeakMap();
_emitters = new WeakMap();
function createProtocolError(object) {
  let message = `${object.error} ${object.message}`;
  if (object.stacktrace) {
    message += ` ${object.stacktrace}`;
  }
  return message;
}
function isCdpEvent(event) {
  return event.method.startsWith("cdp.");
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const bidiServerLogger = (prefix, ...args) => {
  main.debug(`bidi:${prefix}`)(args);
};
async function connectBidiOverCdp(cdp2, options) {
  const transportBiDi = new NoOpTransport();
  const cdpConnectionAdapter = new CdpConnectionAdapter(cdp2);
  const pptrTransport = {
    send(message) {
      transportBiDi.emitMessage(JSON.parse(message));
    },
    close() {
      bidiServer.close();
      cdpConnectionAdapter.close();
      cdp2.dispose();
    },
    onmessage(_message2) {
    }
  };
  transportBiDi.on("bidiResponse", (message) => {
    pptrTransport.onmessage(JSON.stringify(message));
  });
  const pptrBiDiConnection = new BidiConnection(cdp2.url(), pptrTransport, cdp2.delay, cdp2.timeout);
  const bidiServer = await BidiMapper.BidiServer.createAndStart(
    transportBiDi,
    cdpConnectionAdapter,
    // TODO: most likely need a little bit of refactoring
    cdpConnectionAdapter.browserClient(),
    "",
    options,
    void 0,
    bidiServerLogger
  );
  return pptrBiDiConnection;
}
class CdpConnectionAdapter {
  constructor(cdp2) {
    __privateAdd(this, _cdp, void 0);
    __privateAdd(this, _adapters, /* @__PURE__ */ new Map());
    __privateAdd(this, _browserCdpConnection, void 0);
    __privateSet(this, _cdp, cdp2);
    __privateSet(this, _browserCdpConnection, new CDPClientAdapter(cdp2));
  }
  browserClient() {
    return __privateGet(this, _browserCdpConnection);
  }
  getCdpClient(id) {
    const session = __privateGet(this, _cdp).session(id);
    if (!session) {
      throw new Error(`Unknown CDP session with id ${id}`);
    }
    if (!__privateGet(this, _adapters).has(session)) {
      const adapter = new CDPClientAdapter(session, id, __privateGet(this, _browserCdpConnection));
      __privateGet(this, _adapters).set(session, adapter);
      return adapter;
    }
    return __privateGet(this, _adapters).get(session);
  }
  close() {
    __privateGet(this, _browserCdpConnection).close();
    for (const adapter of __privateGet(this, _adapters).values()) {
      adapter.close();
    }
  }
}
_cdp = new WeakMap();
_adapters = new WeakMap();
_browserCdpConnection = new WeakMap();
class CDPClientAdapter extends BidiMapper.EventEmitter {
  constructor(client, sessionId, browserClient) {
    super();
    __privateAdd(this, _closed2, false);
    __privateAdd(this, _client, void 0);
    __publicField(this, "sessionId");
    __privateAdd(this, _browserClient, void 0);
    __privateAdd(this, _forwardMessage, (method, event) => {
      this.emit(method, event);
    });
    __privateSet(this, _client, client);
    this.sessionId = sessionId;
    __privateSet(this, _browserClient, browserClient);
    __privateGet(this, _client).on("*", __privateGet(this, _forwardMessage));
  }
  browserClient() {
    return __privateGet(this, _browserClient);
  }
  async sendCommand(method, ...params) {
    if (__privateGet(this, _closed2)) {
      return;
    }
    try {
      return await __privateGet(this, _client).send(method, ...params);
    } catch (err) {
      if (__privateGet(this, _closed2)) {
        return;
      }
      throw err;
    }
  }
  close() {
    __privateGet(this, _client).off("*", __privateGet(this, _forwardMessage));
    __privateSet(this, _closed2, true);
  }
  isCloseError(error) {
    return error instanceof main.TargetCloseError;
  }
}
_closed2 = new WeakMap();
_client = new WeakMap();
_browserClient = new WeakMap();
_forwardMessage = new WeakMap();
class NoOpTransport extends BidiMapper.EventEmitter {
  constructor() {
    super(...arguments);
    __privateAdd(this, _onMessage, async (_m2) => {
      return;
    });
  }
  emitMessage(message) {
    void __privateGet(this, _onMessage).call(this, message);
  }
  setOnMessage(onMessage) {
    __privateSet(this, _onMessage, onMessage);
  }
  async sendMessage(message) {
    this.emit("bidiResponse", message);
  }
  close() {
    __privateSet(this, _onMessage, async (_m2) => {
      return;
    });
  }
}
_onMessage = new WeakMap();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$d = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$d = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let Navigation = (() => {
  var _request3, _navigation2, _browsingContext, _disposables2, _id7, _initialize7, initialize_fn7, _matches, matches_fn, _session, session_get, _a4;
  let _classSuper = main.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  return _a4 = class extends _classSuper {
    constructor(context) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _matches);
      __privateAdd(this, _session);
      __privateAdd(this, _request3, (__runInitializers$d(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _navigation2, void 0);
      __privateAdd(this, _browsingContext, void 0);
      __privateAdd(this, _disposables2, new main.DisposableStack());
      __privateAdd(this, _id7, void 0);
      __privateSet(this, _browsingContext, context);
    }
    static from(context) {
      var _a5;
      const navigation = new _a4(context);
      __privateMethod(_a5 = navigation, _initialize7, initialize_fn7).call(_a5);
      return navigation;
    }
    get disposed() {
      return __privateGet(this, _disposables2).disposed;
    }
    get request() {
      return __privateGet(this, _request3);
    }
    get navigation() {
      return __privateGet(this, _navigation2);
    }
    dispose() {
      this[main.disposeSymbol]();
    }
    [(_dispose_decorators = [main.inertIfDisposed], main.disposeSymbol)]() {
      __privateGet(this, _disposables2).dispose();
      super[main.disposeSymbol]();
    }
  }, _request3 = new WeakMap(), _navigation2 = new WeakMap(), _browsingContext = new WeakMap(), _disposables2 = new WeakMap(), _id7 = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = function() {
    const browsingContextEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(__privateGet(this, _browsingContext)));
    browsingContextEmitter.once("closed", () => {
      this.emit("failed", {
        url: __privateGet(this, _browsingContext).url,
        timestamp: /* @__PURE__ */ new Date()
      });
      this.dispose();
    });
    browsingContextEmitter.on("request", ({ request }) => {
      if (request.navigation === void 0 || // If a request with a navigation ID comes in, then the navigation ID is
      // for this navigation.
      !__privateMethod(this, _matches, matches_fn).call(this, request.navigation)) {
        return;
      }
      __privateSet(this, _request3, request);
      this.emit("request", request);
      const requestEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(__privateGet(this, _request3)));
      requestEmitter.on("redirect", (request2) => {
        __privateSet(this, _request3, request2);
      });
    });
    const sessionEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(__privateGet(this, _session, session_get)));
    sessionEmitter.on("browsingContext.navigationStarted", (info) => {
      if (info.context !== __privateGet(this, _browsingContext).id || __privateGet(this, _navigation2) !== void 0) {
        return;
      }
      __privateSet(this, _navigation2, _a4.from(__privateGet(this, _browsingContext)));
    });
    for (const eventName of [
      "browsingContext.domContentLoaded",
      "browsingContext.load"
    ]) {
      sessionEmitter.on(eventName, (info) => {
        if (info.context !== __privateGet(this, _browsingContext).id || info.navigation === null || !__privateMethod(this, _matches, matches_fn).call(this, info.navigation)) {
          return;
        }
        this.dispose();
      });
    }
    for (const [eventName, event] of [
      ["browsingContext.fragmentNavigated", "fragment"],
      ["browsingContext.navigationFailed", "failed"],
      ["browsingContext.navigationAborted", "aborted"]
    ]) {
      sessionEmitter.on(eventName, (info) => {
        if (info.context !== __privateGet(this, _browsingContext).id || // Note we don't check if `navigation` is null since `null` means the
        // fragment navigated.
        !__privateMethod(this, _matches, matches_fn).call(this, info.navigation)) {
          return;
        }
        this.emit(event, {
          url: info.url,
          timestamp: new Date(info.timestamp)
        });
        this.dispose();
      });
    }
  }, _matches = new WeakSet(), matches_fn = function(navigation) {
    if (__privateGet(this, _navigation2) !== void 0 && !__privateGet(this, _navigation2).disposed) {
      return false;
    }
    if (__privateGet(this, _id7) === void 0) {
      __privateSet(this, _id7, navigation);
      return true;
    }
    return __privateGet(this, _id7) === navigation;
  }, _session = new WeakSet(), session_get = function() {
    return __privateGet(this, _browsingContext).userContext.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$d(_a4, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$c = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$c = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var _a$1;
let Realm = (() => {
  var _reason, _a4;
  let _classSuper = main.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _disown_decorators;
  let _callFunction_decorators;
  let _evaluate_decorators;
  let _resolveExecutionContextId_decorators;
  return _a4 = class extends _classSuper {
    constructor(id, origin) {
      super();
      __privateAdd(this, _reason, (__runInitializers$c(this, _instanceExtraInitializers), void 0));
      __publicField(this, "disposables", new main.DisposableStack());
      __publicField(this, "id");
      __publicField(this, "origin");
      __publicField(this, "executionContextId");
      this.id = id;
      this.origin = origin;
    }
    get disposed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get target() {
      return { realm: this.id };
    }
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[main.disposeSymbol]();
    }
    async disown(handles) {
      await this.session.send("script.disown", {
        target: this.target,
        handles
      });
    }
    async callFunction(functionDeclaration, awaitPromise, options = {}) {
      const { result } = await this.session.send("script.callFunction", {
        functionDeclaration,
        awaitPromise,
        target: this.target,
        ...options
      });
      return result;
    }
    async evaluate(expression, awaitPromise, options = {}) {
      const { result } = await this.session.send("script.evaluate", {
        expression,
        awaitPromise,
        target: this.target,
        ...options
      });
      return result;
    }
    async resolveExecutionContextId() {
      if (!this.executionContextId) {
        const { result } = await this.session.connection.send("cdp.resolveRealm", { realm: this.id });
        this.executionContextId = result.executionContextId;
      }
      return this.executionContextId;
    }
    [(_dispose_decorators = [main.inertIfDisposed], _disown_decorators = [main.throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], _callFunction_decorators = [main.throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], _evaluate_decorators = [main.throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], _resolveExecutionContextId_decorators = [main.throwIfDisposed((realm) => {
      return __privateGet(realm, _reason);
    })], main.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Realm already destroyed, probably because all associated browsing contexts closed.");
      this.emit("destroyed", { reason: __privateGet(this, _reason) });
      this.disposables.dispose();
      super[main.disposeSymbol]();
    }
  }, _reason = new WeakMap(), (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$c(_a4, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$c(_a4, null, _disown_decorators, { kind: "method", name: "disown", static: false, private: false, access: { has: (obj) => "disown" in obj, get: (obj) => obj.disown }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$c(_a4, null, _callFunction_decorators, { kind: "method", name: "callFunction", static: false, private: false, access: { has: (obj) => "callFunction" in obj, get: (obj) => obj.callFunction }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$c(_a4, null, _evaluate_decorators, { kind: "method", name: "evaluate", static: false, private: false, access: { has: (obj) => "evaluate" in obj, get: (obj) => obj.evaluate }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$c(_a4, null, _resolveExecutionContextId_decorators, { kind: "method", name: "resolveExecutionContextId", static: false, private: false, access: { has: (obj) => "resolveExecutionContextId" in obj, get: (obj) => obj.resolveExecutionContextId }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
const _WindowRealm = class _WindowRealm extends Realm {
  constructor(context, sandbox) {
    super("", "");
    __privateAdd(this, _initialize);
    __publicField(this, "browsingContext");
    __publicField(this, "sandbox");
    __privateAdd(this, _workers2, /* @__PURE__ */ new Map());
    this.browsingContext = context;
    this.sandbox = sandbox;
  }
  static from(context, sandbox) {
    var _a4;
    const realm = new _WindowRealm(context, sandbox);
    __privateMethod(_a4 = realm, _initialize, initialize_fn).call(_a4);
    return realm;
  }
  get session() {
    return this.browsingContext.userContext.browser.session;
  }
  get target() {
    return { context: this.browsingContext.id, sandbox: this.sandbox };
  }
};
_workers2 = new WeakMap();
_initialize = new WeakSet();
initialize_fn = function() {
  const browsingContextEmitter = this.disposables.use(new main.EventEmitter(this.browsingContext));
  browsingContextEmitter.on("closed", ({ reason }) => {
    this.dispose(reason);
  });
  const sessionEmitter = this.disposables.use(new main.EventEmitter(this.session));
  sessionEmitter.on("script.realmCreated", (info) => {
    if (info.type !== "window" || info.context !== this.browsingContext.id || info.sandbox !== this.sandbox) {
      return;
    }
    this.id = info.realm;
    this.origin = info.origin;
    this.executionContextId = void 0;
    this.emit("updated", this);
  });
  sessionEmitter.on("script.realmCreated", (info) => {
    if (info.type !== "dedicated-worker") {
      return;
    }
    if (!info.owners.includes(this.id)) {
      return;
    }
    const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
    __privateGet(this, _workers2).set(realm.id, realm);
    const realmEmitter = this.disposables.use(new main.EventEmitter(realm));
    realmEmitter.once("destroyed", () => {
      realmEmitter.removeAllListeners();
      __privateGet(this, _workers2).delete(realm.id);
    });
    this.emit("worker", realm);
  });
};
let WindowRealm = _WindowRealm;
class DedicatedWorkerRealm extends Realm {
  constructor(owner, id, origin) {
    super(id, origin);
    __privateAdd(this, _initialize2);
    __privateAdd(this, _workers3, /* @__PURE__ */ new Map());
    __publicField(this, "owners");
    this.owners = /* @__PURE__ */ new Set([owner]);
  }
  static from(owner, id, origin) {
    var _a4;
    const realm = new _a$1(owner, id, origin);
    __privateMethod(_a4 = realm, _initialize2, initialize_fn2).call(_a4);
    return realm;
  }
  get session() {
    return this.owners.values().next().value.session;
  }
}
_workers3 = new WeakMap();
_initialize2 = new WeakSet();
initialize_fn2 = function() {
  const sessionEmitter = this.disposables.use(new main.EventEmitter(this.session));
  sessionEmitter.on("script.realmDestroyed", (info) => {
    if (info.realm !== this.id) {
      return;
    }
    this.dispose("Realm already destroyed.");
  });
  sessionEmitter.on("script.realmCreated", (info) => {
    if (info.type !== "dedicated-worker") {
      return;
    }
    if (!info.owners.includes(this.id)) {
      return;
    }
    const realm = _a$1.from(this, info.realm, info.origin);
    __privateGet(this, _workers3).set(realm.id, realm);
    const realmEmitter = this.disposables.use(new main.EventEmitter(realm));
    realmEmitter.once("destroyed", () => {
      __privateGet(this, _workers3).delete(realm.id);
    });
    this.emit("worker", realm);
  });
};
_a$1 = DedicatedWorkerRealm;
const _SharedWorkerRealm = class _SharedWorkerRealm extends Realm {
  constructor(browser, id, origin) {
    super(id, origin);
    __privateAdd(this, _initialize3);
    __privateAdd(this, _workers4, /* @__PURE__ */ new Map());
    __publicField(this, "browser");
    this.browser = browser;
  }
  static from(browser, id, origin) {
    var _a4;
    const realm = new _SharedWorkerRealm(browser, id, origin);
    __privateMethod(_a4 = realm, _initialize3, initialize_fn3).call(_a4);
    return realm;
  }
  get session() {
    return this.browser.session;
  }
};
_workers4 = new WeakMap();
_initialize3 = new WeakSet();
initialize_fn3 = function() {
  const sessionEmitter = this.disposables.use(new main.EventEmitter(this.session));
  sessionEmitter.on("script.realmDestroyed", (info) => {
    if (info.realm !== this.id) {
      return;
    }
    this.dispose("Realm already destroyed.");
  });
  sessionEmitter.on("script.realmCreated", (info) => {
    if (info.type !== "dedicated-worker") {
      return;
    }
    if (!info.owners.includes(this.id)) {
      return;
    }
    const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
    __privateGet(this, _workers4).set(realm.id, realm);
    const realmEmitter = this.disposables.use(new main.EventEmitter(realm));
    realmEmitter.once("destroyed", () => {
      __privateGet(this, _workers4).delete(realm.id);
    });
    this.emit("worker", realm);
  });
};
let SharedWorkerRealm = _SharedWorkerRealm;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$b = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$b = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let Request = (() => {
  var _error, _redirect, _response3, _browsingContext, _disposables2, _event2, _initialize7, initialize_fn7, _session, session_get, _a4;
  let _classSuper = main.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  return _a4 = class extends _classSuper {
    constructor(browsingContext, event) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _session);
      __privateAdd(this, _error, (__runInitializers$b(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _redirect, void 0);
      __privateAdd(this, _response3, void 0);
      __privateAdd(this, _browsingContext, void 0);
      __privateAdd(this, _disposables2, new main.DisposableStack());
      __privateAdd(this, _event2, void 0);
      __privateSet(this, _browsingContext, browsingContext);
      __privateSet(this, _event2, event);
    }
    static from(browsingContext, event) {
      var _a5;
      const request = new _a4(browsingContext, event);
      __privateMethod(_a5 = request, _initialize7, initialize_fn7).call(_a5);
      return request;
    }
    get disposed() {
      return __privateGet(this, _disposables2).disposed;
    }
    get error() {
      return __privateGet(this, _error);
    }
    get headers() {
      return __privateGet(this, _event2).request.headers;
    }
    get id() {
      return __privateGet(this, _event2).request.request;
    }
    get initiator() {
      return __privateGet(this, _event2).initiator;
    }
    get method() {
      return __privateGet(this, _event2).request.method;
    }
    get navigation() {
      return __privateGet(this, _event2).navigation ?? void 0;
    }
    get redirect() {
      return __privateGet(this, _redirect);
    }
    get lastRedirect() {
      let redirect = __privateGet(this, _redirect);
      while (redirect) {
        if (redirect && !__privateGet(redirect, _redirect)) {
          return redirect;
        }
        redirect = __privateGet(redirect, _redirect);
      }
      return redirect;
    }
    get response() {
      return __privateGet(this, _response3);
    }
    get url() {
      return __privateGet(this, _event2).request.url;
    }
    get isBlocked() {
      return __privateGet(this, _event2).isBlocked;
    }
    async continueRequest({ url, method, headers, cookies, body }) {
      await __privateGet(this, _session, session_get).send("network.continueRequest", {
        request: this.id,
        url,
        method,
        headers,
        body,
        cookies
      });
    }
    async failRequest() {
      await __privateGet(this, _session, session_get).send("network.failRequest", {
        request: this.id
      });
    }
    async provideResponse({ statusCode, reasonPhrase, headers, body }) {
      await __privateGet(this, _session, session_get).send("network.provideResponse", {
        request: this.id,
        statusCode,
        reasonPhrase,
        headers,
        body
      });
    }
    async continueWithAuth(parameters) {
      if (parameters.action === "provideCredentials") {
        await __privateGet(this, _session, session_get).send("network.continueWithAuth", {
          request: this.id,
          action: parameters.action,
          credentials: parameters.credentials
        });
      } else {
        await __privateGet(this, _session, session_get).send("network.continueWithAuth", {
          request: this.id,
          action: parameters.action
        });
      }
    }
    dispose() {
      this[main.disposeSymbol]();
    }
    [(_dispose_decorators = [main.inertIfDisposed], main.disposeSymbol)]() {
      __privateGet(this, _disposables2).dispose();
      super[main.disposeSymbol]();
    }
  }, _error = new WeakMap(), _redirect = new WeakMap(), _response3 = new WeakMap(), _browsingContext = new WeakMap(), _disposables2 = new WeakMap(), _event2 = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = function() {
    const browsingContextEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(__privateGet(this, _browsingContext)));
    browsingContextEmitter.once("closed", ({ reason }) => {
      __privateSet(this, _error, reason);
      this.emit("error", __privateGet(this, _error));
      this.dispose();
    });
    const sessionEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(__privateGet(this, _session, session_get)));
    sessionEmitter.on("network.beforeRequestSent", (event) => {
      if (event.context !== __privateGet(this, _browsingContext).id || event.request.request !== this.id || event.redirectCount !== __privateGet(this, _event2).redirectCount + 1) {
        return;
      }
      __privateSet(this, _redirect, _a4.from(__privateGet(this, _browsingContext), event));
      this.emit("redirect", __privateGet(this, _redirect));
      this.dispose();
    });
    sessionEmitter.on("network.authRequired", (event) => {
      if (event.context !== __privateGet(this, _browsingContext).id || event.request.request !== this.id || // Don't try to authenticate for events that are not blocked
      !event.isBlocked) {
        return;
      }
      this.emit("authenticate", void 0);
    });
    sessionEmitter.on("network.fetchError", (event) => {
      if (event.context !== __privateGet(this, _browsingContext).id || event.request.request !== this.id || __privateGet(this, _event2).redirectCount !== event.redirectCount) {
        return;
      }
      __privateSet(this, _error, event.errorText);
      this.emit("error", __privateGet(this, _error));
      this.dispose();
    });
    sessionEmitter.on("network.responseCompleted", (event) => {
      if (event.context !== __privateGet(this, _browsingContext).id || event.request.request !== this.id || __privateGet(this, _event2).redirectCount !== event.redirectCount) {
        return;
      }
      __privateSet(this, _response3, event.response);
      this.emit("success", __privateGet(this, _response3));
      if (__privateGet(this, _response3).status >= 300 && __privateGet(this, _response3).status < 400) {
        return;
      }
      this.dispose();
    });
  }, _session = new WeakSet(), session_get = function() {
    return __privateGet(this, _browsingContext).userContext.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$b(_a4, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$a = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$a = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let UserPrompt = (() => {
  var _reason, _result, _disposables2, _initialize7, initialize_fn7, _session, session_get, _a4;
  let _classSuper = main.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _handle_decorators;
  return _a4 = class extends _classSuper {
    constructor(context, info) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _session);
      __privateAdd(this, _reason, (__runInitializers$a(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _result, void 0);
      __privateAdd(this, _disposables2, new main.DisposableStack());
      __publicField(this, "browsingContext");
      __publicField(this, "info");
      this.browsingContext = context;
      this.info = info;
    }
    static from(browsingContext, info) {
      var _a5;
      const userPrompt = new _a4(browsingContext, info);
      __privateMethod(_a5 = userPrompt, _initialize7, initialize_fn7).call(_a5);
      return userPrompt;
    }
    get closed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get handled() {
      return __privateGet(this, _result) !== void 0;
    }
    get result() {
      return __privateGet(this, _result);
    }
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[main.disposeSymbol]();
    }
    async handle(options = {}) {
      await __privateGet(this, _session, session_get).send("browsingContext.handleUserPrompt", {
        ...options,
        context: this.info.context
      });
      return __privateGet(this, _result);
    }
    [(_dispose_decorators = [main.inertIfDisposed], _handle_decorators = [main.throwIfDisposed((prompt) => {
      return __privateGet(prompt, _reason);
    })], main.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "User prompt already closed, probably because the associated browsing context was destroyed.");
      this.emit("closed", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables2).dispose();
      super[main.disposeSymbol]();
    }
  }, _reason = new WeakMap(), _result = new WeakMap(), _disposables2 = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = function() {
    const browserContextEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(this.browsingContext));
    browserContextEmitter.once("closed", ({ reason }) => {
      this.dispose(`User prompt already closed: ${reason}`);
    });
    const sessionEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(__privateGet(this, _session, session_get)));
    sessionEmitter.on("browsingContext.userPromptClosed", (parameters) => {
      if (parameters.context !== this.browsingContext.id) {
        return;
      }
      __privateSet(this, _result, parameters);
      this.emit("handled", parameters);
      this.dispose("User prompt already handled.");
    });
  }, _session = new WeakSet(), session_get = function() {
    return this.browsingContext.userContext.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$a(_a4, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$a(_a4, null, _handle_decorators, { kind: "method", name: "handle", static: false, private: false, access: { has: (obj) => "handle" in obj, get: (obj) => obj.handle }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$9 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$9 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let BrowsingContext = (() => {
  var _navigation2, _reason, _url3, _children2, _disposables2, _realms, _requests2, _initialize7, initialize_fn7, _session, session_get, _createWindowRealm, createWindowRealm_fn, _a4;
  let _classSuper = main.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _activate_decorators;
  let _captureScreenshot_decorators;
  let _close_decorators;
  let _traverseHistory_decorators;
  let _navigate_decorators;
  let _reload_decorators;
  let _print_decorators;
  let _handleUserPrompt_decorators;
  let _setViewport_decorators;
  let _performActions_decorators;
  let _releaseActions_decorators;
  let _createWindowRealm_decorators;
  let _addPreloadScript_decorators;
  let _addIntercept_decorators;
  let _removePreloadScript_decorators;
  let _getCookies_decorators;
  let _setCookie_decorators;
  let _setFiles_decorators;
  let _subscribe_decorators;
  let _addInterception_decorators;
  let _deleteCookie_decorators;
  let _locateNodes_decorators;
  return _a4 = class extends _classSuper {
    constructor(context, parent, id, url) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _session);
      __privateAdd(this, _createWindowRealm);
      __privateAdd(this, _navigation2, (__runInitializers$9(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _reason, void 0);
      __privateAdd(this, _url3, void 0);
      __privateAdd(this, _children2, /* @__PURE__ */ new Map());
      __privateAdd(this, _disposables2, new main.DisposableStack());
      __privateAdd(this, _realms, /* @__PURE__ */ new Map());
      __privateAdd(this, _requests2, /* @__PURE__ */ new Map());
      __publicField(this, "defaultRealm");
      __publicField(this, "id");
      __publicField(this, "parent");
      __publicField(this, "userContext");
      __privateSet(this, _url3, url);
      this.id = id;
      this.parent = parent;
      this.userContext = context;
      this.defaultRealm = __privateMethod(this, _createWindowRealm, createWindowRealm_fn).call(this);
    }
    static from(userContext, parent, id, url) {
      var _a5;
      const browsingContext = new _a4(userContext, parent, id, url);
      __privateMethod(_a5 = browsingContext, _initialize7, initialize_fn7).call(_a5);
      return browsingContext;
    }
    get children() {
      return __privateGet(this, _children2).values();
    }
    get closed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get realms() {
      const self = this;
      return function* () {
        yield self.defaultRealm;
        yield* __privateGet(self, _realms).values();
      }();
    }
    get top() {
      let context = this;
      for (let { parent } = context; parent; { parent } = context) {
        context = parent;
      }
      return context;
    }
    get url() {
      return __privateGet(this, _url3);
    }
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[main.disposeSymbol]();
    }
    async activate() {
      await __privateGet(this, _session, session_get).send("browsingContext.activate", {
        context: this.id
      });
    }
    async captureScreenshot(options = {}) {
      const { result: { data } } = await __privateGet(this, _session, session_get).send("browsingContext.captureScreenshot", {
        context: this.id,
        ...options
      });
      return data;
    }
    async close(promptUnload) {
      await Promise.all([...__privateGet(this, _children2).values()].map(async (child) => {
        await child.close(promptUnload);
      }));
      await __privateGet(this, _session, session_get).send("browsingContext.close", {
        context: this.id,
        promptUnload
      });
    }
    async traverseHistory(delta) {
      await __privateGet(this, _session, session_get).send("browsingContext.traverseHistory", {
        context: this.id,
        delta
      });
    }
    async navigate(url, wait) {
      await __privateGet(this, _session, session_get).send("browsingContext.navigate", {
        context: this.id,
        url,
        wait
      });
    }
    async reload(options = {}) {
      await __privateGet(this, _session, session_get).send("browsingContext.reload", {
        context: this.id,
        ...options
      });
    }
    async print(options = {}) {
      const { result: { data } } = await __privateGet(this, _session, session_get).send("browsingContext.print", {
        context: this.id,
        ...options
      });
      return data;
    }
    async handleUserPrompt(options = {}) {
      await __privateGet(this, _session, session_get).send("browsingContext.handleUserPrompt", {
        context: this.id,
        ...options
      });
    }
    async setViewport(options = {}) {
      await __privateGet(this, _session, session_get).send("browsingContext.setViewport", {
        context: this.id,
        ...options
      });
    }
    async performActions(actions) {
      await __privateGet(this, _session, session_get).send("input.performActions", {
        context: this.id,
        actions
      });
    }
    async releaseActions() {
      await __privateGet(this, _session, session_get).send("input.releaseActions", {
        context: this.id
      });
    }
    createWindowRealm(sandbox) {
      return __privateMethod(this, _createWindowRealm, createWindowRealm_fn).call(this, sandbox);
    }
    async addPreloadScript(functionDeclaration, options = {}) {
      return await this.userContext.browser.addPreloadScript(functionDeclaration, {
        ...options,
        contexts: [this]
      });
    }
    async addIntercept(options) {
      const { result: { intercept } } = await this.userContext.browser.session.send("network.addIntercept", {
        ...options,
        contexts: [this.id]
      });
      return intercept;
    }
    async removePreloadScript(script) {
      await this.userContext.browser.removePreloadScript(script);
    }
    async getCookies(options = {}) {
      const { result: { cookies } } = await __privateGet(this, _session, session_get).send("storage.getCookies", {
        ...options,
        partition: {
          type: "context",
          context: this.id
        }
      });
      return cookies;
    }
    async setCookie(cookie) {
      await __privateGet(this, _session, session_get).send("storage.setCookie", {
        cookie,
        partition: {
          type: "context",
          context: this.id
        }
      });
    }
    async setFiles(element, files) {
      await __privateGet(this, _session, session_get).send("input.setFiles", {
        context: this.id,
        element,
        files
      });
    }
    async subscribe(events2) {
      await __privateGet(this, _session, session_get).subscribe(events2, [this.id]);
    }
    async addInterception(events2) {
      await __privateGet(this, _session, session_get).subscribe(events2, [this.id]);
    }
    [(_dispose_decorators = [main.inertIfDisposed], _activate_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _captureScreenshot_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _close_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _traverseHistory_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _navigate_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _reload_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _print_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _handleUserPrompt_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setViewport_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _performActions_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _releaseActions_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _createWindowRealm_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _addPreloadScript_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _addIntercept_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _removePreloadScript_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _getCookies_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setCookie_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setFiles_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _subscribe_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _addInterception_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], main.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Browsing context already closed, probably because the user context closed.");
      this.emit("closed", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables2).dispose();
      super[main.disposeSymbol]();
    }
    async deleteCookie(...cookieFilters) {
      await Promise.all(cookieFilters.map(async (filter) => {
        await __privateGet(this, _session, session_get).send("storage.deleteCookies", {
          filter,
          partition: {
            type: "context",
            context: this.id
          }
        });
      }));
    }
    async locateNodes(locator, startNodes) {
      const result = await __privateGet(this, _session, session_get).send("browsingContext.locateNodes", {
        context: this.id,
        locator,
        startNodes: startNodes.length ? startNodes : void 0
      });
      return result.result.nodes;
    }
  }, _navigation2 = new WeakMap(), _reason = new WeakMap(), _url3 = new WeakMap(), _children2 = new WeakMap(), _disposables2 = new WeakMap(), _realms = new WeakMap(), _requests2 = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = function() {
    const userContextEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(this.userContext));
    userContextEmitter.once("closed", ({ reason }) => {
      this.dispose(`Browsing context already closed: ${reason}`);
    });
    const sessionEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(__privateGet(this, _session, session_get)));
    sessionEmitter.on("browsingContext.contextCreated", (info) => {
      if (info.parent !== this.id) {
        return;
      }
      const browsingContext = _a4.from(this.userContext, this, info.context, info.url);
      __privateGet(this, _children2).set(info.context, browsingContext);
      const browsingContextEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(browsingContext));
      browsingContextEmitter.once("closed", () => {
        browsingContextEmitter.removeAllListeners();
        __privateGet(this, _children2).delete(browsingContext.id);
      });
      this.emit("browsingcontext", { browsingContext });
    });
    sessionEmitter.on("browsingContext.contextDestroyed", (info) => {
      if (info.context !== this.id) {
        return;
      }
      this.dispose("Browsing context already closed.");
    });
    sessionEmitter.on("browsingContext.domContentLoaded", (info) => {
      if (info.context !== this.id) {
        return;
      }
      __privateSet(this, _url3, info.url);
      this.emit("DOMContentLoaded", void 0);
    });
    sessionEmitter.on("browsingContext.load", (info) => {
      if (info.context !== this.id) {
        return;
      }
      __privateSet(this, _url3, info.url);
      this.emit("load", void 0);
    });
    sessionEmitter.on("browsingContext.navigationStarted", (info) => {
      if (info.context !== this.id) {
        return;
      }
      __privateSet(this, _url3, info.url);
      for (const [id, request] of __privateGet(this, _requests2)) {
        if (request.disposed) {
          __privateGet(this, _requests2).delete(id);
        }
      }
      if (__privateGet(this, _navigation2) !== void 0 && !__privateGet(this, _navigation2).disposed) {
        return;
      }
      __privateSet(this, _navigation2, Navigation.from(this));
      const navigationEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(__privateGet(this, _navigation2)));
      for (const eventName of ["fragment", "failed", "aborted"]) {
        navigationEmitter.once(eventName, ({ url }) => {
          navigationEmitter[main.disposeSymbol]();
          __privateSet(this, _url3, url);
        });
      }
      this.emit("navigation", { navigation: __privateGet(this, _navigation2) });
    });
    sessionEmitter.on("network.beforeRequestSent", (event) => {
      if (event.context !== this.id) {
        return;
      }
      if (event.redirectCount !== 0) {
        return;
      }
      const request = Request.from(this, event);
      __privateGet(this, _requests2).set(request.id, request);
      this.emit("request", { request });
    });
    sessionEmitter.on("log.entryAdded", (entry) => {
      if (entry.source.context !== this.id) {
        return;
      }
      this.emit("log", { entry });
    });
    sessionEmitter.on("browsingContext.userPromptOpened", (info) => {
      if (info.context !== this.id) {
        return;
      }
      const userPrompt = UserPrompt.from(this, info);
      this.emit("userprompt", { userPrompt });
    });
  }, _session = new WeakSet(), session_get = function() {
    return this.userContext.browser.session;
  }, _createWindowRealm = new WeakSet(), createWindowRealm_fn = function(sandbox) {
    const realm = WindowRealm.from(this, sandbox);
    realm.on("worker", (realm2) => {
      this.emit("worker", { realm: realm2 });
    });
    return realm;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _deleteCookie_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })];
    _locateNodes_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })];
    __esDecorate$9(_a4, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _activate_decorators, { kind: "method", name: "activate", static: false, private: false, access: { has: (obj) => "activate" in obj, get: (obj) => obj.activate }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _captureScreenshot_decorators, { kind: "method", name: "captureScreenshot", static: false, private: false, access: { has: (obj) => "captureScreenshot" in obj, get: (obj) => obj.captureScreenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: (obj) => "close" in obj, get: (obj) => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _traverseHistory_decorators, { kind: "method", name: "traverseHistory", static: false, private: false, access: { has: (obj) => "traverseHistory" in obj, get: (obj) => obj.traverseHistory }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _navigate_decorators, { kind: "method", name: "navigate", static: false, private: false, access: { has: (obj) => "navigate" in obj, get: (obj) => obj.navigate }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _reload_decorators, { kind: "method", name: "reload", static: false, private: false, access: { has: (obj) => "reload" in obj, get: (obj) => obj.reload }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _print_decorators, { kind: "method", name: "print", static: false, private: false, access: { has: (obj) => "print" in obj, get: (obj) => obj.print }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _handleUserPrompt_decorators, { kind: "method", name: "handleUserPrompt", static: false, private: false, access: { has: (obj) => "handleUserPrompt" in obj, get: (obj) => obj.handleUserPrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _setViewport_decorators, { kind: "method", name: "setViewport", static: false, private: false, access: { has: (obj) => "setViewport" in obj, get: (obj) => obj.setViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _performActions_decorators, { kind: "method", name: "performActions", static: false, private: false, access: { has: (obj) => "performActions" in obj, get: (obj) => obj.performActions }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _releaseActions_decorators, { kind: "method", name: "releaseActions", static: false, private: false, access: { has: (obj) => "releaseActions" in obj, get: (obj) => obj.releaseActions }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _createWindowRealm_decorators, { kind: "method", name: "createWindowRealm", static: false, private: false, access: { has: (obj) => "createWindowRealm" in obj, get: (obj) => obj.createWindowRealm }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: (obj) => "addPreloadScript" in obj, get: (obj) => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _addIntercept_decorators, { kind: "method", name: "addIntercept", static: false, private: false, access: { has: (obj) => "addIntercept" in obj, get: (obj) => obj.addIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: (obj) => "removePreloadScript" in obj, get: (obj) => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _getCookies_decorators, { kind: "method", name: "getCookies", static: false, private: false, access: { has: (obj) => "getCookies" in obj, get: (obj) => obj.getCookies }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _setCookie_decorators, { kind: "method", name: "setCookie", static: false, private: false, access: { has: (obj) => "setCookie" in obj, get: (obj) => obj.setCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: (obj) => "setFiles" in obj, get: (obj) => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: (obj) => "subscribe" in obj, get: (obj) => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _addInterception_decorators, { kind: "method", name: "addInterception", static: false, private: false, access: { has: (obj) => "addInterception" in obj, get: (obj) => obj.addInterception }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _deleteCookie_decorators, { kind: "method", name: "deleteCookie", static: false, private: false, access: { has: (obj) => "deleteCookie" in obj, get: (obj) => obj.deleteCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$9(_a4, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: (obj) => "locateNodes" in obj, get: (obj) => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$8 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$8 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let UserContext = (() => {
  var _a4, _reason, _browsingContexts, _disposables2, _id7, _initialize7, initialize_fn7, _session, session_get;
  let _classSuper = main.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _createBrowsingContext_decorators;
  let _remove_decorators;
  let _getCookies_decorators;
  let _setCookie_decorators;
  let _setPermissions_decorators;
  return _a4 = class extends _classSuper {
    constructor(browser, id) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _session);
      __privateAdd(this, _reason, (__runInitializers$8(this, _instanceExtraInitializers), void 0));
      // Note these are only top-level contexts.
      __privateAdd(this, _browsingContexts, /* @__PURE__ */ new Map());
      __privateAdd(this, _disposables2, new main.DisposableStack());
      __privateAdd(this, _id7, void 0);
      __publicField(this, "browser");
      __privateSet(this, _id7, id);
      this.browser = browser;
    }
    static create(browser, id) {
      var _a5;
      const context = new _a4(browser, id);
      __privateMethod(_a5 = context, _initialize7, initialize_fn7).call(_a5);
      return context;
    }
    get browsingContexts() {
      return __privateGet(this, _browsingContexts).values();
    }
    get closed() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get id() {
      return __privateGet(this, _id7);
    }
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[main.disposeSymbol]();
    }
    async createBrowsingContext(type, options = {}) {
      var _a5;
      const { result: { context: contextId } } = await __privateGet(this, _session, session_get).send("browsingContext.create", {
        type,
        ...options,
        referenceContext: (_a5 = options.referenceContext) == null ? void 0 : _a5.id,
        userContext: __privateGet(this, _id7)
      });
      const browsingContext = __privateGet(this, _browsingContexts).get(contextId);
      main.assert(browsingContext, "The WebDriver BiDi implementation is failing to create a browsing context correctly.");
      return browsingContext;
    }
    async remove() {
      try {
        await __privateGet(this, _session, session_get).send("browser.removeUserContext", {
          userContext: __privateGet(this, _id7)
        });
      } finally {
        this.dispose("User context already closed.");
      }
    }
    async getCookies(options = {}, sourceOrigin = void 0) {
      const { result: { cookies } } = await __privateGet(this, _session, session_get).send("storage.getCookies", {
        ...options,
        partition: {
          type: "storageKey",
          userContext: __privateGet(this, _id7),
          sourceOrigin
        }
      });
      return cookies;
    }
    async setCookie(cookie, sourceOrigin) {
      await __privateGet(this, _session, session_get).send("storage.setCookie", {
        cookie,
        partition: {
          type: "storageKey",
          sourceOrigin,
          userContext: this.id
        }
      });
    }
    async setPermissions(origin, descriptor, state) {
      await __privateGet(this, _session, session_get).send("permissions.setPermission", {
        origin,
        descriptor,
        state,
        userContext: __privateGet(this, _id7)
      });
    }
    [(_dispose_decorators = [main.inertIfDisposed], _createBrowsingContext_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _remove_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _getCookies_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setCookie_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], _setPermissions_decorators = [main.throwIfDisposed((context) => {
      return __privateGet(context, _reason);
    })], main.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "User context already closed, probably because the browser disconnected/closed.");
      this.emit("closed", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables2).dispose();
      super[main.disposeSymbol]();
    }
  }, _reason = new WeakMap(), _browsingContexts = new WeakMap(), _disposables2 = new WeakMap(), _id7 = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = function() {
    const browserEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(this.browser));
    browserEmitter.once("closed", ({ reason }) => {
      this.dispose(`User context already closed: ${reason}`);
    });
    const sessionEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(__privateGet(this, _session, session_get)));
    sessionEmitter.on("browsingContext.contextCreated", (info) => {
      if (info.parent) {
        return;
      }
      if (info.userContext !== __privateGet(this, _id7)) {
        return;
      }
      const browsingContext = BrowsingContext.from(this, void 0, info.context, info.url);
      __privateGet(this, _browsingContexts).set(browsingContext.id, browsingContext);
      const browsingContextEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(browsingContext));
      browsingContextEmitter.on("closed", () => {
        browsingContextEmitter.removeAllListeners();
        __privateGet(this, _browsingContexts).delete(browsingContext.id);
      });
      this.emit("browsingcontext", { browsingContext });
    });
  }, _session = new WeakSet(), session_get = function() {
    return this.browser.session;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$8(_a4, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$8(_a4, null, _createBrowsingContext_decorators, { kind: "method", name: "createBrowsingContext", static: false, private: false, access: { has: (obj) => "createBrowsingContext" in obj, get: (obj) => obj.createBrowsingContext }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$8(_a4, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: (obj) => "remove" in obj, get: (obj) => obj.remove }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$8(_a4, null, _getCookies_decorators, { kind: "method", name: "getCookies", static: false, private: false, access: { has: (obj) => "getCookies" in obj, get: (obj) => obj.getCookies }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$8(_a4, null, _setCookie_decorators, { kind: "method", name: "setCookie", static: false, private: false, access: { has: (obj) => "setCookie" in obj, get: (obj) => obj.setCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$8(_a4, null, _setPermissions_decorators, { kind: "method", name: "setPermissions", static: false, private: false, access: { has: (obj) => "setPermissions" in obj, get: (obj) => obj.setPermissions }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), __publicField(_a4, "DEFAULT", "default"), _a4;
})();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiDeserializer {
  static deserialize(result) {
    var _a4, _b3, _c3, _d3;
    if (!result) {
      main.debugError("Service did not produce a result.");
      return void 0;
    }
    switch (result.type) {
      case "array":
        return (_a4 = result.value) == null ? void 0 : _a4.map((value) => {
          return this.deserialize(value);
        });
      case "set":
        return (_b3 = result.value) == null ? void 0 : _b3.reduce((acc, value) => {
          return acc.add(this.deserialize(value));
        }, /* @__PURE__ */ new Set());
      case "object":
        return (_c3 = result.value) == null ? void 0 : _c3.reduce((acc, tuple) => {
          const { key, value } = __privateMethod(this, _deserializeTuple, deserializeTuple_fn).call(this, tuple);
          acc[key] = value;
          return acc;
        }, {});
      case "map":
        return (_d3 = result.value) == null ? void 0 : _d3.reduce((acc, tuple) => {
          const { key, value } = __privateMethod(this, _deserializeTuple, deserializeTuple_fn).call(this, tuple);
          return acc.set(key, value);
        }, /* @__PURE__ */ new Map());
      case "promise":
        return {};
      case "regexp":
        return new RegExp(result.value.pattern, result.value.flags);
      case "date":
        return new Date(result.value);
      case "undefined":
        return void 0;
      case "null":
        return null;
      case "number":
        return __privateMethod(this, _deserializeNumber, deserializeNumber_fn).call(this, result.value);
      case "bigint":
        return BigInt(result.value);
      case "boolean":
        return Boolean(result.value);
      case "string":
        return result.value;
    }
    main.debugError(`Deserialization of type ${result.type} not supported.`);
    return void 0;
  }
}
_deserializeNumber = new WeakSet();
deserializeNumber_fn = function(value) {
  switch (value) {
    case "-0":
      return -0;
    case "NaN":
      return NaN;
    case "Infinity":
      return Infinity;
    case "-Infinity":
      return -Infinity;
    default:
      return value;
  }
};
_deserializeTuple = new WeakSet();
deserializeTuple_fn = function([serializedKey, serializedValue]) {
  const key = typeof serializedKey === "string" ? serializedKey : this.deserialize(serializedKey);
  const value = this.deserialize(serializedValue);
  return { key, value };
};
__privateAdd(BidiDeserializer, _deserializeNumber);
__privateAdd(BidiDeserializer, _deserializeTuple);
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const _BidiDialog = class _BidiDialog extends main.Dialog {
  constructor(prompt) {
    super(prompt.info.type, prompt.info.message, prompt.info.defaultValue);
    __privateAdd(this, _prompt, void 0);
    __privateSet(this, _prompt, prompt);
  }
  static from(prompt) {
    return new _BidiDialog(prompt);
  }
  async handle(options) {
    await __privateGet(this, _prompt).handle({
      accept: options.accept,
      userText: options.text
    });
  }
};
_prompt = new WeakMap();
let BidiDialog = _BidiDialog;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const _BidiJSHandle = class _BidiJSHandle extends main.JSHandle {
  constructor(value, realm) {
    super();
    __privateAdd(this, _remoteValue, void 0);
    __publicField(this, "realm");
    __privateAdd(this, _disposed, false);
    __privateSet(this, _remoteValue, value);
    this.realm = realm;
  }
  static from(value, realm) {
    return new _BidiJSHandle(value, realm);
  }
  get disposed() {
    return __privateGet(this, _disposed);
  }
  async jsonValue() {
    return await this.evaluate((value) => {
      return value;
    });
  }
  asElement() {
    return null;
  }
  async dispose() {
    if (__privateGet(this, _disposed)) {
      return;
    }
    __privateSet(this, _disposed, true);
    await this.realm.destroyHandles([this]);
  }
  get isPrimitiveValue() {
    switch (__privateGet(this, _remoteValue).type) {
      case "string":
      case "number":
      case "bigint":
      case "boolean":
      case "undefined":
      case "null":
        return true;
      default:
        return false;
    }
  }
  toString() {
    if (this.isPrimitiveValue) {
      return "JSHandle:" + BidiDeserializer.deserialize(__privateGet(this, _remoteValue));
    }
    return "JSHandle@" + __privateGet(this, _remoteValue).type;
  }
  get id() {
    return "handle" in __privateGet(this, _remoteValue) ? __privateGet(this, _remoteValue).handle : void 0;
  }
  remoteValue() {
    return __privateGet(this, _remoteValue);
  }
  remoteObject() {
    throw new main.UnsupportedOperation("Not available in WebDriver BiDi");
  }
};
_remoteValue = new WeakMap();
_disposed = new WeakMap();
let BidiJSHandle = _BidiJSHandle;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$7 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$7 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource$4 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$4 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError)
        throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
let BidiElementHandle = (() => {
  var _a5;
  var _a4;
  let _classSuper = main.ElementHandle;
  let _instanceExtraInitializers = [];
  let _autofill_decorators;
  let _contentFrame_decorators;
  return _a5 = class extends _classSuper {
    static from(value, realm) {
      return new _a5(value, realm);
    }
    constructor(value, realm) {
      super(BidiJSHandle.from(value, realm));
      __runInitializers$7(this, _instanceExtraInitializers);
    }
    get realm() {
      return this.handle.realm;
    }
    get frame() {
      return this.realm.environment;
    }
    remoteValue() {
      return this.handle.remoteValue();
    }
    async autofill(data) {
      const client = this.frame.client;
      const nodeInfo = await client.send("DOM.describeNode", {
        objectId: this.handle.id
      });
      const fieldId = nodeInfo.node.backendNodeId;
      const frameId = this.frame._id;
      await client.send("Autofill.trigger", {
        fieldId,
        frameId,
        card: data.creditCard
      });
    }
    async contentFrame() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource$4(env_1, await this.evaluateHandle((element) => {
          if (element instanceof HTMLIFrameElement || element instanceof HTMLFrameElement) {
            return element.contentWindow;
          }
          return;
        }), false);
        const value = handle.remoteValue();
        if (value.type === "window") {
          return this.frame.page().frames().find((frame) => {
            return frame._id === value.value.context;
          }) ?? null;
        }
        return null;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$4(env_1);
      }
    }
    async uploadFile(...files) {
      let path;
      try {
        path = await import("path");
      } catch (error) {
        if (error instanceof TypeError) {
          throw new Error(`JSHandle#uploadFile can only be used in Node-like environments.`);
        }
        throw error;
      }
      files = files.map((file) => {
        if (path.win32.isAbsolute(file) || path.posix.isAbsolute(file)) {
          return file;
        } else {
          return path.resolve(file);
        }
      });
      await this.frame.setFiles(this, files);
    }
    async *queryAXTree(name, role) {
      const results = await this.frame.locateNodes(this, {
        type: "accessibility",
        value: {
          role,
          name
        }
      });
      return yield* main.AsyncIterableUtil.map(results, (node) => {
        return Promise.resolve(_a5.from(node, this.realm));
      });
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _autofill_decorators = [main.throwIfDisposed()];
    _contentFrame_decorators = [main.throwIfDisposed(), (_a4 = main.ElementHandle).bindIsolatedHandle.bind(_a4)];
    __esDecorate$7(_a5, null, _autofill_decorators, { kind: "method", name: "autofill", static: false, private: false, access: { has: (obj) => "autofill" in obj, get: (obj) => obj.autofill }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$7(_a5, null, _contentFrame_decorators, { kind: "method", name: "contentFrame", static: false, private: false, access: { has: (obj) => "contentFrame" in obj, get: (obj) => obj.contentFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a5, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a5;
})();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __addDisposableResource$3 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$3 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError)
        throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
const _ExposeableFunction = class _ExposeableFunction {
  constructor(frame, name, apply, isolate = false) {
    __privateAdd(this, _initialize4);
    __privateAdd(this, _connection2);
    __privateAdd(this, _getRealm2);
    __privateAdd(this, _findFrame);
    __privateAdd(this, _frame, void 0);
    __publicField(this, "name");
    __privateAdd(this, _apply, void 0);
    __privateAdd(this, _isolate, void 0);
    __privateAdd(this, _channel2, void 0);
    __privateAdd(this, _scripts2, []);
    __privateAdd(this, _disposables, new main.DisposableStack());
    __privateAdd(this, _handleMessage, async (params) => {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        if (params.channel !== __privateGet(this, _channel2)) {
          return;
        }
        const realm = __privateMethod(this, _getRealm2, getRealm_fn2).call(this, params.source);
        if (!realm) {
          return;
        }
        const dataHandle = __addDisposableResource$3(env_1, BidiJSHandle.from(params.data, realm), false);
        const argsHandle = __addDisposableResource$3(env_1, await dataHandle.evaluateHandle(([, , args2]) => {
          return args2;
        }), false);
        const stack = __addDisposableResource$3(env_1, new main.DisposableStack(), false);
        const args = [];
        for (const [index, handle] of await argsHandle.getProperties()) {
          stack.use(handle);
          if (handle instanceof BidiElementHandle) {
            args[+index] = handle;
            stack.use(handle);
            continue;
          }
          args[+index] = handle.jsonValue();
        }
        let result;
        try {
          result = await __privateGet(this, _apply).call(this, ...await Promise.all(args));
        } catch (error) {
          try {
            if (error instanceof Error) {
              await dataHandle.evaluate(([, reject], name, message, stack2) => {
                const error2 = new Error(message);
                error2.name = name;
                if (stack2) {
                  error2.stack = stack2;
                }
                reject(error2);
              }, error.name, error.message, error.stack);
            } else {
              await dataHandle.evaluate(([, reject], error2) => {
                reject(error2);
              }, error);
            }
          } catch (error2) {
            main.debugError(error2);
          }
          return;
        }
        try {
          await dataHandle.evaluate(([resolve], result2) => {
            resolve(result2);
          }, result);
        } catch (error) {
          main.debugError(error);
        }
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$3(env_1);
      }
    });
    __privateSet(this, _frame, frame);
    this.name = name;
    __privateSet(this, _apply, apply);
    __privateSet(this, _isolate, isolate);
    __privateSet(this, _channel2, `__puppeteer__${__privateGet(this, _frame)._id}_page_exposeFunction_${this.name}`);
  }
  static async from(frame, name, apply, isolate = false) {
    var _a4;
    const func = new _ExposeableFunction(frame, name, apply, isolate);
    await __privateMethod(_a4 = func, _initialize4, initialize_fn4).call(_a4);
    return func;
  }
  [Symbol.dispose]() {
    void this[Symbol.asyncDispose]().catch(main.debugError);
  }
  async [Symbol.asyncDispose]() {
    __privateGet(this, _disposables).dispose();
    await Promise.all(__privateGet(this, _scripts2).map(async ([frame, script]) => {
      const realm = __privateGet(this, _isolate) ? frame.isolatedRealm() : frame.mainRealm();
      try {
        await Promise.all([
          realm.evaluate((name) => {
            delete globalThis[name];
          }, this.name),
          frame.browsingContext.removePreloadScript(script)
        ]);
      } catch (error) {
        main.debugError(error);
      }
    }));
  }
};
_frame = new WeakMap();
_apply = new WeakMap();
_isolate = new WeakMap();
_channel2 = new WeakMap();
_scripts2 = new WeakMap();
_disposables = new WeakMap();
_initialize4 = new WeakSet();
initialize_fn4 = async function() {
  const connection = __privateGet(this, _connection2, connection_get);
  const channel = {
    type: "channel",
    value: {
      channel: __privateGet(this, _channel2),
      ownership: "root"
    }
  };
  const connectionEmitter = __privateGet(this, _disposables).use(new main.EventEmitter(connection));
  connectionEmitter.on(protocol.ChromiumBidi.Script.EventNames.Message, __privateGet(this, _handleMessage));
  const functionDeclaration = main.stringifyFunction(main.interpolateFunction((callback) => {
    Object.assign(globalThis, {
      [PLACEHOLDER("name")]: function(...args) {
        return new Promise((resolve, reject) => {
          callback([resolve, reject, args]);
        });
      }
    });
  }, { name: JSON.stringify(this.name) }));
  const frames = [__privateGet(this, _frame)];
  for (const frame of frames) {
    frames.push(...frame.childFrames());
  }
  await Promise.all(frames.map(async (frame) => {
    const realm = __privateGet(this, _isolate) ? frame.isolatedRealm() : frame.mainRealm();
    try {
      const [script] = await Promise.all([
        frame.browsingContext.addPreloadScript(functionDeclaration, {
          arguments: [channel],
          sandbox: realm.sandbox
        }),
        realm.realm.callFunction(functionDeclaration, false, {
          arguments: [channel]
        })
      ]);
      __privateGet(this, _scripts2).push([frame, script]);
    } catch (error) {
      main.debugError(error);
    }
  }));
};
_connection2 = new WeakSet();
connection_get = function() {
  return __privateGet(this, _frame).page().browser().connection;
};
_handleMessage = new WeakMap();
_getRealm2 = new WeakSet();
getRealm_fn2 = function(source) {
  const frame = __privateMethod(this, _findFrame, findFrame_fn).call(this, source.context);
  if (!frame) {
    return;
  }
  return frame.realm(source.realm);
};
_findFrame = new WeakSet();
findFrame_fn = function(id) {
  const frames = [__privateGet(this, _frame)];
  for (const frame of frames) {
    if (frame._id === id) {
      return frame;
    }
    frames.push(...frame.childFrames());
  }
  return;
};
let ExposeableFunction = _ExposeableFunction;
var __runInitializers$6 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$6 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let BidiHTTPResponse = (() => {
  var _data, _request3, _initialize7, initialize_fn7, _a4;
  let _classSuper = main.HTTPResponse;
  let _instanceExtraInitializers = [];
  let _remoteAddress_decorators;
  return _a4 = class extends _classSuper {
    constructor(data, request) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _data, (__runInitializers$6(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _request3, void 0);
      __privateSet(this, _data, data);
      __privateSet(this, _request3, request);
    }
    static from(data, request) {
      var _a5;
      const response = new _a4(data, request);
      __privateMethod(_a5 = response, _initialize7, initialize_fn7).call(_a5);
      return response;
    }
    remoteAddress() {
      return {
        ip: "",
        port: -1
      };
    }
    url() {
      return __privateGet(this, _data).url;
    }
    status() {
      return __privateGet(this, _data).status;
    }
    statusText() {
      return __privateGet(this, _data).statusText;
    }
    headers() {
      const headers = {};
      for (const header of __privateGet(this, _data).headers || []) {
        if (header.value.type === "string") {
          headers[header.name.toLowerCase()] = header.value.value;
        }
      }
      return headers;
    }
    request() {
      return __privateGet(this, _request3);
    }
    fromCache() {
      return __privateGet(this, _data).fromCache;
    }
    timing() {
      throw new main.UnsupportedOperation();
    }
    frame() {
      return __privateGet(this, _request3).frame();
    }
    fromServiceWorker() {
      return false;
    }
    securityDetails() {
      throw new main.UnsupportedOperation();
    }
    buffer() {
      throw new main.UnsupportedOperation();
    }
  }, _data = new WeakMap(), _request3 = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = function() {
    var _a5, _b3;
    if (__privateGet(this, _data).fromCache) {
      (_a5 = __privateGet(this, _request3).frame()) == null ? void 0 : _a5.page().trustedEmitter.emit("requestservedfromcache", __privateGet(this, _request3));
    }
    (_b3 = __privateGet(this, _request3).frame()) == null ? void 0 : _b3.page().trustedEmitter.emit("response", this);
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _remoteAddress_decorators = [main.invokeAtMostOnceForArguments];
    __esDecorate$6(_a4, null, _remoteAddress_decorators, { kind: "method", name: "remoteAddress", static: false, private: false, access: { has: (obj) => "remoteAddress" in obj, get: (obj) => obj.remoteAddress }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
var _a;
const requests = /* @__PURE__ */ new WeakMap();
class BidiHTTPRequest extends main.HTTPRequest {
  constructor(request, frame, redirectBy) {
    super();
    __privateAdd(this, _initialize5);
    __privateAdd(this, _hasInternalHeaderOverwrite);
    __privateAdd(this, _extraHTTPHeaders);
    __privateAdd(this, _userAgentHeaders);
    __privateAdd(this, _redirectBy, void 0);
    __privateAdd(this, _response2, null);
    __publicField(this, "id");
    __privateAdd(this, _frame2, void 0);
    __privateAdd(this, _request2, void 0);
    __privateAdd(this, _authenticationHandled, false);
    __privateAdd(this, _handleAuthentication, async () => {
      if (!__privateGet(this, _frame2)) {
        return;
      }
      const credentials = __privateGet(this, _frame2).page()._credentials;
      if (credentials && !__privateGet(this, _authenticationHandled)) {
        __privateSet(this, _authenticationHandled, true);
        void __privateGet(this, _request2).continueWithAuth({
          action: "provideCredentials",
          credentials: {
            type: "password",
            username: credentials.username,
            password: credentials.password
          }
        });
      } else {
        void __privateGet(this, _request2).continueWithAuth({
          action: "cancel"
        });
      }
    });
    requests.set(request, this);
    this.interception.enabled = request.isBlocked;
    __privateSet(this, _request2, request);
    __privateSet(this, _frame2, frame);
    __privateSet(this, _redirectBy, redirectBy);
    this.id = request.id;
  }
  static from(bidiRequest, frame, redirect) {
    var _a4;
    const request = new _a(bidiRequest, frame, redirect);
    __privateMethod(_a4 = request, _initialize5, initialize_fn5).call(_a4);
    return request;
  }
  get client() {
    return __privateGet(this, _frame2).client;
  }
  url() {
    return __privateGet(this, _request2).url;
  }
  resourceType() {
    throw new main.UnsupportedOperation();
  }
  method() {
    return __privateGet(this, _request2).method;
  }
  postData() {
    throw new main.UnsupportedOperation();
  }
  hasPostData() {
    throw new main.UnsupportedOperation();
  }
  async fetchPostData() {
    throw new main.UnsupportedOperation();
  }
  headers() {
    const headers = {};
    for (const header of __privateGet(this, _request2).headers) {
      headers[header.name.toLowerCase()] = header.value.value;
    }
    return {
      ...headers,
      ...__privateGet(this, _extraHTTPHeaders, extraHTTPHeaders_get),
      ...__privateGet(this, _userAgentHeaders, userAgentHeaders_get)
    };
  }
  response() {
    return __privateGet(this, _response2);
  }
  failure() {
    if (__privateGet(this, _request2).error === void 0) {
      return null;
    }
    return { errorText: __privateGet(this, _request2).error };
  }
  isNavigationRequest() {
    return __privateGet(this, _request2).navigation !== void 0;
  }
  initiator() {
    return __privateGet(this, _request2).initiator;
  }
  redirectChain() {
    if (__privateGet(this, _redirectBy) === void 0) {
      return [];
    }
    const redirects = [__privateGet(this, _redirectBy)];
    for (const redirect of redirects) {
      if (__privateGet(redirect, _redirectBy) !== void 0) {
        redirects.push(__privateGet(redirect, _redirectBy));
      }
    }
    return redirects;
  }
  frame() {
    return __privateGet(this, _frame2);
  }
  async continue(overrides, priority) {
    return await super.continue({
      headers: __privateGet(this, _hasInternalHeaderOverwrite, hasInternalHeaderOverwrite_get) ? this.headers() : void 0,
      ...overrides
    }, priority);
  }
  async _continue(overrides = {}) {
    const headers = getBidiHeaders(overrides.headers);
    this.interception.handled = true;
    return await __privateGet(this, _request2).continueRequest({
      url: overrides.url,
      method: overrides.method,
      body: overrides.postData ? {
        type: "base64",
        value: btoa(overrides.postData)
      } : void 0,
      headers: headers.length > 0 ? headers : void 0
    }).catch((error) => {
      this.interception.handled = false;
      return main.handleError(error);
    });
  }
  async _abort() {
    this.interception.handled = true;
    return await __privateGet(this, _request2).failRequest().catch((error) => {
      this.interception.handled = false;
      throw error;
    });
  }
  async _respond(response, _priority) {
    this.interception.handled = true;
    const responseBody = response.body && response.body instanceof Uint8Array ? response.body.toString("base64") : response.body ? btoa(response.body) : void 0;
    const headers = getBidiHeaders(response.headers);
    const hasContentLength = headers.some((header) => {
      return header.name === "content-length";
    });
    if (response.contentType) {
      headers.push({
        name: "content-type",
        value: {
          type: "string",
          value: response.contentType
        }
      });
    }
    if (responseBody && !hasContentLength) {
      const encoder = new TextEncoder();
      headers.push({
        name: "content-length",
        value: {
          type: "string",
          value: String(encoder.encode(responseBody).byteLength)
        }
      });
    }
    const status = response.status || 200;
    return await __privateGet(this, _request2).provideResponse({
      statusCode: status,
      headers: headers.length > 0 ? headers : void 0,
      reasonPhrase: main.STATUS_TEXTS[status],
      body: responseBody ? {
        type: "base64",
        value: responseBody
      } : void 0
    }).catch((error) => {
      this.interception.handled = false;
      throw error;
    });
  }
}
_redirectBy = new WeakMap();
_response2 = new WeakMap();
_frame2 = new WeakMap();
_request2 = new WeakMap();
_initialize5 = new WeakSet();
initialize_fn5 = function() {
  __privateGet(this, _request2).on("redirect", (request) => {
    const httpRequest = _a.from(request, __privateGet(this, _frame2), this);
    request.once("success", () => {
      __privateGet(this, _frame2).page().trustedEmitter.emit("requestfinished", httpRequest);
    });
    request.once("error", () => {
      __privateGet(this, _frame2).page().trustedEmitter.emit("requestfailed", httpRequest);
    });
    void httpRequest.finalizeInterceptions();
  });
  __privateGet(this, _request2).once("success", (data) => {
    __privateSet(this, _response2, BidiHTTPResponse.from(data, this));
  });
  __privateGet(this, _request2).on("authenticate", __privateGet(this, _handleAuthentication));
  __privateGet(this, _frame2).page().trustedEmitter.emit("request", this);
  if (__privateGet(this, _hasInternalHeaderOverwrite, hasInternalHeaderOverwrite_get)) {
    this.interception.handlers.push(async () => {
      await this.continue({
        headers: this.headers()
      }, 0);
    });
  }
};
_hasInternalHeaderOverwrite = new WeakSet();
hasInternalHeaderOverwrite_get = function() {
  return Boolean(Object.keys(__privateGet(this, _extraHTTPHeaders, extraHTTPHeaders_get)).length || Object.keys(__privateGet(this, _userAgentHeaders, userAgentHeaders_get)).length);
};
_extraHTTPHeaders = new WeakSet();
extraHTTPHeaders_get = function() {
  var _a4;
  return ((_a4 = __privateGet(this, _frame2)) == null ? void 0 : _a4.page()._extraHTTPHeaders) ?? {};
};
_userAgentHeaders = new WeakSet();
userAgentHeaders_get = function() {
  var _a4;
  return ((_a4 = __privateGet(this, _frame2)) == null ? void 0 : _a4.page()._userAgentHeaders) ?? {};
};
_authenticationHandled = new WeakMap();
_handleAuthentication = new WeakMap();
_a = BidiHTTPRequest;
function getBidiHeaders(rawHeaders) {
  const headers = [];
  for (const [name, value] of Object.entries(rawHeaders ?? [])) {
    if (!Object.is(value, void 0)) {
      const values = Array.isArray(value) ? value : [value];
      for (const value2 of values) {
        headers.push({
          name: name.toLowerCase(),
          value: {
            type: "string",
            value: String(value2)
          }
        });
      }
    }
  }
  return headers;
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class UnserializableError extends Error {
}
class BidiSerializer {
  static serialize(arg) {
    switch (typeof arg) {
      case "symbol":
      case "function":
        throw new UnserializableError(`Unable to serializable ${typeof arg}`);
      case "object":
        return __privateMethod(this, _serializeObject, serializeObject_fn).call(this, arg);
      case "undefined":
        return {
          type: "undefined"
        };
      case "number":
        return __privateMethod(this, _serializeNumber, serializeNumber_fn).call(this, arg);
      case "bigint":
        return {
          type: "bigint",
          value: arg.toString()
        };
      case "string":
        return {
          type: "string",
          value: arg
        };
      case "boolean":
        return {
          type: "boolean",
          value: arg
        };
    }
  }
}
_serializeNumber = new WeakSet();
serializeNumber_fn = function(arg) {
  let value;
  if (Object.is(arg, -0)) {
    value = "-0";
  } else if (Object.is(arg, Infinity)) {
    value = "Infinity";
  } else if (Object.is(arg, -Infinity)) {
    value = "-Infinity";
  } else if (Object.is(arg, NaN)) {
    value = "NaN";
  } else {
    value = arg;
  }
  return {
    type: "number",
    value
  };
};
_serializeObject = new WeakSet();
serializeObject_fn = function(arg) {
  if (arg === null) {
    return {
      type: "null"
    };
  } else if (Array.isArray(arg)) {
    const parsedArray = arg.map((subArg) => {
      return this.serialize(subArg);
    });
    return {
      type: "array",
      value: parsedArray
    };
  } else if (main.isPlainObject(arg)) {
    try {
      JSON.stringify(arg);
    } catch (error) {
      if (error instanceof TypeError && error.message.startsWith("Converting circular structure to JSON")) {
        error.message += " Recursive objects are not allowed.";
      }
      throw error;
    }
    const parsedObject = [];
    for (const key in arg) {
      parsedObject.push([this.serialize(key), this.serialize(arg[key])]);
    }
    return {
      type: "object",
      value: parsedObject
    };
  } else if (main.isRegExp(arg)) {
    return {
      type: "regexp",
      value: {
        pattern: arg.source,
        flags: arg.flags
      }
    };
  } else if (main.isDate(arg)) {
    return {
      type: "date",
      value: arg.toISOString()
    };
  }
  throw new UnserializableError("Custom object sterilization not possible. Use plain objects instead.");
};
__privateAdd(BidiSerializer, _serializeNumber);
__privateAdd(BidiSerializer, _serializeObject);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
function createEvaluationError(details) {
  if (details.exception.type !== "error") {
    return BidiDeserializer.deserialize(details.exception);
  }
  const [name = "", ...parts] = details.text.split(": ");
  const message = parts.join(": ");
  const error = new Error(message);
  error.name = name;
  const stackLines = [];
  if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
    for (const frame of details.stackTrace.callFrames.reverse()) {
      if (main.PuppeteerURL.isPuppeteerURL(frame.url) && frame.url !== main.PuppeteerURL.INTERNAL_URL) {
        const url = main.PuppeteerURL.parse(frame.url);
        stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
      } else {
        stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
      }
      if (stackLines.length >= Error.stackTraceLimit) {
        break;
      }
    }
  }
  error.stack = [details.text, ...stackLines].join("\n");
  return error;
}
function rewriteNavigationError(message, ms) {
  return (error) => {
    if (error instanceof main.ProtocolError) {
      error.message += ` at ${message}`;
    } else if (error instanceof main.TimeoutError) {
      error.message = `Navigation timeout of ${ms} ms exceeded`;
    }
    throw error;
  };
}
var __addDisposableResource$2 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$2 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError)
        throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
class BidiRealm extends main.Realm {
  constructor(realm, timeoutSettings) {
    super(timeoutSettings);
    __privateAdd(this, _evaluate);
    __publicField(this, "realm");
    __publicField(this, "internalPuppeteerUtil");
    this.realm = realm;
  }
  initialize() {
    this.realm.on("destroyed", ({ reason }) => {
      this.taskManager.terminateAll(new Error(reason));
      this.dispose();
    });
    this.realm.on("updated", () => {
      this.internalPuppeteerUtil = void 0;
      void this.taskManager.rerunAll();
    });
  }
  get puppeteerUtil() {
    const promise = Promise.resolve();
    main.scriptInjector.inject((script) => {
      if (this.internalPuppeteerUtil) {
        void this.internalPuppeteerUtil.then((handle) => {
          void handle.dispose();
        });
      }
      this.internalPuppeteerUtil = promise.then(() => {
        return this.evaluateHandle(script);
      });
    }, !this.internalPuppeteerUtil);
    return this.internalPuppeteerUtil;
  }
  async evaluateHandle(pageFunction, ...args) {
    return await __privateMethod(this, _evaluate, evaluate_fn).call(this, false, pageFunction, ...args);
  }
  async evaluate(pageFunction, ...args) {
    return await __privateMethod(this, _evaluate, evaluate_fn).call(this, true, pageFunction, ...args);
  }
  createHandle(result) {
    if ((result.type === "node" || result.type === "window") && this instanceof BidiFrameRealm) {
      return BidiElementHandle.from(result, this);
    }
    return BidiJSHandle.from(result, this);
  }
  async serialize(arg) {
    if (arg instanceof main.LazyArg) {
      arg = await arg.get(this);
    }
    if (arg instanceof BidiJSHandle || arg instanceof BidiElementHandle) {
      if (arg.realm !== this) {
        if (!(arg.realm instanceof BidiFrameRealm) || !(this instanceof BidiFrameRealm)) {
          throw new Error("Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa.");
        }
        if (arg.realm.environment !== this.environment) {
          throw new Error("Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a different page.");
        }
      }
      if (arg.disposed) {
        throw new Error("JSHandle is disposed!");
      }
      return arg.remoteValue();
    }
    return BidiSerializer.serialize(arg);
  }
  async destroyHandles(handles) {
    if (this.disposed) {
      return;
    }
    const handleIds = handles.map(({ id }) => {
      return id;
    }).filter((id) => {
      return id !== void 0;
    });
    if (handleIds.length === 0) {
      return;
    }
    await this.realm.disown(handleIds).catch((error) => {
      main.debugError(error);
    });
  }
  async adoptHandle(handle) {
    return await this.evaluateHandle((node) => {
      return node;
    }, handle);
  }
  async transferHandle(handle) {
    if (handle.realm === this) {
      return handle;
    }
    const transferredHandle = this.adoptHandle(handle);
    await handle.dispose();
    return await transferredHandle;
  }
}
_evaluate = new WeakSet();
evaluate_fn = async function(returnByValue, pageFunction, ...args) {
  var _a4;
  const sourceUrlComment = main.getSourceUrlComment(((_a4 = main.getSourcePuppeteerURLIfAvailable(pageFunction)) == null ? void 0 : _a4.toString()) ?? main.PuppeteerURL.INTERNAL_URL);
  let responsePromise;
  const resultOwnership = returnByValue ? "none" : "root";
  const serializationOptions = returnByValue ? {} : {
    maxObjectDepth: 0,
    maxDomDepth: 0
  };
  if (main.isString(pageFunction)) {
    const expression = main.SOURCE_URL_REGEX.test(pageFunction) ? pageFunction : `${pageFunction}
${sourceUrlComment}
`;
    responsePromise = this.realm.evaluate(expression, true, {
      resultOwnership,
      userActivation: true,
      serializationOptions
    });
  } else {
    let functionDeclaration = main.stringifyFunction(pageFunction);
    functionDeclaration = main.SOURCE_URL_REGEX.test(functionDeclaration) ? functionDeclaration : `${functionDeclaration}
${sourceUrlComment}
`;
    responsePromise = this.realm.callFunction(
      functionDeclaration,
      /* awaitPromise= */
      true,
      {
        arguments: args.length ? await Promise.all(args.map((arg) => {
          return this.serialize(arg);
        })) : [],
        resultOwnership,
        userActivation: true,
        serializationOptions
      }
    );
  }
  const result = await responsePromise;
  if ("type" in result && result.type === "exception") {
    throw createEvaluationError(result.exceptionDetails);
  }
  return returnByValue ? BidiDeserializer.deserialize(result.result) : this.createHandle(result.result);
};
const _BidiFrameRealm = class _BidiFrameRealm extends BidiRealm {
  constructor(realm, frame) {
    super(realm, frame.timeoutSettings);
    __privateAdd(this, _initialize6);
    __privateAdd(this, _frame3, void 0);
    __privateAdd(this, _bindingsInstalled, false);
    __privateSet(this, _frame3, frame);
  }
  static from(realm, frame) {
    var _a4;
    const frameRealm = new _BidiFrameRealm(realm, frame);
    __privateMethod(_a4 = frameRealm, _initialize6, initialize_fn6).call(_a4);
    return frameRealm;
  }
  get puppeteerUtil() {
    let promise = Promise.resolve();
    if (!__privateGet(this, _bindingsInstalled)) {
      promise = Promise.all([
        ExposeableFunction.from(this.environment, "__ariaQuerySelector", main.ARIAQueryHandler.queryOne, !!this.sandbox),
        ExposeableFunction.from(this.environment, "__ariaQuerySelectorAll", async (element, selector) => {
          const results = main.ARIAQueryHandler.queryAll(element, selector);
          return await element.realm.evaluateHandle((...elements) => {
            return elements;
          }, ...await main.AsyncIterableUtil.collect(results));
        }, !!this.sandbox)
      ]);
      __privateSet(this, _bindingsInstalled, true);
    }
    return promise.then(() => {
      return super.puppeteerUtil;
    });
  }
  get sandbox() {
    return this.realm.sandbox;
  }
  get environment() {
    return __privateGet(this, _frame3);
  }
  async adoptBackendNode(backendNodeId) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      const { object } = await __privateGet(this, _frame3).client.send("DOM.resolveNode", {
        backendNodeId,
        executionContextId: await this.realm.resolveExecutionContextId()
      });
      const handle = __addDisposableResource$2(env_1, BidiElementHandle.from({
        handle: object.objectId,
        type: "node"
      }, this), false);
      return await handle.evaluateHandle((element) => {
        return element;
      });
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources$2(env_1);
    }
  }
};
_frame3 = new WeakMap();
_initialize6 = new WeakSet();
initialize_fn6 = function() {
  __superGet(_BidiFrameRealm.prototype, this, "initialize").call(this);
  this.realm.on("updated", () => {
    this.environment.clearDocumentHandle();
    __privateSet(this, _bindingsInstalled, false);
  });
};
_bindingsInstalled = new WeakMap();
let BidiFrameRealm = _BidiFrameRealm;
const _BidiWorkerRealm = class _BidiWorkerRealm extends BidiRealm {
  constructor(realm, frame) {
    super(realm, frame.timeoutSettings);
    __privateAdd(this, _worker, void 0);
    __privateSet(this, _worker, frame);
  }
  static from(realm, worker) {
    const workerRealm = new _BidiWorkerRealm(realm, worker);
    workerRealm.initialize();
    return workerRealm;
  }
  get environment() {
    return __privateGet(this, _worker);
  }
  async adoptBackendNode() {
    throw new Error("Cannot adopt DOM nodes into a worker.");
  }
};
_worker = new WeakMap();
let BidiWorkerRealm = _BidiWorkerRealm;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const _BidiWebWorker = class _BidiWebWorker extends main.WebWorker {
  constructor(frame, realm) {
    super(realm.origin);
    __privateAdd(this, _frame4, void 0);
    __privateAdd(this, _realm, void 0);
    __privateSet(this, _frame4, frame);
    __privateSet(this, _realm, BidiWorkerRealm.from(realm, this));
  }
  static from(frame, realm) {
    const worker = new _BidiWebWorker(frame, realm);
    return worker;
  }
  get frame() {
    return __privateGet(this, _frame4);
  }
  mainRealm() {
    return __privateGet(this, _realm);
  }
  get client() {
    throw new main.UnsupportedOperation();
  }
};
_frame4 = new WeakMap();
_realm = new WeakMap();
let BidiWebWorker = _BidiWebWorker;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$5 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$5 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __setFunctionName$1 = function(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
let BidiFrame = (() => {
  var _parent, _frames, _initialize7, initialize_fn7, _createFrameTarget, createFrameTarget_fn, _detached$, detached$_fn, _exposedFunctions, _waitForLoad$, waitForLoad$_get, _waitForNetworkIdle$, waitForNetworkIdle$_get, _a4;
  let _classSuper = main.Frame;
  let _instanceExtraInitializers = [];
  let _goto_decorators;
  let _setContent_decorators;
  let _waitForNavigation_decorators;
  let _private_waitForLoad$_decorators;
  let _private_waitForLoad$_descriptor;
  let _private_waitForNetworkIdle$_decorators;
  let _private_waitForNetworkIdle$_descriptor;
  let _setFiles_decorators;
  let _locateNodes_decorators;
  return _a4 = class extends _classSuper {
    constructor(parent, browsingContext) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _createFrameTarget);
      __privateAdd(this, _detached$);
      __privateAdd(this, _waitForLoad$);
      __privateAdd(this, _waitForNetworkIdle$);
      __privateAdd(this, _parent, (__runInitializers$5(this, _instanceExtraInitializers), void 0));
      __publicField(this, "browsingContext");
      __privateAdd(this, _frames, /* @__PURE__ */ new WeakMap());
      __publicField(this, "realms");
      __publicField(this, "_id");
      __publicField(this, "client");
      __privateAdd(this, _exposedFunctions, /* @__PURE__ */ new Map());
      __privateSet(this, _parent, parent);
      this.browsingContext = browsingContext;
      this._id = browsingContext.id;
      this.client = new BidiCdpSession(this);
      this.realms = {
        default: BidiFrameRealm.from(this.browsingContext.defaultRealm, this),
        internal: BidiFrameRealm.from(this.browsingContext.createWindowRealm(`__puppeteer_internal_${Math.ceil(Math.random() * 1e4)}`), this)
      };
    }
    static from(parent, browsingContext) {
      var _a5;
      const frame = new _a4(parent, browsingContext);
      __privateMethod(_a5 = frame, _initialize7, initialize_fn7).call(_a5);
      return frame;
    }
    get timeoutSettings() {
      return this.page()._timeoutSettings;
    }
    mainRealm() {
      return this.realms.default;
    }
    isolatedRealm() {
      return this.realms.internal;
    }
    realm(id) {
      for (const realm of Object.values(this.realms)) {
        if (realm.realm.id === id) {
          return realm;
        }
      }
      return;
    }
    page() {
      let parent = __privateGet(this, _parent);
      while (parent instanceof _a4) {
        parent = __privateGet(parent, _parent);
      }
      return parent;
    }
    isOOPFrame() {
      throw new main.UnsupportedOperation();
    }
    url() {
      return this.browsingContext.url;
    }
    parentFrame() {
      if (__privateGet(this, _parent) instanceof _a4) {
        return __privateGet(this, _parent);
      }
      return null;
    }
    childFrames() {
      return [...this.browsingContext.children].map((child) => {
        return __privateGet(this, _frames).get(child);
      });
    }
    async goto(url, options = {}) {
      const [response] = await Promise.all([
        this.waitForNavigation(options),
        // Some implementations currently only report errors when the
        // readiness=interactive.
        //
        // Related: https://bugzilla.mozilla.org/show_bug.cgi?id=1846601
        this.browsingContext.navigate(
          url,
          "interactive"
          /* Bidi.BrowsingContext.ReadinessState.Interactive */
        ).catch((error) => {
          if (main.isErrorLike(error) && error.message.includes("net::ERR_HTTP_RESPONSE_CODE_FAILURE")) {
            return;
          }
          throw error;
        })
      ]).catch(rewriteNavigationError(url, options.timeout ?? this.timeoutSettings.navigationTimeout()));
      return response;
    }
    async setContent(html, options = {}) {
      await Promise.all([
        this.setFrameContent(html),
        main.firstValueFrom(main.combineLatest([
          __privateGet(this, _waitForLoad$, waitForLoad$_get).call(this, options),
          __privateGet(this, _waitForNetworkIdle$, waitForNetworkIdle$_get).call(this, options)
        ]))
      ]);
    }
    async waitForNavigation(options = {}) {
      const { timeout: ms = this.timeoutSettings.navigationTimeout() } = options;
      const frames = this.childFrames().map((frame) => {
        var _a5;
        return __privateMethod(_a5 = frame, _detached$, detached$_fn).call(_a5);
      });
      return await main.firstValueFrom(main.combineLatest([
        main.fromEmitterEvent(this.browsingContext, "navigation").pipe(main.switchMap(({ navigation }) => {
          return __privateGet(this, _waitForLoad$, waitForLoad$_get).call(this, options).pipe(main.delayWhen(() => {
            if (frames.length === 0) {
              return main.of(void 0);
            }
            return main.combineLatest(frames);
          }), main.raceWith(main.fromEmitterEvent(navigation, "fragment"), main.fromEmitterEvent(navigation, "failed"), main.fromEmitterEvent(navigation, "aborted").pipe(main.map(({ url }) => {
            throw new Error(`Navigation aborted: ${url}`);
          }))), main.switchMap(() => {
            if (navigation.request) {
              let requestFinished$ = function(request) {
                if (request.response || request.error) {
                  return main.of(navigation);
                }
                if (request.redirect) {
                  return requestFinished$(request.redirect);
                }
                return main.fromEmitterEvent(request, "success").pipe(main.raceWith(main.fromEmitterEvent(request, "error")), main.raceWith(main.fromEmitterEvent(request, "redirect"))).pipe(main.switchMap(() => {
                  return requestFinished$(request);
                }));
              };
              return requestFinished$(navigation.request);
            }
            return main.of(navigation);
          }));
        })),
        __privateGet(this, _waitForNetworkIdle$, waitForNetworkIdle$_get).call(this, options)
      ]).pipe(main.map(([navigation]) => {
        const request = navigation.request;
        if (!request) {
          return null;
        }
        const lastRequest = request.lastRedirect ?? request;
        const httpRequest = requests.get(lastRequest);
        return httpRequest.response();
      }), main.raceWith(main.timeout(ms), __privateMethod(this, _detached$, detached$_fn).call(this).pipe(main.map(() => {
        throw new main.TargetCloseError("Frame detached.");
      })))));
    }
    waitForDevicePrompt() {
      throw new main.UnsupportedOperation();
    }
    get detached() {
      return this.browsingContext.closed;
    }
    async exposeFunction(name, apply) {
      if (__privateGet(this, _exposedFunctions).has(name)) {
        throw new Error(`Failed to add page binding with name ${name}: globalThis['${name}'] already exists!`);
      }
      const exposeable = await ExposeableFunction.from(this, name, apply);
      __privateGet(this, _exposedFunctions).set(name, exposeable);
    }
    async removeExposedFunction(name) {
      const exposedFunction = __privateGet(this, _exposedFunctions).get(name);
      if (!exposedFunction) {
        throw new Error(`Failed to remove page binding with name ${name}: window['${name}'] does not exists!`);
      }
      __privateGet(this, _exposedFunctions).delete(name);
      await exposedFunction[Symbol.asyncDispose]();
    }
    async createCDPSession() {
      const { sessionId } = await this.client.send("Target.attachToTarget", {
        targetId: this._id,
        flatten: true
      });
      await this.browsingContext.subscribe([protocol.ChromiumBidi.BiDiModule.Cdp]);
      return new BidiCdpSession(this, sessionId);
    }
    async setFiles(element, files) {
      await this.browsingContext.setFiles(
        // SAFETY: ElementHandles are always remote references.
        element.remoteValue(),
        files
      );
    }
    async locateNodes(element, locator) {
      return await this.browsingContext.locateNodes(
        locator,
        // SAFETY: ElementHandles are always remote references.
        [element.remoteValue()]
      );
    }
  }, _parent = new WeakMap(), _frames = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = function() {
    for (const browsingContext of this.browsingContext.children) {
      __privateMethod(this, _createFrameTarget, createFrameTarget_fn).call(this, browsingContext);
    }
    this.browsingContext.on("browsingcontext", ({ browsingContext }) => {
      __privateMethod(this, _createFrameTarget, createFrameTarget_fn).call(this, browsingContext);
    });
    this.browsingContext.on("closed", () => {
      for (const session of BidiCdpSession.sessions.values()) {
        if (session.frame === this) {
          session.onClose();
        }
      }
      this.page().trustedEmitter.emit("framedetached", this);
    });
    this.browsingContext.on("request", ({ request }) => {
      const httpRequest = BidiHTTPRequest.from(request, this);
      request.once("success", () => {
        this.page().trustedEmitter.emit("requestfinished", httpRequest);
      });
      request.once("error", () => {
        this.page().trustedEmitter.emit("requestfailed", httpRequest);
      });
      void httpRequest.finalizeInterceptions();
    });
    this.browsingContext.on("navigation", ({ navigation }) => {
      navigation.once("fragment", () => {
        this.page().trustedEmitter.emit("framenavigated", this);
      });
    });
    this.browsingContext.on("load", () => {
      this.page().trustedEmitter.emit("load", void 0);
    });
    this.browsingContext.on("DOMContentLoaded", () => {
      this._hasStartedLoading = true;
      this.page().trustedEmitter.emit("domcontentloaded", void 0);
      this.page().trustedEmitter.emit("framenavigated", this);
    });
    this.browsingContext.on("userprompt", ({ userPrompt }) => {
      this.page().trustedEmitter.emit("dialog", BidiDialog.from(userPrompt));
    });
    this.browsingContext.on("log", ({ entry }) => {
      if (this._id !== entry.source.context) {
        return;
      }
      if (isConsoleLogEntry(entry)) {
        const args = entry.args.map((arg) => {
          return this.mainRealm().createHandle(arg);
        });
        const text = args.reduce((value, arg) => {
          const parsedValue = arg instanceof BidiJSHandle && arg.isPrimitiveValue ? BidiDeserializer.deserialize(arg.remoteValue()) : arg.toString();
          return `${value} ${parsedValue}`;
        }, "").slice(1);
        this.page().trustedEmitter.emit("console", new main.ConsoleMessage(entry.method, text, args, getStackTraceLocations(entry.stackTrace)));
      } else if (isJavaScriptLogEntry(entry)) {
        const error = new Error(entry.text ?? "");
        const messageHeight = error.message.split("\n").length;
        const messageLines = error.stack.split("\n").splice(0, messageHeight);
        const stackLines = [];
        if (entry.stackTrace) {
          for (const frame of entry.stackTrace.callFrames) {
            stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1})`);
            if (stackLines.length >= Error.stackTraceLimit) {
              break;
            }
          }
        }
        error.stack = [...messageLines, ...stackLines].join("\n");
        this.page().trustedEmitter.emit("pageerror", error);
      } else {
        main.debugError(`Unhandled LogEntry with type "${entry.type}", text "${entry.text}" and level "${entry.level}"`);
      }
    });
    this.browsingContext.on("worker", ({ realm }) => {
      const worker = BidiWebWorker.from(this, realm);
      realm.on("destroyed", () => {
        this.page().trustedEmitter.emit("workerdestroyed", worker);
      });
      this.page().trustedEmitter.emit("workercreated", worker);
    });
  }, _createFrameTarget = new WeakSet(), createFrameTarget_fn = function(browsingContext) {
    const frame = _a4.from(this, browsingContext);
    __privateGet(this, _frames).set(browsingContext, frame);
    this.page().trustedEmitter.emit("frameattached", frame);
    browsingContext.on("closed", () => {
      __privateGet(this, _frames).delete(browsingContext);
    });
    return frame;
  }, _detached$ = new WeakSet(), detached$_fn = function() {
    return main.defer(() => {
      if (this.detached) {
        return main.of(this);
      }
      return main.fromEmitterEvent(
        this.page().trustedEmitter,
        "framedetached"
        /* PageEvent.FrameDetached */
      ).pipe(main.filter((detachedFrame) => {
        return detachedFrame === this;
      }));
    });
  }, _exposedFunctions = new WeakMap(), _waitForLoad$ = new WeakSet(), waitForLoad$_get = function() {
    return _private_waitForLoad$_descriptor.value;
  }, _waitForNetworkIdle$ = new WeakSet(), waitForNetworkIdle$_get = function() {
    return _private_waitForNetworkIdle$_descriptor.value;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _goto_decorators = [main.throwIfDetached];
    _setContent_decorators = [main.throwIfDetached];
    _waitForNavigation_decorators = [main.throwIfDetached];
    _private_waitForLoad$_decorators = [main.throwIfDetached];
    _private_waitForNetworkIdle$_decorators = [main.throwIfDetached];
    _setFiles_decorators = [main.throwIfDetached];
    _locateNodes_decorators = [main.throwIfDetached];
    __esDecorate$5(_a4, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: (obj) => "goto" in obj, get: (obj) => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a4, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: (obj) => "setContent" in obj, get: (obj) => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a4, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: (obj) => "waitForNavigation" in obj, get: (obj) => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a4, _private_waitForLoad$_descriptor = { value: __setFunctionName$1(function(options = {}) {
      let { waitUntil = "load" } = options;
      const { timeout: ms = this.timeoutSettings.navigationTimeout() } = options;
      if (!Array.isArray(waitUntil)) {
        waitUntil = [waitUntil];
      }
      const events2 = /* @__PURE__ */ new Set();
      for (const lifecycleEvent of waitUntil) {
        switch (lifecycleEvent) {
          case "load": {
            events2.add("load");
            break;
          }
          case "domcontentloaded": {
            events2.add("DOMContentLoaded");
            break;
          }
        }
      }
      if (events2.size === 0) {
        return main.of(void 0);
      }
      return main.combineLatest([...events2].map((event) => {
        return main.fromEmitterEvent(this.browsingContext, event);
      })).pipe(main.map(() => {
      }), main.first(), main.raceWith(main.timeout(ms), __privateMethod(this, _detached$, detached$_fn).call(this).pipe(main.map(() => {
        throw new Error("Frame detached.");
      }))));
    }, "#waitForLoad$") }, _private_waitForLoad$_decorators, { kind: "method", name: "#waitForLoad$", static: false, private: true, access: { has: (obj) => __privateIn(_waitForLoad$, obj), get: (obj) => __privateGet(obj, _waitForLoad$, waitForLoad$_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a4, _private_waitForNetworkIdle$_descriptor = { value: __setFunctionName$1(function(options = {}) {
      let { waitUntil = "load" } = options;
      if (!Array.isArray(waitUntil)) {
        waitUntil = [waitUntil];
      }
      let concurrency = Infinity;
      for (const event of waitUntil) {
        switch (event) {
          case "networkidle0": {
            concurrency = Math.min(0, concurrency);
            break;
          }
          case "networkidle2": {
            concurrency = Math.min(2, concurrency);
            break;
          }
        }
      }
      if (concurrency === Infinity) {
        return main.of(void 0);
      }
      return this.page().waitForNetworkIdle$({
        idleTime: 500,
        timeout: options.timeout ?? this.timeoutSettings.timeout(),
        concurrency
      });
    }, "#waitForNetworkIdle$") }, _private_waitForNetworkIdle$_decorators, { kind: "method", name: "#waitForNetworkIdle$", static: false, private: true, access: { has: (obj) => __privateIn(_waitForNetworkIdle$, obj), get: (obj) => __privateGet(obj, _waitForNetworkIdle$, waitForNetworkIdle$_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a4, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: (obj) => "setFiles" in obj, get: (obj) => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$5(_a4, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: (obj) => "locateNodes" in obj, get: (obj) => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
function isConsoleLogEntry(event) {
  return event.type === "console";
}
function isJavaScriptLogEntry(event) {
  return event.type === "javascript";
}
function getStackTraceLocations(stackTrace) {
  const stackTraceLocations = [];
  if (stackTrace) {
    for (const callFrame of stackTrace.callFrames) {
      stackTraceLocations.push({
        url: callFrame.url,
        lineNumber: callFrame.lineNumber,
        columnNumber: callFrame.columnNumber
      });
    }
  }
  return stackTraceLocations;
}
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var SourceActionsType;
(function(SourceActionsType2) {
  SourceActionsType2["None"] = "none";
  SourceActionsType2["Key"] = "key";
  SourceActionsType2["Pointer"] = "pointer";
  SourceActionsType2["Wheel"] = "wheel";
})(SourceActionsType || (SourceActionsType = {}));
var ActionType;
(function(ActionType2) {
  ActionType2["Pause"] = "pause";
  ActionType2["KeyDown"] = "keyDown";
  ActionType2["KeyUp"] = "keyUp";
  ActionType2["PointerUp"] = "pointerUp";
  ActionType2["PointerDown"] = "pointerDown";
  ActionType2["PointerMove"] = "pointerMove";
  ActionType2["Scroll"] = "scroll";
})(ActionType || (ActionType = {}));
const getBidiKeyValue = (key) => {
  switch (key) {
    case "\r":
    case "\n":
      key = "Enter";
      break;
  }
  if ([...key].length === 1) {
    return key;
  }
  switch (key) {
    case "Cancel":
      return "";
    case "Help":
      return "";
    case "Backspace":
      return "";
    case "Tab":
      return "";
    case "Clear":
      return "";
    case "Enter":
      return "";
    case "Shift":
    case "ShiftLeft":
      return "";
    case "Control":
    case "ControlLeft":
      return "";
    case "Alt":
    case "AltLeft":
      return "";
    case "Pause":
      return "";
    case "Escape":
      return "";
    case "PageUp":
      return "";
    case "PageDown":
      return "";
    case "End":
      return "";
    case "Home":
      return "";
    case "ArrowLeft":
      return "";
    case "ArrowUp":
      return "";
    case "ArrowRight":
      return "";
    case "ArrowDown":
      return "";
    case "Insert":
      return "";
    case "Delete":
      return "";
    case "NumpadEqual":
      return "";
    case "Numpad0":
      return "";
    case "Numpad1":
      return "";
    case "Numpad2":
      return "";
    case "Numpad3":
      return "";
    case "Numpad4":
      return "";
    case "Numpad5":
      return "";
    case "Numpad6":
      return "";
    case "Numpad7":
      return "";
    case "Numpad8":
      return "";
    case "Numpad9":
      return "";
    case "NumpadMultiply":
      return "";
    case "NumpadAdd":
      return "";
    case "NumpadSubtract":
      return "";
    case "NumpadDecimal":
      return "";
    case "NumpadDivide":
      return "";
    case "F1":
      return "";
    case "F2":
      return "";
    case "F3":
      return "";
    case "F4":
      return "";
    case "F5":
      return "";
    case "F6":
      return "";
    case "F7":
      return "";
    case "F8":
      return "";
    case "F9":
      return "";
    case "F10":
      return "";
    case "F11":
      return "";
    case "F12":
      return "";
    case "Meta":
    case "MetaLeft":
      return "";
    case "ShiftRight":
      return "";
    case "ControlRight":
      return "";
    case "AltRight":
      return "";
    case "MetaRight":
      return "";
    case "Digit0":
      return "0";
    case "Digit1":
      return "1";
    case "Digit2":
      return "2";
    case "Digit3":
      return "3";
    case "Digit4":
      return "4";
    case "Digit5":
      return "5";
    case "Digit6":
      return "6";
    case "Digit7":
      return "7";
    case "Digit8":
      return "8";
    case "Digit9":
      return "9";
    case "KeyA":
      return "a";
    case "KeyB":
      return "b";
    case "KeyC":
      return "c";
    case "KeyD":
      return "d";
    case "KeyE":
      return "e";
    case "KeyF":
      return "f";
    case "KeyG":
      return "g";
    case "KeyH":
      return "h";
    case "KeyI":
      return "i";
    case "KeyJ":
      return "j";
    case "KeyK":
      return "k";
    case "KeyL":
      return "l";
    case "KeyM":
      return "m";
    case "KeyN":
      return "n";
    case "KeyO":
      return "o";
    case "KeyP":
      return "p";
    case "KeyQ":
      return "q";
    case "KeyR":
      return "r";
    case "KeyS":
      return "s";
    case "KeyT":
      return "t";
    case "KeyU":
      return "u";
    case "KeyV":
      return "v";
    case "KeyW":
      return "w";
    case "KeyX":
      return "x";
    case "KeyY":
      return "y";
    case "KeyZ":
      return "z";
    case "Semicolon":
      return ";";
    case "Equal":
      return "=";
    case "Comma":
      return ",";
    case "Minus":
      return "-";
    case "Period":
      return ".";
    case "Slash":
      return "/";
    case "Backquote":
      return "`";
    case "BracketLeft":
      return "[";
    case "Backslash":
      return "\\";
    case "BracketRight":
      return "]";
    case "Quote":
      return '"';
    default:
      throw new Error(`Unknown key: "${key}"`);
  }
};
class BidiKeyboard extends main.Keyboard {
  constructor(page) {
    super();
    __privateAdd(this, _page, void 0);
    __privateSet(this, _page, page);
  }
  async down(key, _options) {
    await __privateGet(this, _page).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions: [
          {
            type: ActionType.KeyDown,
            value: getBidiKeyValue(key)
          }
        ]
      }
    ]);
  }
  async up(key) {
    await __privateGet(this, _page).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions: [
          {
            type: ActionType.KeyUp,
            value: getBidiKeyValue(key)
          }
        ]
      }
    ]);
  }
  async press(key, options = {}) {
    const { delay = 0 } = options;
    const actions = [
      {
        type: ActionType.KeyDown,
        value: getBidiKeyValue(key)
      }
    ];
    if (delay > 0) {
      actions.push({
        type: ActionType.Pause,
        duration: delay
      });
    }
    actions.push({
      type: ActionType.KeyUp,
      value: getBidiKeyValue(key)
    });
    await __privateGet(this, _page).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions
      }
    ]);
  }
  async type(text, options = {}) {
    const { delay = 0 } = options;
    const values = [...text].map(getBidiKeyValue);
    const actions = [];
    if (delay <= 0) {
      for (const value of values) {
        actions.push({
          type: ActionType.KeyDown,
          value
        }, {
          type: ActionType.KeyUp,
          value
        });
      }
    } else {
      for (const value of values) {
        actions.push({
          type: ActionType.KeyDown,
          value
        }, {
          type: ActionType.Pause,
          duration: delay
        }, {
          type: ActionType.KeyUp,
          value
        });
      }
    }
    await __privateGet(this, _page).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions
      }
    ]);
  }
  async sendCharacter(char) {
    if ([...char].length > 1) {
      throw new Error("Cannot send more than 1 character.");
    }
    const frame = await __privateGet(this, _page).focusedFrame();
    await frame.isolatedRealm().evaluate(async (char2) => {
      document.execCommand("insertText", false, char2);
    }, char);
  }
}
_page = new WeakMap();
const getBidiButton = (button) => {
  switch (button) {
    case main.MouseButton.Left:
      return 0;
    case main.MouseButton.Middle:
      return 1;
    case main.MouseButton.Right:
      return 2;
    case main.MouseButton.Back:
      return 3;
    case main.MouseButton.Forward:
      return 4;
  }
};
class BidiMouse extends main.Mouse {
  constructor(page) {
    super();
    __privateAdd(this, _page2, void 0);
    __privateAdd(this, _lastMovePoint, { x: 0, y: 0 });
    __privateSet(this, _page2, page);
  }
  async reset() {
    __privateSet(this, _lastMovePoint, { x: 0, y: 0 });
    await __privateGet(this, _page2).mainFrame().browsingContext.releaseActions();
  }
  async move(x2, y2, options = {}) {
    const from = __privateGet(this, _lastMovePoint);
    const to = {
      x: Math.round(x2),
      y: Math.round(y2)
    };
    const actions = [];
    const steps = options.steps ?? 0;
    for (let i = 0; i < steps; ++i) {
      actions.push({
        type: ActionType.PointerMove,
        x: from.x + (to.x - from.x) * (i / steps),
        y: from.y + (to.y - from.y) * (i / steps),
        origin: options.origin
      });
    }
    actions.push({
      type: ActionType.PointerMove,
      ...to,
      origin: options.origin
    });
    __privateSet(this, _lastMovePoint, to);
    await __privateGet(this, _page2).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions
      }
    ]);
  }
  async down(options = {}) {
    await __privateGet(this, _page2).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions: [
          {
            type: ActionType.PointerDown,
            button: getBidiButton(options.button ?? main.MouseButton.Left)
          }
        ]
      }
    ]);
  }
  async up(options = {}) {
    await __privateGet(this, _page2).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions: [
          {
            type: ActionType.PointerUp,
            button: getBidiButton(options.button ?? main.MouseButton.Left)
          }
        ]
      }
    ]);
  }
  async click(x2, y2, options = {}) {
    const actions = [
      {
        type: ActionType.PointerMove,
        x: Math.round(x2),
        y: Math.round(y2),
        origin: options.origin
      }
    ];
    const pointerDownAction = {
      type: ActionType.PointerDown,
      button: getBidiButton(options.button ?? main.MouseButton.Left)
    };
    const pointerUpAction = {
      type: ActionType.PointerUp,
      button: pointerDownAction.button
    };
    for (let i = 1; i < (options.count ?? 1); ++i) {
      actions.push(pointerDownAction, pointerUpAction);
    }
    actions.push(pointerDownAction);
    if (options.delay) {
      actions.push({
        type: ActionType.Pause,
        duration: options.delay
      });
    }
    actions.push(pointerUpAction);
    await __privateGet(this, _page2).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions
      }
    ]);
  }
  async wheel(options = {}) {
    await __privateGet(this, _page2).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Wheel,
        id: "__puppeteer_wheel",
        actions: [
          {
            type: ActionType.Scroll,
            ...__privateGet(this, _lastMovePoint) ?? {
              x: 0,
              y: 0
            },
            deltaX: options.deltaX ?? 0,
            deltaY: options.deltaY ?? 0
          }
        ]
      }
    ]);
  }
  drag() {
    throw new main.UnsupportedOperation();
  }
  dragOver() {
    throw new main.UnsupportedOperation();
  }
  dragEnter() {
    throw new main.UnsupportedOperation();
  }
  drop() {
    throw new main.UnsupportedOperation();
  }
  dragAndDrop() {
    throw new main.UnsupportedOperation();
  }
}
_page2 = new WeakMap();
_lastMovePoint = new WeakMap();
class BidiTouchscreen extends main.Touchscreen {
  constructor(page) {
    super();
    __privateAdd(this, _page3, void 0);
    __privateSet(this, _page3, page);
  }
  async touchStart(x2, y2, options = {}) {
    await __privateGet(this, _page3).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_finger",
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: ActionType.PointerMove,
            x: Math.round(x2),
            y: Math.round(y2),
            origin: options.origin
          },
          {
            type: ActionType.PointerDown,
            button: 0
          }
        ]
      }
    ]);
  }
  async touchMove(x2, y2, options = {}) {
    await __privateGet(this, _page3).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_finger",
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: ActionType.PointerMove,
            x: Math.round(x2),
            y: Math.round(y2),
            origin: options.origin
          }
        ]
      }
    ]);
  }
  async touchEnd() {
    await __privateGet(this, _page3).mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_finger",
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: ActionType.PointerUp,
            button: 0
          }
        ]
      }
    ]);
  }
}
_page3 = new WeakMap();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __esDecorate$4 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers$4 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __addDisposableResource$1 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources$1 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError)
        throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
let BidiPage = (() => {
  var _trustedEmitter_accessor_storage, _browserContext, _frame6, _viewport, _workers5, _cdpEmulationManager, _initialize7, initialize_fn7, _userAgentInterception, _userAgentPreloadScript, _userInterception, _extraHeadersInterception, _authInterception, _toggleInterception, toggleInterception_fn, _go, go_fn, _a4;
  let _classSuper = main.Page;
  let _instanceExtraInitializers = [];
  let _trustedEmitter_decorators;
  let _trustedEmitter_initializers = [];
  return _a4 = class extends _classSuper {
    constructor(browserContext, browsingContext) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _toggleInterception);
      __privateAdd(this, _go);
      __privateAdd(this, _trustedEmitter_accessor_storage, (__runInitializers$4(this, _instanceExtraInitializers), __runInitializers$4(this, _trustedEmitter_initializers, new main.EventEmitter())));
      __privateAdd(this, _browserContext, void 0);
      __privateAdd(this, _frame6, void 0);
      __privateAdd(this, _viewport, null);
      __privateAdd(this, _workers5, /* @__PURE__ */ new Set());
      __publicField(this, "keyboard");
      __publicField(this, "mouse");
      __publicField(this, "touchscreen");
      __publicField(this, "accessibility");
      __publicField(this, "tracing");
      __publicField(this, "coverage");
      __privateAdd(this, _cdpEmulationManager, void 0);
      /**
       * @internal
       */
      __publicField(this, "_userAgentHeaders", {});
      __privateAdd(this, _userAgentInterception, void 0);
      __privateAdd(this, _userAgentPreloadScript, void 0);
      __privateAdd(this, _userInterception, void 0);
      /**
       * @internal
       */
      __publicField(this, "_extraHTTPHeaders", {});
      __privateAdd(this, _extraHeadersInterception, void 0);
      /**
       * @internal
       */
      __publicField(this, "_credentials", null);
      __privateAdd(this, _authInterception, void 0);
      __privateSet(this, _browserContext, browserContext);
      __privateSet(this, _frame6, BidiFrame.from(this, browsingContext));
      __privateSet(this, _cdpEmulationManager, new main.EmulationManager(__privateGet(this, _frame6).client));
      this.accessibility = new main.Accessibility(__privateGet(this, _frame6).client);
      this.tracing = new main.Tracing(__privateGet(this, _frame6).client);
      this.coverage = new main.Coverage(__privateGet(this, _frame6).client);
      this.keyboard = new BidiKeyboard(this);
      this.mouse = new BidiMouse(this);
      this.touchscreen = new BidiTouchscreen(this);
    }
    static from(browserContext, browsingContext) {
      var _a5;
      const page = new _a4(browserContext, browsingContext);
      __privateMethod(_a5 = page, _initialize7, initialize_fn7).call(_a5);
      return page;
    }
    get trustedEmitter() {
      return __privateGet(this, _trustedEmitter_accessor_storage);
    }
    set trustedEmitter(value) {
      __privateSet(this, _trustedEmitter_accessor_storage, value);
    }
    _client() {
      return __privateGet(this, _frame6).client;
    }
    async setUserAgent(userAgent, userAgentMetadata) {
      if (!__privateGet(this, _browserContext).browser().cdpSupported && userAgentMetadata) {
        throw new main.UnsupportedOperation("Current Browser does not support `userAgentMetadata`");
      } else if (__privateGet(this, _browserContext).browser().cdpSupported && userAgentMetadata) {
        return await this._client().send("Network.setUserAgentOverride", {
          userAgent,
          userAgentMetadata
        });
      }
      const enable = userAgent !== "";
      userAgent = userAgent ?? await __privateGet(this, _browserContext).browser().userAgent();
      this._userAgentHeaders = enable ? {
        "User-Agent": userAgent
      } : {};
      __privateSet(this, _userAgentInterception, await __privateMethod(this, _toggleInterception, toggleInterception_fn).call(this, [
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], __privateGet(this, _userAgentInterception), enable));
      const changeUserAgent = (userAgent2) => {
        Object.defineProperty(navigator, "userAgent", {
          value: userAgent2
        });
      };
      const frames = [__privateGet(this, _frame6)];
      for (const frame of frames) {
        frames.push(...frame.childFrames());
      }
      if (__privateGet(this, _userAgentPreloadScript)) {
        await this.removeScriptToEvaluateOnNewDocument(__privateGet(this, _userAgentPreloadScript));
      }
      const [evaluateToken] = await Promise.all([
        enable ? this.evaluateOnNewDocument(changeUserAgent, userAgent) : void 0,
        // When we disable the UserAgent we want to
        // evaluate the original value in all Browsing Contexts
        frames.map((frame) => {
          return frame.evaluate(changeUserAgent, userAgent);
        })
      ]);
      __privateSet(this, _userAgentPreloadScript, evaluateToken == null ? void 0 : evaluateToken.identifier);
    }
    async setBypassCSP(enabled) {
      await this._client().send("Page.setBypassCSP", { enabled });
    }
    async queryObjects(prototypeHandle) {
      main.assert(!prototypeHandle.disposed, "Prototype JSHandle is disposed!");
      main.assert(prototypeHandle.id, "Prototype JSHandle must not be referencing primitive value");
      const response = await __privateGet(this, _frame6).client.send("Runtime.queryObjects", {
        prototypeObjectId: prototypeHandle.id
      });
      return __privateGet(this, _frame6).mainRealm().createHandle({
        type: "array",
        handle: response.objects.objectId
      });
    }
    browser() {
      return this.browserContext().browser();
    }
    browserContext() {
      return __privateGet(this, _browserContext);
    }
    mainFrame() {
      return __privateGet(this, _frame6);
    }
    async focusedFrame() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource$1(env_1, await this.mainFrame().isolatedRealm().evaluateHandle(() => {
          let win = window;
          while (win.document.activeElement instanceof win.HTMLIFrameElement || win.document.activeElement instanceof win.HTMLFrameElement) {
            if (win.document.activeElement.contentWindow === null) {
              break;
            }
            win = win.document.activeElement.contentWindow;
          }
          return win;
        }), false);
        const value = handle.remoteValue();
        main.assert(value.type === "window");
        const frame = this.frames().find((frame2) => {
          return frame2._id === value.value.context;
        });
        main.assert(frame);
        return frame;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$1(env_1);
      }
    }
    frames() {
      const frames = [__privateGet(this, _frame6)];
      for (const frame of frames) {
        frames.push(...frame.childFrames());
      }
      return frames;
    }
    isClosed() {
      return __privateGet(this, _frame6).detached;
    }
    async close(options) {
      try {
        await __privateGet(this, _frame6).browsingContext.close(options == null ? void 0 : options.runBeforeUnload);
      } catch {
        return;
      }
    }
    async reload(options = {}) {
      const [response] = await Promise.all([
        __privateGet(this, _frame6).waitForNavigation(options),
        __privateGet(this, _frame6).browsingContext.reload()
      ]).catch(rewriteNavigationError(this.url(), options.timeout ?? this._timeoutSettings.navigationTimeout()));
      return response;
    }
    setDefaultNavigationTimeout(timeout) {
      this._timeoutSettings.setDefaultNavigationTimeout(timeout);
    }
    setDefaultTimeout(timeout) {
      this._timeoutSettings.setDefaultTimeout(timeout);
    }
    getDefaultTimeout() {
      return this._timeoutSettings.timeout();
    }
    isJavaScriptEnabled() {
      return __privateGet(this, _cdpEmulationManager).javascriptEnabled;
    }
    async setGeolocation(options) {
      return await __privateGet(this, _cdpEmulationManager).setGeolocation(options);
    }
    async setJavaScriptEnabled(enabled) {
      return await __privateGet(this, _cdpEmulationManager).setJavaScriptEnabled(enabled);
    }
    async emulateMediaType(type) {
      return await __privateGet(this, _cdpEmulationManager).emulateMediaType(type);
    }
    async emulateCPUThrottling(factor) {
      return await __privateGet(this, _cdpEmulationManager).emulateCPUThrottling(factor);
    }
    async emulateMediaFeatures(features) {
      return await __privateGet(this, _cdpEmulationManager).emulateMediaFeatures(features);
    }
    async emulateTimezone(timezoneId) {
      return await __privateGet(this, _cdpEmulationManager).emulateTimezone(timezoneId);
    }
    async emulateIdleState(overrides) {
      return await __privateGet(this, _cdpEmulationManager).emulateIdleState(overrides);
    }
    async emulateVisionDeficiency(type) {
      return await __privateGet(this, _cdpEmulationManager).emulateVisionDeficiency(type);
    }
    async setViewport(viewport) {
      if (!this.browser().cdpSupported) {
        await __privateGet(this, _frame6).browsingContext.setViewport({
          viewport: viewport.width && viewport.height ? {
            width: viewport.width,
            height: viewport.height
          } : null,
          devicePixelRatio: viewport.deviceScaleFactor ? viewport.deviceScaleFactor : null
        });
        __privateSet(this, _viewport, viewport);
        return;
      }
      const needsReload = await __privateGet(this, _cdpEmulationManager).emulateViewport(viewport);
      __privateSet(this, _viewport, viewport);
      if (needsReload) {
        await this.reload();
      }
    }
    viewport() {
      return __privateGet(this, _viewport);
    }
    async pdf(options = {}) {
      const { timeout: ms = this._timeoutSettings.timeout(), path = void 0 } = options;
      const { printBackground: background, margin, landscape, width, height, pageRanges: ranges, scale, preferCSSPageSize } = main.parsePDFOptions(options, "cm");
      const pageRanges = ranges ? ranges.split(", ") : [];
      await main.firstValueFrom(main.from(this.mainFrame().isolatedRealm().evaluate(() => {
        return document.fonts.ready;
      })).pipe(main.raceWith(main.timeout(ms))));
      const data = await main.firstValueFrom(main.from(__privateGet(this, _frame6).browsingContext.print({
        background,
        margin,
        orientation: landscape ? "landscape" : "portrait",
        page: {
          width,
          height
        },
        pageRanges,
        scale,
        shrinkToFit: !preferCSSPageSize
      })).pipe(main.raceWith(main.timeout(ms))));
      const buffer = Buffer.from(data, "base64");
      await this._maybeWriteBufferToFile(path, buffer);
      return buffer;
    }
    async createPDFStream(options) {
      const buffer = await this.pdf(options);
      return new ReadableStream({
        start(controller) {
          controller.enqueue(buffer);
          controller.close();
        }
      });
    }
    async _screenshot(options) {
      const { clip, type, captureBeyondViewport, quality } = options;
      if (options.omitBackground !== void 0 && options.omitBackground) {
        throw new main.UnsupportedOperation(`BiDi does not support 'omitBackground'.`);
      }
      if (options.optimizeForSpeed !== void 0 && options.optimizeForSpeed) {
        throw new main.UnsupportedOperation(`BiDi does not support 'optimizeForSpeed'.`);
      }
      if (options.fromSurface !== void 0 && !options.fromSurface) {
        throw new main.UnsupportedOperation(`BiDi does not support 'fromSurface'.`);
      }
      if (clip !== void 0 && clip.scale !== void 0 && clip.scale !== 1) {
        throw new main.UnsupportedOperation(`BiDi does not support 'scale' in 'clip'.`);
      }
      let box;
      if (clip) {
        if (captureBeyondViewport) {
          box = clip;
        } else {
          const [pageLeft, pageTop] = await this.evaluate(() => {
            if (!window.visualViewport) {
              throw new Error("window.visualViewport is not supported.");
            }
            return [
              window.visualViewport.pageLeft,
              window.visualViewport.pageTop
            ];
          });
          box = {
            ...clip,
            x: clip.x - pageLeft,
            y: clip.y - pageTop
          };
        }
      }
      const data = await __privateGet(this, _frame6).browsingContext.captureScreenshot({
        origin: captureBeyondViewport ? "document" : "viewport",
        format: {
          type: `image/${type}`,
          ...quality !== void 0 ? { quality: quality / 100 } : {}
        },
        ...box ? { clip: { type: "box", ...box } } : {}
      });
      return data;
    }
    async createCDPSession() {
      return await __privateGet(this, _frame6).createCDPSession();
    }
    async bringToFront() {
      await __privateGet(this, _frame6).browsingContext.activate();
    }
    async evaluateOnNewDocument(pageFunction, ...args) {
      const expression = evaluationExpression(pageFunction, ...args);
      const script = await __privateGet(this, _frame6).browsingContext.addPreloadScript(expression);
      return { identifier: script };
    }
    async removeScriptToEvaluateOnNewDocument(id) {
      await __privateGet(this, _frame6).browsingContext.removePreloadScript(id);
    }
    async exposeFunction(name, pptrFunction) {
      return await this.mainFrame().exposeFunction(name, "default" in pptrFunction ? pptrFunction.default : pptrFunction);
    }
    isDragInterceptionEnabled() {
      return false;
    }
    async setCacheEnabled(enabled) {
      await this._client().send("Network.setCacheDisabled", {
        cacheDisabled: !enabled
      });
    }
    async cookies(...urls) {
      const normalizedUrls = (urls.length ? urls : [this.url()]).map((url) => {
        return new URL(url);
      });
      const cookies = await __privateGet(this, _frame6).browsingContext.getCookies();
      return cookies.map((cookie) => {
        return bidiToPuppeteerCookie(cookie);
      }).filter((cookie) => {
        return normalizedUrls.some((url) => {
          return testUrlMatchCookie(cookie, url);
        });
      });
    }
    isServiceWorkerBypassed() {
      throw new main.UnsupportedOperation();
    }
    target() {
      throw new main.UnsupportedOperation();
    }
    waitForFileChooser() {
      throw new main.UnsupportedOperation();
    }
    workers() {
      return [...__privateGet(this, _workers5)];
    }
    async setRequestInterception(enable) {
      __privateSet(this, _userInterception, await __privateMethod(this, _toggleInterception, toggleInterception_fn).call(this, [
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], __privateGet(this, _userInterception), enable));
    }
    async setExtraHTTPHeaders(headers) {
      const extraHTTPHeaders = {};
      for (const [key, value] of Object.entries(headers)) {
        main.assert(main.isString(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
        extraHTTPHeaders[key.toLowerCase()] = value;
      }
      this._extraHTTPHeaders = extraHTTPHeaders;
      __privateSet(this, _extraHeadersInterception, await __privateMethod(this, _toggleInterception, toggleInterception_fn).call(this, [
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], __privateGet(this, _extraHeadersInterception), Boolean(Object.keys(this._extraHTTPHeaders).length)));
    }
    async authenticate(credentials) {
      __privateSet(this, _authInterception, await __privateMethod(this, _toggleInterception, toggleInterception_fn).call(this, [
        "authRequired"
        /* Bidi.Network.InterceptPhase.AuthRequired */
      ], __privateGet(this, _authInterception), Boolean(credentials)));
      this._credentials = credentials;
    }
    setDragInterception() {
      throw new main.UnsupportedOperation();
    }
    setBypassServiceWorker() {
      throw new main.UnsupportedOperation();
    }
    setOfflineMode() {
      throw new main.UnsupportedOperation();
    }
    emulateNetworkConditions() {
      throw new main.UnsupportedOperation();
    }
    async setCookie(...cookies) {
      const pageURL = this.url();
      const pageUrlStartsWithHTTP = pageURL.startsWith("http");
      for (const cookie of cookies) {
        let cookieUrl = cookie.url || "";
        if (!cookieUrl && pageUrlStartsWithHTTP) {
          cookieUrl = pageURL;
        }
        main.assert(cookieUrl !== "about:blank", `Blank page can not have cookie "${cookie.name}"`);
        main.assert(!String.prototype.startsWith.call(cookieUrl || "", "data:"), `Data URL page can not have cookie "${cookie.name}"`);
        const normalizedUrl = URL.canParse(cookieUrl) ? new URL(cookieUrl) : void 0;
        const domain = cookie.domain ?? (normalizedUrl == null ? void 0 : normalizedUrl.hostname);
        main.assert(domain !== void 0, `At least one of the url and domain needs to be specified`);
        const bidiCookie = {
          domain,
          name: cookie.name,
          value: {
            type: "string",
            value: cookie.value
          },
          ...cookie.path !== void 0 ? { path: cookie.path } : {},
          ...cookie.httpOnly !== void 0 ? { httpOnly: cookie.httpOnly } : {},
          ...cookie.secure !== void 0 ? { secure: cookie.secure } : {},
          ...cookie.sameSite !== void 0 ? { sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite) } : {},
          ...cookie.expires !== void 0 ? { expiry: cookie.expires } : {},
          // Chrome-specific properties.
          ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookie, "sameParty", "sourceScheme", "priority", "url")
        };
        if (cookie.partitionKey !== void 0) {
          await this.browserContext().userContext.setCookie(bidiCookie, cookie.partitionKey);
        } else {
          await __privateGet(this, _frame6).browsingContext.setCookie(bidiCookie);
        }
      }
    }
    async deleteCookie(...cookies) {
      await Promise.all(cookies.map(async (deleteCookieRequest) => {
        const cookieUrl = deleteCookieRequest.url ?? this.url();
        const normalizedUrl = URL.canParse(cookieUrl) ? new URL(cookieUrl) : void 0;
        const domain = deleteCookieRequest.domain ?? (normalizedUrl == null ? void 0 : normalizedUrl.hostname);
        main.assert(domain !== void 0, `At least one of the url and domain needs to be specified`);
        const filter = {
          domain,
          name: deleteCookieRequest.name,
          ...deleteCookieRequest.path !== void 0 ? { path: deleteCookieRequest.path } : {}
        };
        await __privateGet(this, _frame6).browsingContext.deleteCookie(filter);
      }));
    }
    async removeExposedFunction(name) {
      await __privateGet(this, _frame6).removeExposedFunction(name);
    }
    metrics() {
      throw new main.UnsupportedOperation();
    }
    async goBack(options = {}) {
      return await __privateMethod(this, _go, go_fn).call(this, -1, options);
    }
    async goForward(options = {}) {
      return await __privateMethod(this, _go, go_fn).call(this, 1, options);
    }
    waitForDevicePrompt() {
      throw new main.UnsupportedOperation();
    }
  }, _trustedEmitter_accessor_storage = new WeakMap(), _browserContext = new WeakMap(), _frame6 = new WeakMap(), _viewport = new WeakMap(), _workers5 = new WeakMap(), _cdpEmulationManager = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = function() {
    __privateGet(this, _frame6).browsingContext.on("closed", () => {
      this.trustedEmitter.emit("close", void 0);
      this.trustedEmitter.removeAllListeners();
    });
    this.trustedEmitter.on("workercreated", (worker) => {
      __privateGet(this, _workers5).add(worker);
    });
    this.trustedEmitter.on("workerdestroyed", (worker) => {
      __privateGet(this, _workers5).delete(worker);
    });
  }, _userAgentInterception = new WeakMap(), _userAgentPreloadScript = new WeakMap(), _userInterception = new WeakMap(), _extraHeadersInterception = new WeakMap(), _authInterception = new WeakMap(), _toggleInterception = new WeakSet(), toggleInterception_fn = async function(phases, interception, expected) {
    if (expected && !interception) {
      return await __privateGet(this, _frame6).browsingContext.addIntercept({
        phases
      });
    } else if (!expected && interception) {
      await __privateGet(this, _frame6).browsingContext.userContext.browser.removeIntercept(interception);
      return;
    }
    return interception;
  }, _go = new WeakSet(), go_fn = async function(delta, options) {
    try {
      const [response] = await Promise.all([
        this.waitForNavigation(options),
        __privateGet(this, _frame6).browsingContext.traverseHistory(delta)
      ]);
      return response;
    } catch (error) {
      if (main.isErrorLike(error)) {
        if (error.message.includes("no such history entry")) {
          return null;
        }
      }
      throw error;
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _trustedEmitter_decorators = [main.bubble()];
    __esDecorate$4(_a4, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: (obj) => "trustedEmitter" in obj, get: (obj) => obj.trustedEmitter, set: (obj, value) => {
      obj.trustedEmitter = value;
    } }, metadata: _metadata }, _trustedEmitter_initializers, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
function evaluationExpression(fun, ...args) {
  return `() => {${main.evaluationString(fun, ...args)}}`;
}
function testUrlMatchCookieHostname(cookie, normalizedUrl) {
  const cookieDomain = cookie.domain.toLowerCase();
  const urlHostname = normalizedUrl.hostname.toLowerCase();
  return cookieDomain === urlHostname;
}
function testUrlMatchCookiePath(cookie, normalizedUrl) {
  const uriPath = normalizedUrl.pathname;
  const cookiePath = cookie.path;
  if (uriPath === cookiePath) {
    return true;
  }
  if (uriPath.startsWith(cookiePath)) {
    if (cookiePath.endsWith("/")) {
      return true;
    }
    if (uriPath[cookiePath.length] === "/") {
      return true;
    }
  }
  return false;
}
function testUrlMatchCookie(cookie, url) {
  const normalizedUrl = new URL(url);
  main.assert(cookie !== void 0);
  if (!testUrlMatchCookieHostname(cookie, normalizedUrl)) {
    return false;
  }
  return testUrlMatchCookiePath(cookie, normalizedUrl);
}
function bidiToPuppeteerCookie(bidiCookie) {
  return {
    name: bidiCookie.name,
    // Presents binary value as base64 string.
    value: bidiCookie.value.value,
    domain: bidiCookie.domain,
    path: bidiCookie.path,
    size: bidiCookie.size,
    httpOnly: bidiCookie.httpOnly,
    secure: bidiCookie.secure,
    sameSite: convertCookiesSameSiteBiDiToCdp(bidiCookie.sameSite),
    expires: bidiCookie.expiry ?? -1,
    session: bidiCookie.expiry === void 0 || bidiCookie.expiry <= 0,
    // Extending with CDP-specific properties with `goog:` prefix.
    ...cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, "sameParty", "sourceScheme", "partitionKey", "partitionKeyOpaque", "priority")
  };
}
const CDP_SPECIFIC_PREFIX = "goog:";
function cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, ...propertyNames) {
  const result = {};
  for (const property of propertyNames) {
    if (bidiCookie[CDP_SPECIFIC_PREFIX + property] !== void 0) {
      result[property] = bidiCookie[CDP_SPECIFIC_PREFIX + property];
    }
  }
  return result;
}
function cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookieParam, ...propertyNames) {
  const result = {};
  for (const property of propertyNames) {
    if (cookieParam[property] !== void 0) {
      result[CDP_SPECIFIC_PREFIX + property] = cookieParam[property];
    }
  }
  return result;
}
function convertCookiesSameSiteBiDiToCdp(sameSite) {
  return sameSite === "strict" ? "Strict" : sameSite === "lax" ? "Lax" : "None";
}
function convertCookiesSameSiteCdpToBiDi(sameSite) {
  return sameSite === "Strict" ? "strict" : sameSite === "Lax" ? "lax" : "none";
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class BidiBrowserTarget extends main.Target {
  constructor(browser) {
    super();
    __privateAdd(this, _browser, void 0);
    __privateSet(this, _browser, browser);
  }
  asPage() {
    throw new main.UnsupportedOperation();
  }
  url() {
    return "";
  }
  createCDPSession() {
    throw new main.UnsupportedOperation();
  }
  type() {
    return main.TargetType.BROWSER;
  }
  browser() {
    return __privateGet(this, _browser);
  }
  browserContext() {
    return __privateGet(this, _browser).defaultBrowserContext();
  }
  opener() {
    throw new main.UnsupportedOperation();
  }
}
_browser = new WeakMap();
class BidiPageTarget extends main.Target {
  constructor(page) {
    super();
    __privateAdd(this, _page4, void 0);
    __privateSet(this, _page4, page);
  }
  async page() {
    return __privateGet(this, _page4);
  }
  async asPage() {
    return BidiPage.from(this.browserContext(), __privateGet(this, _page4).mainFrame().browsingContext);
  }
  url() {
    return __privateGet(this, _page4).url();
  }
  createCDPSession() {
    return __privateGet(this, _page4).createCDPSession();
  }
  type() {
    return main.TargetType.PAGE;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return __privateGet(this, _page4).browserContext();
  }
  opener() {
    throw new main.UnsupportedOperation();
  }
}
_page4 = new WeakMap();
class BidiFrameTarget extends main.Target {
  constructor(frame) {
    super();
    __privateAdd(this, _frame5, void 0);
    __privateAdd(this, _page5, void 0);
    __privateSet(this, _frame5, frame);
  }
  async page() {
    if (__privateGet(this, _page5) === void 0) {
      __privateSet(this, _page5, BidiPage.from(this.browserContext(), __privateGet(this, _frame5).browsingContext));
    }
    return __privateGet(this, _page5);
  }
  async asPage() {
    return BidiPage.from(this.browserContext(), __privateGet(this, _frame5).browsingContext);
  }
  url() {
    return __privateGet(this, _frame5).url();
  }
  createCDPSession() {
    return __privateGet(this, _frame5).createCDPSession();
  }
  type() {
    return main.TargetType.PAGE;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return __privateGet(this, _frame5).page().browserContext();
  }
  opener() {
    throw new main.UnsupportedOperation();
  }
}
_frame5 = new WeakMap();
_page5 = new WeakMap();
class BidiWorkerTarget extends main.Target {
  constructor(worker) {
    super();
    __privateAdd(this, _worker2, void 0);
    __privateSet(this, _worker2, worker);
  }
  async page() {
    throw new main.UnsupportedOperation();
  }
  async asPage() {
    throw new main.UnsupportedOperation();
  }
  url() {
    return __privateGet(this, _worker2).url();
  }
  createCDPSession() {
    throw new main.UnsupportedOperation();
  }
  type() {
    return main.TargetType.OTHER;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return __privateGet(this, _worker2).frame.page().browserContext();
  }
  opener() {
    throw new main.UnsupportedOperation();
  }
}
_worker2 = new WeakMap();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __esDecorate$3 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers$3 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
let BidiBrowserContext = (() => {
  var _trustedEmitter_accessor_storage, _browser2, _defaultViewport, _pages, _targets, _overrides, _initialize7, initialize_fn7, _createPage, createPage_fn, _a4;
  let _classSuper = main.BrowserContext;
  let _instanceExtraInitializers = [];
  let _trustedEmitter_decorators;
  let _trustedEmitter_initializers = [];
  return _a4 = class extends _classSuper {
    constructor(browser, userContext, options) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _createPage);
      __privateAdd(this, _trustedEmitter_accessor_storage, (__runInitializers$3(this, _instanceExtraInitializers), __runInitializers$3(this, _trustedEmitter_initializers, new main.EventEmitter())));
      __privateAdd(this, _browser2, void 0);
      __privateAdd(this, _defaultViewport, void 0);
      // This is public because of cookies.
      __publicField(this, "userContext");
      __privateAdd(this, _pages, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _targets, /* @__PURE__ */ new Map());
      __privateAdd(this, _overrides, []);
      __privateSet(this, _browser2, browser);
      this.userContext = userContext;
      __privateSet(this, _defaultViewport, options.defaultViewport);
    }
    static from(browser, userContext, options) {
      var _a5;
      const context = new _a4(browser, userContext, options);
      __privateMethod(_a5 = context, _initialize7, initialize_fn7).call(_a5);
      return context;
    }
    get trustedEmitter() {
      return __privateGet(this, _trustedEmitter_accessor_storage);
    }
    set trustedEmitter(value) {
      __privateSet(this, _trustedEmitter_accessor_storage, value);
    }
    targets() {
      return [...__privateGet(this, _targets).values()].flatMap(([target, frames]) => {
        return [target, ...frames.values()];
      });
    }
    async newPage() {
      const context = await this.userContext.createBrowsingContext(
        "tab"
        /* Bidi.BrowsingContext.CreateType.Tab */
      );
      const page = __privateGet(this, _pages).get(context);
      if (!page) {
        throw new Error("Page is not found");
      }
      if (__privateGet(this, _defaultViewport)) {
        try {
          await page.setViewport(__privateGet(this, _defaultViewport));
        } catch {
        }
      }
      return page;
    }
    async close() {
      if (!this.isIncognito()) {
        throw new Error("Default context cannot be closed!");
      }
      try {
        await this.userContext.remove();
      } catch (error) {
        main.debugError(error);
      }
    }
    browser() {
      return __privateGet(this, _browser2);
    }
    async pages() {
      return [...this.userContext.browsingContexts].map((context) => {
        return __privateGet(this, _pages).get(context);
      });
    }
    isIncognito() {
      return this.userContext.id !== UserContext.DEFAULT;
    }
    async overridePermissions(origin, permissions) {
      const permissionsSet = new Set(permissions.map((permission) => {
        const protocolPermission = main.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
        if (!protocolPermission) {
          throw new Error("Unknown permission: " + permission);
        }
        return permission;
      }));
      await Promise.all(Array.from(main.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.keys()).map((permission) => {
        const result = this.userContext.setPermissions(
          origin,
          {
            name: permission
          },
          permissionsSet.has(permission) ? "granted" : "denied"
          /* Bidi.Permissions.PermissionState.Denied */
        );
        __privateGet(this, _overrides).push({ origin, permission });
        if (!permissionsSet.has(permission)) {
          return result.catch(main.debugError);
        }
        return result;
      }));
    }
    async clearPermissionOverrides() {
      const promises = __privateGet(this, _overrides).map(({ permission, origin }) => {
        return this.userContext.setPermissions(
          origin,
          {
            name: permission
          },
          "prompt"
          /* Bidi.Permissions.PermissionState.Prompt */
        ).catch(main.debugError);
      });
      __privateSet(this, _overrides, []);
      await Promise.all(promises);
    }
    get id() {
      if (this.userContext.id === UserContext.DEFAULT) {
        return void 0;
      }
      return this.userContext.id;
    }
  }, _trustedEmitter_accessor_storage = new WeakMap(), _browser2 = new WeakMap(), _defaultViewport = new WeakMap(), _pages = new WeakMap(), _targets = new WeakMap(), _overrides = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = function() {
    for (const browsingContext of this.userContext.browsingContexts) {
      __privateMethod(this, _createPage, createPage_fn).call(this, browsingContext);
    }
    this.userContext.on("browsingcontext", ({ browsingContext }) => {
      __privateMethod(this, _createPage, createPage_fn).call(this, browsingContext);
    });
    this.userContext.on("closed", () => {
      this.trustedEmitter.removeAllListeners();
    });
  }, _createPage = new WeakSet(), createPage_fn = function(browsingContext) {
    const page = BidiPage.from(this, browsingContext);
    __privateGet(this, _pages).set(browsingContext, page);
    page.trustedEmitter.on("close", () => {
      __privateGet(this, _pages).delete(browsingContext);
    });
    const pageTarget = new BidiPageTarget(page);
    const pageTargets = /* @__PURE__ */ new Map();
    __privateGet(this, _targets).set(page, [pageTarget, pageTargets]);
    page.trustedEmitter.on("frameattached", (frame) => {
      const bidiFrame = frame;
      const target = new BidiFrameTarget(bidiFrame);
      pageTargets.set(bidiFrame, target);
      this.trustedEmitter.emit("targetcreated", target);
    });
    page.trustedEmitter.on("framenavigated", (frame) => {
      const bidiFrame = frame;
      const target = pageTargets.get(bidiFrame);
      if (target === void 0) {
        this.trustedEmitter.emit("targetchanged", pageTarget);
      } else {
        this.trustedEmitter.emit("targetchanged", target);
      }
    });
    page.trustedEmitter.on("framedetached", (frame) => {
      const bidiFrame = frame;
      const target = pageTargets.get(bidiFrame);
      if (target === void 0) {
        return;
      }
      pageTargets.delete(bidiFrame);
      this.trustedEmitter.emit("targetdestroyed", target);
    });
    page.trustedEmitter.on("workercreated", (worker) => {
      const bidiWorker = worker;
      const target = new BidiWorkerTarget(bidiWorker);
      pageTargets.set(bidiWorker, target);
      this.trustedEmitter.emit("targetcreated", target);
    });
    page.trustedEmitter.on("workerdestroyed", (worker) => {
      const bidiWorker = worker;
      const target = pageTargets.get(bidiWorker);
      if (target === void 0) {
        return;
      }
      pageTargets.delete(worker);
      this.trustedEmitter.emit("targetdestroyed", target);
    });
    page.trustedEmitter.on("close", () => {
      __privateGet(this, _targets).delete(page);
      this.trustedEmitter.emit("targetdestroyed", pageTarget);
    });
    this.trustedEmitter.emit("targetcreated", pageTarget);
    return page;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _trustedEmitter_decorators = [main.bubble()];
    __esDecorate$3(_a4, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: (obj) => "trustedEmitter" in obj, get: (obj) => obj.trustedEmitter, set: (obj, value) => {
      obj.trustedEmitter = value;
    } }, metadata: _metadata }, _trustedEmitter_initializers, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$2 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$2 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    function next() {
      while (env.stack.length) {
        var rec = env.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env.hasError)
        throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
let Browser = (() => {
  var _closed3, _reason, _disposables2, _userContexts, _sharedWorkers, _initialize7, initialize_fn7, _syncUserContexts, syncUserContexts_fn, _syncBrowsingContexts, syncBrowsingContexts_fn, _createUserContext, createUserContext_fn, _a4;
  let _classSuper = main.EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _close_decorators;
  let _addPreloadScript_decorators;
  let _removeIntercept_decorators;
  let _removePreloadScript_decorators;
  let _createUserContext_decorators;
  return _a4 = class extends _classSuper {
    constructor(session) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _syncUserContexts);
      __privateAdd(this, _syncBrowsingContexts);
      __privateAdd(this, _createUserContext);
      __privateAdd(this, _closed3, (__runInitializers$2(this, _instanceExtraInitializers), false));
      __privateAdd(this, _reason, void 0);
      __privateAdd(this, _disposables2, new main.DisposableStack());
      __privateAdd(this, _userContexts, /* @__PURE__ */ new Map());
      __publicField(this, "session");
      __privateAdd(this, _sharedWorkers, /* @__PURE__ */ new Map());
      this.session = session;
    }
    static async from(session) {
      var _a5;
      const browser = new _a4(session);
      await __privateMethod(_a5 = browser, _initialize7, initialize_fn7).call(_a5);
      return browser;
    }
    get closed() {
      return __privateGet(this, _closed3);
    }
    get defaultUserContext() {
      return __privateGet(this, _userContexts).get(UserContext.DEFAULT);
    }
    get disconnected() {
      return __privateGet(this, _reason) !== void 0;
    }
    get disposed() {
      return this.disconnected;
    }
    get userContexts() {
      return __privateGet(this, _userContexts).values();
    }
    dispose(reason, closed = false) {
      __privateSet(this, _closed3, closed);
      __privateSet(this, _reason, reason);
      this[main.disposeSymbol]();
    }
    async close() {
      try {
        await this.session.send("browser.close", {});
      } finally {
        this.dispose("Browser already closed.", true);
      }
    }
    async addPreloadScript(functionDeclaration, options = {}) {
      var _a5;
      const { result: { script } } = await this.session.send("script.addPreloadScript", {
        functionDeclaration,
        ...options,
        contexts: (_a5 = options.contexts) == null ? void 0 : _a5.map((context) => {
          return context.id;
        })
      });
      return script;
    }
    async removeIntercept(intercept) {
      await this.session.send("network.removeIntercept", {
        intercept
      });
    }
    async removePreloadScript(script) {
      await this.session.send("script.removePreloadScript", {
        script
      });
    }
    async createUserContext() {
      const { result: { userContext: context } } = await this.session.send("browser.createUserContext", {});
      return __privateMethod(this, _createUserContext, createUserContext_fn).call(this, context);
    }
    [(_dispose_decorators = [main.inertIfDisposed], _close_decorators = [main.throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _addPreloadScript_decorators = [main.throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _removeIntercept_decorators = [main.throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _removePreloadScript_decorators = [main.throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], _createUserContext_decorators = [main.throwIfDisposed((browser) => {
      return __privateGet(browser, _reason);
    })], main.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Browser was disconnected, probably because the session ended.");
      if (this.closed) {
        this.emit("closed", { reason: __privateGet(this, _reason) });
      }
      this.emit("disconnected", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables2).dispose();
      super[main.disposeSymbol]();
    }
  }, _closed3 = new WeakMap(), _reason = new WeakMap(), _disposables2 = new WeakMap(), _userContexts = new WeakMap(), _sharedWorkers = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = async function() {
    const sessionEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(this.session));
    sessionEmitter.once("ended", ({ reason }) => {
      this.dispose(reason);
    });
    sessionEmitter.on("script.realmCreated", (info) => {
      if (info.type !== "shared-worker") {
        return;
      }
      __privateGet(this, _sharedWorkers).set(info.realm, SharedWorkerRealm.from(this, info.realm, info.origin));
    });
    await __privateMethod(this, _syncUserContexts, syncUserContexts_fn).call(this);
    await __privateMethod(this, _syncBrowsingContexts, syncBrowsingContexts_fn).call(this);
  }, _syncUserContexts = new WeakSet(), syncUserContexts_fn = async function() {
    const { result: { userContexts } } = await this.session.send("browser.getUserContexts", {});
    for (const context of userContexts) {
      __privateMethod(this, _createUserContext, createUserContext_fn).call(this, context.userContext);
    }
  }, _syncBrowsingContexts = new WeakSet(), syncBrowsingContexts_fn = async function() {
    const contextIds = /* @__PURE__ */ new Set();
    let contexts;
    {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const sessionEmitter = __addDisposableResource(env_1, new main.EventEmitter(this.session), false);
        sessionEmitter.on("browsingContext.contextCreated", (info) => {
          contextIds.add(info.context);
        });
        const { result } = await this.session.send("browsingContext.getTree", {});
        contexts = result.contexts;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources(env_1);
      }
    }
    for (const info of contexts) {
      if (!contextIds.has(info.context)) {
        this.session.emit("browsingContext.contextCreated", info);
      }
      if (info.children) {
        contexts.push(...info.children);
      }
    }
  }, _createUserContext = new WeakSet(), createUserContext_fn = function(id) {
    const userContext = UserContext.create(this, id);
    __privateGet(this, _userContexts).set(userContext.id, userContext);
    const userContextEmitter = __privateGet(this, _disposables2).use(new main.EventEmitter(userContext));
    userContextEmitter.once("closed", () => {
      userContextEmitter.removeAllListeners();
      __privateGet(this, _userContexts).delete(userContext.id);
    });
    return userContext;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$2(_a4, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a4, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: (obj) => "close" in obj, get: (obj) => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a4, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: (obj) => "addPreloadScript" in obj, get: (obj) => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a4, null, _removeIntercept_decorators, { kind: "method", name: "removeIntercept", static: false, private: false, access: { has: (obj) => "removeIntercept" in obj, get: (obj) => obj.removeIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a4, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: (obj) => "removePreloadScript" in obj, get: (obj) => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$2(_a4, null, _createUserContext_decorators, { kind: "method", name: "createUserContext", static: false, private: false, access: { has: (obj) => "createUserContext" in obj, get: (obj) => obj.createUserContext }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers$1 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate$1 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
let Session = (() => {
  var _reason, _disposables2, _info, _connection_accessor_storage, _initialize7, initialize_fn7, _a4;
  let _classSuper = main.EventEmitter;
  let _instanceExtraInitializers = [];
  let _connection_decorators;
  let _connection_initializers = [];
  let _dispose_decorators;
  let _send_decorators;
  let _subscribe_decorators;
  let _addIntercepts_decorators;
  let _end_decorators;
  return _a4 = class extends _classSuper {
    constructor(connection, info) {
      super();
      __privateAdd(this, _initialize7);
      __privateAdd(this, _reason, (__runInitializers$1(this, _instanceExtraInitializers), void 0));
      __privateAdd(this, _disposables2, new main.DisposableStack());
      __privateAdd(this, _info, void 0);
      __publicField(this, "browser");
      __privateAdd(this, _connection_accessor_storage, __runInitializers$1(this, _connection_initializers, void 0));
      __privateSet(this, _info, info);
      this.connection = connection;
    }
    static async from(connection, capabilities) {
      var _a5;
      let result;
      try {
        result = (await connection.send("session.new", {
          capabilities
        })).result;
      } catch (err) {
        main.debugError(err);
        result = {
          sessionId: "",
          capabilities: {
            acceptInsecureCerts: false,
            browserName: "",
            browserVersion: "",
            platformName: "",
            setWindowRect: false,
            webSocketUrl: "",
            userAgent: ""
          }
        };
      }
      const session = new _a4(connection, result);
      await __privateMethod(_a5 = session, _initialize7, initialize_fn7).call(_a5);
      return session;
    }
    get connection() {
      return __privateGet(this, _connection_accessor_storage);
    }
    set connection(value) {
      __privateSet(this, _connection_accessor_storage, value);
    }
    get capabilities() {
      return __privateGet(this, _info).capabilities;
    }
    get disposed() {
      return this.ended;
    }
    get ended() {
      return __privateGet(this, _reason) !== void 0;
    }
    get id() {
      return __privateGet(this, _info).sessionId;
    }
    dispose(reason) {
      __privateSet(this, _reason, reason);
      this[main.disposeSymbol]();
    }
    /**
     * Currently, there is a 1:1 relationship between the session and the
     * session. In the future, we might support multiple sessions and in that
     * case we always needs to make sure that the session for the right session
     * object is used, so we implement this method here, although it's not defined
     * in the spec.
     */
    async send(method, params) {
      return await this.connection.send(method, params);
    }
    async subscribe(events2, contexts) {
      await this.send("session.subscribe", {
        events: events2,
        contexts
      });
    }
    async addIntercepts(events2, contexts) {
      await this.send("session.subscribe", {
        events: events2,
        contexts
      });
    }
    async end() {
      try {
        await this.send("session.end", {});
      } finally {
        this.dispose(`Session already ended.`);
      }
    }
    [(_connection_decorators = [main.bubble()], _dispose_decorators = [main.inertIfDisposed], _send_decorators = [main.throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], _subscribe_decorators = [main.throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], _addIntercepts_decorators = [main.throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], _end_decorators = [main.throwIfDisposed((session) => {
      return __privateGet(session, _reason);
    })], main.disposeSymbol)]() {
      __privateGet(this, _reason) ?? __privateSet(this, _reason, "Session already destroyed, probably because the connection broke.");
      this.emit("ended", { reason: __privateGet(this, _reason) });
      __privateGet(this, _disposables2).dispose();
      super[main.disposeSymbol]();
    }
  }, _reason = new WeakMap(), _disposables2 = new WeakMap(), _info = new WeakMap(), _connection_accessor_storage = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = async function() {
    this.browser = await Browser.from(this);
    const browserEmitter = __privateGet(this, _disposables2).use(this.browser);
    browserEmitter.once("closed", ({ reason }) => {
      this.dispose(reason);
    });
    const seen = /* @__PURE__ */ new WeakSet();
    this.on("browsingContext.fragmentNavigated", (info) => {
      if (seen.has(info)) {
        return;
      }
      seen.add(info);
      this.emit("browsingContext.navigationStarted", info);
      this.emit("browsingContext.fragmentNavigated", info);
    });
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    __esDecorate$1(_a4, null, _connection_decorators, { kind: "accessor", name: "connection", static: false, private: false, access: { has: (obj) => "connection" in obj, get: (obj) => obj.connection, set: (obj, value) => {
      obj.connection = value;
    } }, metadata: _metadata }, _connection_initializers, _instanceExtraInitializers);
    __esDecorate$1(_a4, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a4, null, _send_decorators, { kind: "method", name: "send", static: false, private: false, access: { has: (obj) => "send" in obj, get: (obj) => obj.send }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a4, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: (obj) => "subscribe" in obj, get: (obj) => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a4, null, _addIntercepts_decorators, { kind: "method", name: "addIntercepts", static: false, private: false, access: { has: (obj) => "addIntercepts" in obj, get: (obj) => obj.addIntercepts }, metadata: _metadata }, null, _instanceExtraInitializers);
    __esDecorate$1(_a4, null, _end_decorators, { kind: "method", name: "end", static: false, private: false, access: { has: (obj) => "end" in obj, get: (obj) => obj.end }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a4;
})();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_2 = accept(result.get))
        descriptor.get = _2;
      if (_2 = accept(result.set))
        descriptor.set = _2;
      if (_2 = accept(result.init))
        initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field")
        initializers.unshift(_2);
      else
        descriptor[key] = _2;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __setFunctionName = function(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
let BidiBrowser = (() => {
  var _a4, _trustedEmitter_accessor_storage, _trustedEmitter, trustedEmitter_get, trustedEmitter_set, _process, _closeCallback, _browserCore, _defaultViewport, _browserContexts, _target, _initialize7, initialize_fn7, _browserName, browserName_get, _browserVersion, browserVersion_get, _createBrowserContext, createBrowserContext_fn;
  let _classSuper = main.Browser;
  let _instanceExtraInitializers = [];
  let _private_trustedEmitter_decorators;
  let _private_trustedEmitter_initializers = [];
  let _private_trustedEmitter_descriptor;
  return _a4 = class extends _classSuper {
    constructor(browserCore, opts) {
      super();
      __privateAdd(this, _trustedEmitter);
      __privateAdd(this, _initialize7);
      __privateAdd(this, _browserName);
      __privateAdd(this, _browserVersion);
      __privateAdd(this, _createBrowserContext);
      __publicField(this, "protocol", (__runInitializers(this, _instanceExtraInitializers), "webDriverBiDi"));
      __privateAdd(this, _trustedEmitter_accessor_storage, __runInitializers(this, _private_trustedEmitter_initializers, new main.EventEmitter()));
      __privateAdd(this, _process, void 0);
      __privateAdd(this, _closeCallback, void 0);
      __privateAdd(this, _browserCore, void 0);
      __privateAdd(this, _defaultViewport, void 0);
      __privateAdd(this, _browserContexts, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _target, new BidiBrowserTarget(this));
      __privateSet(this, _process, opts.process);
      __privateSet(this, _closeCallback, opts.closeCallback);
      __privateSet(this, _browserCore, browserCore);
      __privateSet(this, _defaultViewport, opts.defaultViewport);
    }
    static async create(opts) {
      var _a5;
      const session = await Session.from(opts.connection, {
        alwaysMatch: {
          acceptInsecureCerts: opts.ignoreHTTPSErrors,
          webSocketUrl: true
        }
      });
      await session.subscribe(session.capabilities.browserName.toLocaleLowerCase().includes("firefox") ? _a4.subscribeModules : [..._a4.subscribeModules, ..._a4.subscribeCdpEvents]);
      const browser = new _a4(session.browser, opts);
      __privateMethod(_a5 = browser, _initialize7, initialize_fn7).call(_a5);
      return browser;
    }
    get cdpSupported() {
      return !__privateGet(this, _browserName, browserName_get).toLocaleLowerCase().includes("firefox");
    }
    async userAgent() {
      return __privateGet(this, _browserCore).session.capabilities.userAgent;
    }
    get connection() {
      return __privateGet(this, _browserCore).session.connection;
    }
    wsEndpoint() {
      return this.connection.url;
    }
    async close() {
      var _a5;
      if (this.connection.closed) {
        return;
      }
      try {
        await __privateGet(this, _browserCore).close();
        await ((_a5 = __privateGet(this, _closeCallback)) == null ? void 0 : _a5.call(null));
      } catch (error) {
        main.debugError(error);
      } finally {
        this.connection.dispose();
      }
    }
    get connected() {
      return !__privateGet(this, _browserCore).disconnected;
    }
    process() {
      return __privateGet(this, _process) ?? null;
    }
    async createBrowserContext(_options) {
      const userContext = await __privateGet(this, _browserCore).createUserContext();
      return __privateMethod(this, _createBrowserContext, createBrowserContext_fn).call(this, userContext);
    }
    async version() {
      return `${__privateGet(this, _browserName, browserName_get)}/${__privateGet(this, _browserVersion, browserVersion_get)}`;
    }
    browserContexts() {
      return [...__privateGet(this, _browserCore).userContexts].map((context) => {
        return __privateGet(this, _browserContexts).get(context);
      });
    }
    defaultBrowserContext() {
      return __privateGet(this, _browserContexts).get(__privateGet(this, _browserCore).defaultUserContext);
    }
    newPage() {
      return this.defaultBrowserContext().newPage();
    }
    targets() {
      return [
        __privateGet(this, _target),
        ...this.browserContexts().flatMap((context) => {
          return context.targets();
        })
      ];
    }
    target() {
      return __privateGet(this, _target);
    }
    async disconnect() {
      try {
        await __privateGet(this, _browserCore).session.end();
      } catch (error) {
        main.debugError(error);
      } finally {
        this.connection.dispose();
      }
    }
    get debugInfo() {
      return {
        pendingProtocolErrors: this.connection.getPendingProtocolErrors()
      };
    }
  }, _trustedEmitter_accessor_storage = new WeakMap(), _trustedEmitter = new WeakSet(), trustedEmitter_get = function() {
    return _private_trustedEmitter_descriptor.get.call(this);
  }, trustedEmitter_set = function(value) {
    return _private_trustedEmitter_descriptor.set.call(this, value);
  }, _process = new WeakMap(), _closeCallback = new WeakMap(), _browserCore = new WeakMap(), _defaultViewport = new WeakMap(), _browserContexts = new WeakMap(), _target = new WeakMap(), _initialize7 = new WeakSet(), initialize_fn7 = function() {
    var _a5;
    for (const userContext of __privateGet(this, _browserCore).userContexts) {
      __privateMethod(this, _createBrowserContext, createBrowserContext_fn).call(this, userContext);
    }
    __privateGet(this, _browserCore).once("disconnected", () => {
      __privateGet(this, _trustedEmitter, trustedEmitter_get).emit("disconnected", void 0);
      __privateGet(this, _trustedEmitter, trustedEmitter_get).removeAllListeners();
    });
    (_a5 = __privateGet(this, _process)) == null ? void 0 : _a5.once("close", () => {
      __privateGet(this, _browserCore).dispose("Browser process exited.", true);
      this.connection.dispose();
    });
  }, _browserName = new WeakSet(), browserName_get = function() {
    return __privateGet(this, _browserCore).session.capabilities.browserName;
  }, _browserVersion = new WeakSet(), browserVersion_get = function() {
    return __privateGet(this, _browserCore).session.capabilities.browserVersion;
  }, _createBrowserContext = new WeakSet(), createBrowserContext_fn = function(userContext) {
    const browserContext = BidiBrowserContext.from(this, userContext, {
      defaultViewport: __privateGet(this, _defaultViewport)
    });
    __privateGet(this, _browserContexts).set(userContext, browserContext);
    browserContext.trustedEmitter.on("targetcreated", (target) => {
      __privateGet(this, _trustedEmitter, trustedEmitter_get).emit("targetcreated", target);
    });
    browserContext.trustedEmitter.on("targetchanged", (target) => {
      __privateGet(this, _trustedEmitter, trustedEmitter_get).emit("targetchanged", target);
    });
    browserContext.trustedEmitter.on("targetdestroyed", (target) => {
      __privateGet(this, _trustedEmitter, trustedEmitter_get).emit("targetdestroyed", target);
    });
    return browserContext;
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
    _private_trustedEmitter_decorators = [main.bubble()];
    __esDecorate(_a4, _private_trustedEmitter_descriptor = { get: __setFunctionName(function() {
      return __privateGet(this, _trustedEmitter_accessor_storage);
    }, "#trustedEmitter", "get"), set: __setFunctionName(function(value) {
      __privateSet(this, _trustedEmitter_accessor_storage, value);
    }, "#trustedEmitter", "set") }, _private_trustedEmitter_decorators, { kind: "accessor", name: "#trustedEmitter", static: false, private: true, access: { has: (obj) => __privateIn(_trustedEmitter, obj), get: (obj) => __privateGet(obj, _trustedEmitter, trustedEmitter_get), set: (obj, value) => {
      __privateSet(obj, _trustedEmitter, value, trustedEmitter_set);
    } }, metadata: _metadata }, _private_trustedEmitter_initializers, _instanceExtraInitializers);
    if (_metadata)
      Object.defineProperty(_a4, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), // TODO: Update generator to include fully module
  __publicField(_a4, "subscribeModules", [
    "browsingContext",
    "network",
    "log",
    "script"
  ]), __publicField(_a4, "subscribeCdpEvents", [
    // Coverage
    "cdp.Debugger.scriptParsed",
    "cdp.CSS.styleSheetAdded",
    "cdp.Runtime.executionContextsCleared",
    // Tracing
    "cdp.Tracing.tracingComplete",
    // TODO: subscribe to all CDP events in the future.
    "cdp.Network.requestWillBeSent",
    "cdp.Debugger.scriptParsed",
    "cdp.Page.screencastFrame"
  ]), _a4;
})();
exports.BidiBrowser = BidiBrowser;
exports.BidiBrowserContext = BidiBrowserContext;
exports.BidiConnection = BidiConnection;
exports.BidiElementHandle = BidiElementHandle;
exports.BidiFrame = BidiFrame;
exports.BidiFrameRealm = BidiFrameRealm;
exports.BidiHTTPRequest = BidiHTTPRequest;
exports.BidiHTTPResponse = BidiHTTPResponse;
exports.BidiJSHandle = BidiJSHandle;
exports.BidiKeyboard = BidiKeyboard;
exports.BidiMouse = BidiMouse;
exports.BidiPage = BidiPage;
exports.BidiRealm = BidiRealm;
exports.BidiTouchscreen = BidiTouchscreen;
exports.BidiWorkerRealm = BidiWorkerRealm;
exports.connectBidiOverCdp = connectBidiOverCdp;
exports.requests = requests;
