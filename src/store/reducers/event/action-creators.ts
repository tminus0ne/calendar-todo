import { AppDispatch } from '../..';
import { UserService } from '../../../api/UserService';
import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/IUser';
import { EventActionsEnum, SetEventsAction, SetGuestsAction } from './types';


export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestsAction => ({
        type: EventActionsEnum.SET_GUESTS, payload,
    }),

    setEvents: (payload: IEvent[]): SetEventsAction => ({
        type: EventActionsEnum.SET_EVENTS, payload,
    }),

    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            dispatch(EventActionCreators.setGuests(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}