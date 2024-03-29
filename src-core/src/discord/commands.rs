#[tauri::command]
#[oyasumivr_macros::command_profiling]
pub async fn discord_update_activity(
    details: String,
    state: String,
    asset: String,
    asset_label: Option<String>,
) -> bool {
    let result = super::update_activity(details, state, asset, asset_label).await;
    result
}
