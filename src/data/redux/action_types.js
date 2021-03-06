const action_types = {
    SYST_LANG_SET: "SYST_LANG_SET",
    DEVICE_DATA_LOADED: "DEVICE_DATA_LOADED",
    PAGE_CHANGED: "PAGE_CHANGED",
    PAGE_LOAD_ERROR: "PAGE_LOAD_ERROR",

    //home page carousal items
    HOME_PAGE_LOADING: "HOME_PAGE_LOADING",
    HOME_PAGE_LOADED: "HOME_PAGE_LOADED",
    HOME_PAGE_LOAD_ERR: "HOME_PAGE_LOAD_ERR",
    CAROUSAL_LOADED: "CAROUSAL_LOADED",
    CAROUSAL_LOADING: "CAROUSAL_LOADING",
    CAROUSAL_LOAD_ERR: "CAROUSAL_LOAD_ERR",

    //items
    GET_NUMPLATES: "GET_NUMBER_PLATES",
    NUMPLATES_LOADING: "NUMPLATES_LOADING",
    NUMPLATES_LOADED: "NUMPLATES_LOADED",
    ALL_NUMPLATES_LOADED: "ALL_NUMPLATES_LOADED",
    NUMPLATES_LOAD_ERR: "NUMPLATES_LOAD_ERR",
    GET_FRAMES: "GET_FRAMES",
    FRAMES_LOADING: "FRAMES_LOADING",
    FRAMES_LOADED: "FRAMES_LOADED",
    FRAMES_LOAD_ERR: "FRAMES_LOAD_ERR",
    TOGGLE_FAVORITE: "TOGGLE_FAVORITE",

    //item details
    ITEM_LOADING: "ITEM_LOADING",
    ITEM_LOADED: "ITEM_LOADED",
    ITEM_LOAD_ERR: "ITEM_LOAD_ERR",

    //vehicle details
    VEHICLE_TYPE_LOADING: "VEHICLE_TYPE_LOADING",
    VEHICLE_TYPE_LOADED: "VEHICLE_TYPE_LOADED",
    VEHICLE_TYPE_LOAD_ERR: "VEHICLE_TYPE_LOAD_ERR",
    VEHICLE_LIST_LOADING: "VEHICLE_LIST_LOADING",
    VEHICLE_LIST_LOADED: "VEHICLE_LIST_LOADED",
    VEHICLE_LIST_LOAD_ERR: "VEHICLE_LIST_LOAD_ERR",
    VEHICLE_LOADING: "VEHICLE_LOADING",
    VEHICLE_LOADED: "VEHICLE_LOADED",
    VEHICLE_LOAD_ERR: "VEHICLE_LOAD_ERR",
    VEHICLE_REGISTRATION_ENTERED: "VEHICLE_REGISTRATION_ENTERED",

    //cart details
    INITIALIZE_CART: 'INITIALIZE_CART',
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    EDIT_CART_ITEM: 'EDIT_CART_ITEM',
    INC_QUANTITY: 'INC_QUANTITY',
    DEC_QUANTITY: 'DEC_QUANTITY',
    ORDER_ADDING: 'ORDER_ADDING',
    ORDER_ADDED: 'ORDER_ADDED',
    ORDER_ADD_ERR: 'ORDER_ADD_ERR',
    ORDER_UPDATING: 'ORDER_UPDATING',
    ORDER_UPDATED: 'ORDER_UPDATED',
    ORDER_UPDATE_ERR: 'ORDER_UPDATE_ERR',
    UPDATE_SHIPPING_ADDRESS: 'UPDATE_SHIPPING_ADDRESS',
    CLEAR_CART: 'CLEAR_CART'
};

export default action_types;
