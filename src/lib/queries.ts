// Queries for ERC725 subgraph
/* eslint-disable */
import { gql } from '@apollo/client/core';

interface Options {
    offset?: number;
    limit?: number;
    orderBy?: string;
    orderDirection?: 'asc' | 'desc';
}

export const queries = {
    /**
     * Get data for single key from ERC725 instance
     */
    getDataByKey(address: string, key: string) {
        return gql`
    {
      erc725DataStores (where:{address:"${address}",key:"${key}"}) {
        id
        address
        key
        value
      }
    }
    `;
    },

    /**
     * Get the ERC725 instance kv pairs
     */
    getAllData(id: string) {
        return gql`
    {
      erc725DataStores (where:{address:"${id}"}) {
        id
        address
        key
        value
      }
    }
    `;
    },

};
