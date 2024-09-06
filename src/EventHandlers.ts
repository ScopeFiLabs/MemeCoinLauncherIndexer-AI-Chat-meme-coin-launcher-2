/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  TokenLauncher,
  TokenLauncher_OwnershipTransferred,
  TokenLauncher_TokenCreated,
  TokenLauncher_TokenDeployed,
} from "generated";

TokenLauncher.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: TokenLauncher_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.TokenLauncher_OwnershipTransferred.set(entity);
});


TokenLauncher.TokenCreated.handler(async ({ event, context }) => {
  const entity: TokenLauncher_TokenCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    token: event.params.token,
    symbol: event.params.symbol,
    name: event.params.name,
    description: event.params.description,
    image: event.params.image,
  };

  context.TokenLauncher_TokenCreated.set(entity);
});


TokenLauncher.TokenDeployed.handler(async ({ event, context }) => {
  const entity: TokenLauncher_TokenDeployed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    token: event.params.token,
    peer: event.params.peer,
    chain: event.params.chain,
  };

  context.TokenLauncher_TokenDeployed.set(entity);
});

