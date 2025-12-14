/**
 * Type definition for transaction classification.
 * Represents whether a transaction is money coming in (income) or going out (expense).
 */
export type TransactionType = "income" | "expense";

/**
 * Represents a single financial transaction in the ledger.
 * Each transaction records a monetary movement with associated metadata.
 */
export interface Transaction {
    id: number; // Unique identifier for the transaction
    date: string; // eg. "2025-12-03" - Date when the transaction occurred (ISO format: YYYY-MM-DD)
    type: TransactionType; // Whether this is an income or expense transaction
    category: string; // Classification of the transaction (e.g., "Food", "Salary", "Utilities")
    amount: number; // Monetary value of the transaction (positive number)
    description: string; // Additional details or notes about the transaction
}

/**
 * Container for all ledger data.
 * Represents the complete financial ledger containing all transactions.
 */
export interface LedgerData {
    transactions: Transaction []; // Array of all transactions in the ledger
}

