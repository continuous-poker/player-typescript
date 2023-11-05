/* tslint:disable */
/* eslint-disable */
/**
 * Poker Player API
 * Poker Player API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Card } from './card';
/**
 * A player at the poker table.
 * @export
 * @interface Player
 */
export interface Player {
    /**
     * The player name.
     * @type {string}
     * @memberof Player
     */
    name: string;
    /**
     * The player's status. Indicates whether they are still in the game (ACTIVE), they have folded their current cards (FOLDED) or they are out of chips (OUT).
     * @type {string}
     * @memberof Player
     */
    status: PlayerStatusEnum;
    /**
     * The player's chip stack.
     * @type {number}
     * @memberof Player
     */
    stack: number;
    /**
     * The player's current bet.
     * @type {number}
     * @memberof Player
     */
    bet: number;
    /**
     * The player's cards. Will only be provided for the active player, i.e. you!
     * @type {Array<Card>}
     * @memberof Player
     */
    cards?: Array<Card>;
}

/**
    * @export
    * @enum {string}
    */
export enum PlayerStatusEnum {
    ACTIVE = 'ACTIVE',
    FOLDED = 'FOLDED',
    OUT = 'OUT'
}
