import { RootSagas }  from './Root';
import { PricingSagas } from 'oem-pricingcapability';

const sagas = {...RootSagas,...PricingSagas};

export const initSagas = (sagaMiddleware)=>{
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};