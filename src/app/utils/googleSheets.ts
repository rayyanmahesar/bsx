/**
 * Google Sheets Integration
 * 
 * To set this up:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1krXZ7woWujuHrpjkrZVW76gLmAqd4bs6pmLpXBPmsZ4/edit
 * 2. Click "Extensions" > "Apps Script"
 * 3. Delete any existing code and paste the script below
 * 4. Click "Deploy" > "New deployment"
 * 5. Select "Web app" as deployment type
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click "Deploy" and copy the web app URL
 * 9. Replace the SCRIPT_URL below with your deployment URL
 * 
 * Google Apps Script code to paste:
 * 
 * function doPost(e) {
 *   try {
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet();
 *     var data = JSON.parse(e.postData.contents);
 *     
 *     // Determine which sheet to use based on form type
 *     var sheetName = data.type === 'buyer' ? 'Buyers' : 'Sellers';
 *     var targetSheet = sheet.getSheetByName(sheetName);
 *     
 *     // Create sheet if it doesn't exist
 *     if (!targetSheet) {
 *       targetSheet = sheet.insertSheet(sheetName);
 *       targetSheet.appendRow(['Timestamp', 'Name', 'Email']);
 *     }
 *     
 *     // Add the data
 *     targetSheet.appendRow([
 *       new Date(),
 *       data.name,
 *       data.email
 *     ]);
 *     
 *     return ContentService.createTextOutput(JSON.stringify({
 *       'result': 'success',
 *       'message': 'Data added successfully'
 *     })).setMimeType(ContentService.MimeType.JSON);
 *     
 *   } catch (error) {
 *     return ContentService.createTextOutput(JSON.stringify({
 *       'result': 'error',
 *       'message': error.toString()
 *     })).setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 */

// Replace this with your Google Apps Script web app URL after deployment
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw-5aR0u_34oKFXym6MOc0mZoVF0Uv2VLK9SOqf0aUDHH2seUuiZUhL90IitEnWYi9U/exec';

interface FormSubmission {
  name: string;
  email: string;
  type: 'buyer' | 'seller';
}

export async function submitToGoogleSheets(data: FormSubmission): Promise<boolean> {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Note: With 'no-cors' mode, we can't read the response
    // We assume success if no error is thrown
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
}