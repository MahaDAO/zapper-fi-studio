/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { MakerGemJoin, MakerGemJoinInterface } from '../MakerGemJoin';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vat_',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'ilk_',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'gem_',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes4',
        name: 'sig',
        type: 'bytes4',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'usr',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'arg1',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'arg2',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'LogNote',
    type: 'event',
  },
  {
    constant: false,
    inputs: [],
    name: 'cage',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'dec',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'usr',
        type: 'address',
      },
    ],
    name: 'deny',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'usr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'wad',
        type: 'uint256',
      },
    ],
    name: 'exit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'gem',
    outputs: [
      {
        internalType: 'contract GemLike',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'ilk',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'usr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'wad',
        type: 'uint256',
      },
    ],
    name: 'join',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'live',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'usr',
        type: 'address',
      },
    ],
    name: 'rely',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'vat',
    outputs: [
      {
        internalType: 'contract VatLike',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'wards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

export class MakerGemJoin__factory {
  static readonly abi = _abi;
  static createInterface(): MakerGemJoinInterface {
    return new utils.Interface(_abi) as MakerGemJoinInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MakerGemJoin {
    return new Contract(address, _abi, signerOrProvider) as MakerGemJoin;
  }
}
