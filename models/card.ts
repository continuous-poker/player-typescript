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
import { Rank } from './rank';
import { Suit } from './suit';
/**
 * A playing card.
 * @export
 * @interface Card
 */
export interface Card {
    /**
     * 
     * @type {Rank}
     * @memberof Card
     */
    rank: Rank;
    /**
     * 
     * @type {Suit}
     * @memberof Card
     */
    suit: Suit;
}
