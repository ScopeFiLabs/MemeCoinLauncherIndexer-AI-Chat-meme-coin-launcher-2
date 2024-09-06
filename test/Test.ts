import assert from "assert";
import { 
  TestHelpers,
  TokenLauncher_OwnershipTransferred
} from "generated";
const { MockDb, TokenLauncher } = TestHelpers;

describe("TokenLauncher contract OwnershipTransferred event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for TokenLauncher contract OwnershipTransferred event
  const event = TokenLauncher.OwnershipTransferred.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("TokenLauncher_OwnershipTransferred is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await TokenLauncher.OwnershipTransferred.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualTokenLauncherOwnershipTransferred = mockDbUpdated.entities.TokenLauncher_OwnershipTransferred.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedTokenLauncherOwnershipTransferred: TokenLauncher_OwnershipTransferred = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualTokenLauncherOwnershipTransferred, expectedTokenLauncherOwnershipTransferred, "Actual TokenLauncherOwnershipTransferred should be the same as the expectedTokenLauncherOwnershipTransferred");
  });
});
