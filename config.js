module.exports = {
    /*
    * Открываем доступ до веб интерфейса: Настройки программы (Ctrl+P) -> Дополнительно -> Веб интерфейс.
    * Ставим галку "Использовать веб-интерфейс".
    * Придумываем логин и пароль (без спецсимволов или экранируем их), при желании ставим галку "Альтернативный порт" и указываем другой порт.
    * Заполняем поля ниже.
    * */
    username: 'admin',
    password: 'admin',
    port: 8080,

    // Это интервал в миллисекундах с которым программа будет получать список IP адресов и блокировать их. 10000 миллисекунд = 10 секунд.
    interval: 10000,

    // Это фильтр версии, менять только при необходимости.
    filters: {
        mu: {major: 3, minor: 5},
        bit: {major: 7, minor: 10},
        muMac: {major: 0, minor: 0},
        libtorrent: {major: 0, minor: 0}
    },

    /*
    * Расположение торрент клиента. На текущий момент только для работы с ipfilter.dat
    * Указывать если программа сама не смогла правильно определить директорию расположения клиента.
    * При указании пути необходимо экранировать обратные слэши, например: 'C:\\Users\\Administrator\\AppData\\Roaming\\uTorrent\\uTorrent.exe'
    * */
    torrentClientPath: '',

    /*
    * Очищать ipfilter.dat при запуске.
    * true - удалять историю.
    * false - только дописывать новые IP.
    * */
    flagClearIpFilter: true,

    /*
    * ###############################################
    * #                                             #
    * #                НЕ ТРОГАЕМ                   #
    * #  ДАЛЕЕ НАСТРОЙКИ ДЛЯ ОПЫТНЫХ ПОЛЬЗОВАТЕЛЕЙ  #
    * #                                             #
    * ###############################################
    * */

    /*
    * Выводить больше логов, нужно для поиска ошибок
    * true - включен
    * false - выключен
    * */
    debugLog: false,

    apiTorrentUrl: 'http://127.0.0.1',
    apiBttUrl: 'http://127.0.0.1',
    localApiToken: '',

    /*
    * Включение автоматической настройки.
    * Значение флагов в autoConfig: Вкл = 1, Выкл = 0
    * Команда для запуска: node src/autoConfig/index.js
    * */
    setSetting: false,
    autoConfig: {
        /*
        * Куда качать файлы, путь до папки.
        * */
        dir_active_download_flag: 1,
        dir_active_download: 'C:\\Users\\Administrator\\Downloads\\torrents',

        /*
        * Автоматический запуск скачивания торрентов при появлении в указанной папке торрент файлов.
        * */
        dir_autoload_flag: 1,
        dir_autoload: 'C:\\Users\\Administrator\\Downloads\\torrent_files',

        /*
        * Удалять торрент файлы (с расширением .torrent) после автоматического скачивания.
        * */
        dir_autoload_delete: 1,

        max_active_torrent: 100,
        max_active_downloads: 100,
        conns_globally: 2000,
        conns_per_torrent: 20,
        ul_slots_per_torrent: 20,
        max_dl_rate: 0, // лимит загрузки
        max_ul_rate: 0, // лимит отдачи
        max_ul_rate_seed_flag: 0, // включить альтернативную скорость отдачи если нет загрузок. Значения: 0, 1
        max_ul_rate_seed: 0, // альтернативная скорость
        // max_active_seeds: 1000,

        // 'webui.enable': 1,
        // 'webui.enable_listen': 1,
        // 'webui.port': 50000,
        // 'webui.username': 'I\'mSuperAdmin!',
        // 'webui.password': 'I\'mSuperPassword!',
    },
    web: {
        "settings": [
            ["user_agent", 2, "libtorrent/1.2.2.0"],
            ["announce_ip", 2, ""],
            ["mmap_cache", 2, ""],
            ["handshake_client_version", 2, ""],
            ["outgoing_interfaces", 2, ""],
            ["listen_interfaces", 2, "0.0.0.0:6881,[::]:6881"],
            ["proxy_hostname", 2, ""],
            ["proxy_username", 2, ""],
            ["proxy_password", 2, ""],
            ["i2p_hostname", 2, ""],
            ["peer_fingerprint", 2, "-BW122N-"],
            ["dht_bootstrap_nodes", 2, "dht.libtorrent.org:25401"],
            ["allow_multiple_connections_per_ip", 1, "false"],
            ["ignore_limits_on_local_network", 1, "true"],
            ["send_redundant_have", 1, "true"],
            ["lazy_bitfields", 1, "false"],
            ["use_dht_as_fallback", 1, "false"],
            ["upnp_ignore_nonrouters", 1, "false"],
            ["use_parole_mode", 1, "true"],
            ["cache.read", 1, "true"],
            ["cache.write", 1, "true"],
            ["dont_flush_write_cache", 1, "false"],
            ["coalesce_reads", 1, "true"],
            ["coalesce_writes", 1, "true"],
            ["seeds_prioritized", 1, "false"],
            ["dont_count_slow_torrents", 1, "true"],
            ["close_redundant_connections", 1, "true"],
            ["prioritize_partial_pieces", 1, "false"],
            ["rate_limit_ip_overhead", 1, "true"],
            ["announce_to_all_trackers", 1, "false"],
            ["announce_to_all_tiers", 1, "false"],
            ["prefer_udp_trackers", 1, "true"],
            ["strict_super_seeding", 1, "false"],
            ["lock_disk_cache", 1, "false"],
            ["disable_hash_checks", 1, "false"],
            ["allow_i2p_mixed", 1, "false"],
            ["low_prio_disk", 1, "true"],
            ["volatile_read_cache", 1, "false"],
            ["guided_read_cache", 1, "false"],
            ["no_atime_storage", 1, "true"],
            ["incoming_starts_queued_torrents", 1, "false"],
            ["report_true_downloaded", 1, "false"],
            ["strict_end_game_mode", 1, "true"],
            ["broadcast_lsd", 1, "true"],
            ["enable_outgoing_utp", 1, "true"],
            ["enable_incoming_utp", 1, "true"],
            ["enable_outgoing_tcp", 1, "true"],
            ["enable_incoming_tcp", 1, "true"],
            ["ignore_resume_timestamps", 1, "false"],
            ["no_recheck_incomplete_resume", 1, "false"],
            ["anonymous_mode", 1, "false"],
            ["report_web_seed_downloads", 1, "true"],
            ["rate_limit_utp", 1, "true"],
            ["announce_double_nat", 1, "false"],
            ["seeding_outgoing_connections", 1, "true"],
            ["no_connect_privileged_ports", 1, "false"],
            ["smooth_connects", 1, "true"],
            ["always_send_user_agent", 1, "false"],
            ["apply_ip_filter_to_trackers", 1, "true"],
            ["use_disk_read_ahead", 1, "true"],
            ["lock_files", 1, "false"],
            ["contiguous_recv_buffer", 1, "true"],
            ["ban_web_seeds", 1, "true"],
            ["allow_partial_disk_writes", 1, "true"],
            ["force_proxy", 1, "false"],
            ["support_share_mode", 1, "true"],
            ["support_merkle_torrents", 1, "true"],
            ["report_redundant_bytes", 1, "true"],
            ["listen_system_port_fallback", 1, "true"],
            ["use_disk_cache_pool", 1, "false"],
            ["announce_crypto_support", 1, "true"], ["upnp", 1, "true"], ["natpmp", 1, "true"], ["lsd", 1, "true"],
            ["dht", 1, "true"], ["prefer_rc4", 1, "false"], ["proxy_hostnames", 1, "true"],
            ["proxy_peer_connections", 1, "true"], ["auto_sequential", 1, "true"], ["proxy_tracker_connections", 1, "true"],
            ["enable_ip_notifier", 1, "true"], ["dht_prefer_verified_node_ids", 1, "true"],
            ["piece_extent_affinity", 1, "false"], ["tracker_completion_timeout", 0, "30"],
            ["tracker_receive_timeout", 0, "10"], ["stop_tracker_timeout", 0, "5"],
            ["tracker_maximum_response_length", 0, "1048576"], ["piece_timeout", 0, "20"], ["request_timeout", 0, "60"],
            ["request_queue_time", 0, "3"], ["max_allowed_in_request_queue", 0, "500"], ["max_out_request_queue", 0, "500"],
            ["whole_pieces_threshold", 0, "20"], ["peer_timeout", 0, "120"], ["urlseed_timeout", 0, "20"],
            ["urlseed_pipeline_size", 0, "5"], ["urlseed_wait_retry", 0, "30"], ["file_pool_size", 0, "40"],
            ["max_failcount", 0, "3"], ["min_reconnect_time", 0, "60"], ["peer_connect_timeout", 0, "15"],
            ["connection_speed", 0, "30"], ["inactivity_timeout", 0, "600"], ["unchoke_interval", 0, "15"],
            ["optimistic_unchoke_interval", 0, "30"], ["num_want", 0, "200"], ["initial_picker_threshold", 0, "4"],
            ["allowed_fast_set_size", 0, "5"], ["suggest_mode", 0, "0"], ["max_queued_disk_bytes", 0, "1048576"],
            ["handshake_timeout", 0, "10"], ["send_buffer_low_watermark", 0, "10240"], ["send_buffer_watermark", 0, "512000"],
            ["send_buffer_watermark_factor", 0, "50"], ["choking_algorithm", 0, "0"], ["seed_choking_algorithm", 0, "0"],
            ["cache.override_size", 0, "16"], ["cache_buffer_chunk_size", 0, "0"], ["cache_expiry", 0, "300"],
            ["disk_io_write_mode", 0, "0"], ["disk_io_read_mode", 0, "0"], ["outgoing_port", 0, "0"],
            ["num_outgoing_ports", 0, "0"], ["peer_tos", 0, "32"], ["max_active_downloads", 0, "100"],
            ["max_active_seeds", 0, "1000"], ["active_checking", 0, "1"], ["active_dht_limit", 0, "88"],
            ["active_tracker_limit", 0, "1600"], ["active_lsd_limit", 0, "60"], ["max_active_torrent", 0, "100"],
            ["active_loaded_limit", 0, "0"], ["auto_manage_interval", 0, "30"], ["seed_time_limit", 0, "86400"],
            ["auto_scrape_interval", 0, "1800"], ["auto_scrape_min_interval", 0, "300"], ["max_peerlist_size", 0, "3000"],
            ["max_paused_peerlist_size", 0, "1000"], ["min_announce_interval", 0, "300"], ["auto_manage_startup", 0, "60"],
            ["seeding_piece_quota", 0, "20"], ["max_rejects", 0, "50"], ["recv_socket_buffer_size", 0, "0"],
            ["send_socket_buffer_size", 0, "0"], ["max_peer_recv_buffer_size", 0, "2097152"],
            ["file_checks_delay_per_block", 0, "0"], ["read_cache_line_size", 0, "32"], ["write_cache_line_size", 0, "16"],
            ["optimistic_disk_retry", 0, "600"], ["max_suggest_pieces", 0, "16"],
            ["local_service_announce_interval", 0, "300"], ["dht_announce_interval", 0, "900"],
            ["udp_tracker_token_expiry", 0, "60"], ["default_cache_min_age", 0, "1"],
            ["num_optimistic_unchoke_slots", 0, "0"], ["default_est_reciprocation_rate", 0, "16000"],
            ["increase_est_reciprocation_rate", 0, "20"], ["decrease_est_reciprocation_rate", 0, "3"],
            ["max_pex_peers", 0, "50"], ["tick_interval", 0, "500"], ["share_mode_target", 0, "3"],
            ["max_ul_rate", 0, "0"], ["max_dl_rate", 0, "0"], ["local_upload_rate_limit", 0, "0"],
            ["local_download_rate_limit", 0, "0"], ["dht_upload_rate_limit", 0, "4000"], ["unchoke_slots_limit", 0, "8"],
            ["half_open_limit", 0, "0"], ["conns_globally", 0, "2000"], ["connections_slack", 0, "10"],
            ["utp_target_delay", 0, "100"], ["utp_gain_factor", 0, "3000"], ["utp_min_timeout", 0, "500"],
            ["utp_syn_resends", 0, "2"], ["utp_fin_resends", 0, "2"], ["utp_num_resends", 0, "3"],
            ["utp_connect_timeout", 0, "3000"], ["utp_delayed_ack", 0, "0"], ["utp_loss_multiplier", 0, "50"],
            ["mixed_mode_algorithm", 0, "1"], ["listen_queue_size", 0, "5"], ["torrent_connect_boost", 0, "30"],
            ["alert_queue_size", 0, "100000"], ["max_metadata_size", 0, "31457280"], ["hashing_threads", 0, "1"],
            ["checking_mem_usage", 0, "1024"], ["predictive_piece_announce", 0, "0"], ["aio_threads", 0, "4"],
            ["aio_max", 0, "300"], ["network_threads", 0, "0"], ["ssl_listen", 0, "0"], ["tracker_backoff", 0, "250"],
            ["share_ratio_limit", 0, "200"], ["seed_time_ratio_limit", 0, "700"], ["peer_turnover", 0, "4"],
            ["peer_turnover_cutoff", 0, "90"], ["peer_turnover_interval", 0, "300"],
            ["connect_seed_every_n_download", 0, "10"], ["max_http_recv_buffer_size", 0, "835584"],
            ["max_retry_port_bind", 0, "10"], ["alert_mask", 0, "-1"], ["out_enc_policy", 0, "1"],
            ["in_enc_policy", 0, "1"], ["allowed_enc_level", 0, "3"], ["inactive_down_rate", 0, "2048"],
            ["inactive_up_rate", 0, "2048"], ["proxy_type", 0, "0"], ["proxy_port", 0, "0"], ["i2p_port", 0, "0"],
            ["cache_size_volatile", 0, "256"], ["urlseed_max_request_bytes", 0, "16777216"],
            ["web_seed_name_lookup_retry", 0, "1800"], ["close_file_interval", 0, "120"],
            ["utp_cwnd_reduce_timer", 0, "100"], ["max_web_seed_connections", 0, "3"],
            ["resolver_cache_timeout", 0, "1200"], ["torrents_start_stopped", 1, "false"],
            ["dir_autoload", 2, "./autoload"], ["dir_autoload_flag", 1, "true"], ["bt.transp_disposition", 0, "15"],
            ["dir_active_download", 2, "C:\\Users\\Administrator\\Downloads\\t"], ["bind_port", 0, "6881"],
            ["gui.default_del_action", 0, "0"],
            ["webui.cookie", 2, "{}"], ["language", 2, "ru"],
            ["webui.enable_listen", 1, "true", ["access", 82]],
            ["webui.enable_guest", 1, "false"],
            ["webui.port", 0, "38565", ["access", 82]],
            ["cache.override", 1, "true", ["access", 82]],
            ["webui.uconnect_enable", 1, "false", ["access", 82]],
            ["autostart", 1, "true"],
            ["webvui.add_torrent_new_tab", 1, "true", ["access", "Y"]],
            ["webui.uconnect_username", 2, ""],
            ["wallet.enable", 1, "true"],
            ["wallet.failed", 1, "false", ["access", 82]],
            ["wallet.webui_port", 0, "49972", ["access", 82]],
            ["gui.show_add_torrent_dialog", 1, "false"]]
    },

    classic: {"settings": [
            ["install_modification_time",0,"0",{"access":"Y"}]
            ,["install_revision",0,"45988",{"access":"Y"}]
            ,["gui.granular_priority",1,"false",{"access":"Y"}]
            ,["gui.overhead_in_statusbar",1,"false",{"access":"Y"}]
            ,["gui.show_av_icon",1,"false",{"access":"Y"}]
            ,["gui.ulrate_menu",2,"0,5,10,15,20,30,40,50,100,150,200,300,400,500",{"access":"Y"}]
            ,["gui.dlrate_menu",2,"0,5,10,15,20,30,40,50,100,150,200,300,400,500",{"access":"Y"}]
            ,["gui.manual_ratemenu",1,"false",{"access":"Y"}]
            ,["gui.auto_restart",1,"true",{"access":"Y"}]
            ,["minified",1,"false",{"access":"Y"}]
            ,["mainwndstatus",0,"5",{"access":"Y"}]
            ,["mainwnd_split",0,"298",{"access":"Y"}]
            ,["mainwnd_split_x",0,"400",{"access":"Y"}]
            ,["playback_split_x",0,"-1",{"access":"Y"}]
            ,["show_general_tab",1,"true",{"access":"Y"}]
            ,["show_tracker_tab",1,"true",{"access":"Y"}]
            ,["show_playback_tab",1,"false",{"access":"Y"}]
            ,["show_peers_tab",1,"true",{"access":"Y"}]
            ,["show_pieces_tab",1,"false",{"access":"Y"}]
            ,["show_files_tab",1,"true",{"access":"Y"}]
            ,["show_speed_tab",1,"true",{"access":"Y"}]
            ,["show_logger_tab",1,"false",{"access":"Y"}]
            ,["show_related_tab",1,"false",{"access":"Y"}]
            ,["notify_complete",1,"true",{"access":"Y"}]
            ,["gui.color_progress_bars",1,"true",{"access":"Y"}]
            ,["search_list",2,"Smart Search|https://media.adaware.com/torrentscanner/lp/search.php?p=bt&q=",{"access":"Y"}]
            ,["search_list_sel",0,"0",{"access":"Y"}]
            ,["is_search_filtering",1,"false",{"access":"Y"}]
            ,["offers.cookies.customized_ads",1,"true",{"access":"Y"}]
            ,["offers.left_rail_offer_enabled",1,"true",{"access":"Y"}]
            ,["offers.sponsored_torrent_offer_enabled",1,"true",{"access":"Y"}]
            ,["offers.featured_content_badge_enabled",1,"true",{"access":"Y"}]
            ,["offers.featured_content_notifications_enabled",1,"true",{"access":"Y"}]
            ,["offers.featured_content_rss_enabled",1,"true",{"access":"Y"}]
            ,["offers.featured_content_rss_url",2,"",{"access":"Y"}]
            ,["offers.featured_content_rss_update_interval",0,"86400",{"access":"Y"}]
            ,["offers.featured_content_rss_randomize",1,"true",{"access":"Y"}]
            ,["offers.404_dismiss",0,"0",{"access":"Y"}]
            ,["offers.404_shown",0,"0",{"access":"Y"}]
            ,["offers.404_icon",0,"",{"access":"Y"}]
            ,["offers.404_url",2,"",{"access":"Y"}]
            ,["offers.404_text",2,"",{"access":"Y"}]
            ,["offers.404_tb_img",2,"",{"access":"Y"}]
            ,["offers.404_tb_bgc",0,"0",{"access":"Y"}]
            ,["offers.404_tb_badge_img",2,"",{"access":"Y"}]
            ,["offers.404_tb_badge_coords",0,"0",{"access":"Y"}]
            ,["offers.404_node",0,"0",{"access":"Y"}]
            ,["offers.404_code",0,"0",{"access":"Y"}]
            ,["offers.days_to_show",0,"0",{"access":"Y"}]
            ,["torrents_start_stopped",1,"false",{"access":"Y"}]
            ,["confirm_when_deleting",1,"true",{"access":"Y"}]
            ,["confirm_remove_tracker",1,"false",{"access":"Y"}]
            ,["streaming.safety_factor",0,"110",{"access":"Y"}]
            ,["streaming.failover_rate_factor",0,"200",{"access":"Y"}]
            ,["streaming.failover_set_percentage",0,"70",{"access":"Y"}]
            ,["settings_saved_systime",0,"1620360000",{"access":"R"}]
            ,["confirm_exit",1,"true",{"access":"Y"}]
            ,["confirm_exit_critical_seeder",1,"true",{"access":"Y"}]
            ,["close_to_tray",1,"true",{"access":"Y"}]
            ,["minimize_to_tray",1,"false",{"access":"Y"}]
            ,["start_minimized",1,"true",{"access":"Y"}]
            ,["tray_activate",1,"true",{"access":"Y"}]
            ,["tray.show",1,"true",{"access":"Y"}]
            ,["tray.single_click",1,"false",{"access":"Y"}]
            ,["activate_on_file",1,"true",{"access":"Y"}]
            ,["check_assoc_on_start",1,"false",{"access":"Y"}]
            ,["bind_port",0,"16594",{"access":"Y"}]
            ,["tracker_ip",2,"",{"access":"Y"}]
            ,["dir_active_download_flag",1,"true",{"access":"Y"}]
            ,["dir_torrent_files_flag",1,"false",{"access":"Y"}]
            ,["dir_completed_download_flag",1,"false",{"access":"Y"}]
            ,["dir_completed_torrents_flag",1,"false",{"access":"Y"}]
            ,["dir_active_download",2,"C:\\Users\\Administrator\\Downloads\\t",{"access":"Y"}]
            ,["dir_torrent_files",2,"",{"access":"Y"}]
            ,["dir_completed_download",2,"",{"access":"Y"}]
            ,["dir_completed_torrents",2,"",{"access":"Y"}]
            ,["dir_add_label",1,"false",{"access":"Y"}]
            ,["max_dl_rate",0,"0",{"access":"Y"}]
            ,["max_ul_rate",0,"0",{"access":"Y"}]
            ,["max_ul_rate_seed",0,"0",{"access":"Y"}]
            ,["max_ul_rate_seed_flag",1,"false",{"access":"Y"}]
            ,["private_ip",1,"false",{"access":"Y"}]
            ,["only_proxied_conns",1,"false",{"access":"Y"}]
            ,["no_local_dns",1,"false",{"access":"Y"}]
            ,["gui.report_problems",1,"true",{"access":"Y"}]
            ,["gui.persistent_labels",2,"",{"access":"Y"}]
            ,["gui.compat_diropen",1,"false",{"access":"Y"}]
            ,["gui.alternate_color",1,"false",{"access":"Y"}]
            ,["gui.transparent_graph_legend",1,"false",{"access":"Y"}]
            ,["sys.prevent_standby",1,"true",{"access":"Y"}]
            ,["sys.enable_wine_hacks",1,"true",{"access":"Y"}]
            ,["ul_slots_per_torrent",0,"100",{"access":"Y"}]
            ,["conns_per_torrent",0,"100",{"access":"Y"}]
            ,["conns_globally",0,"1500",{"access":"Y"}]
            ,["max_active_torrent",0,"100",{"access":"Y"}]
            ,["max_active_downloads",0,"100",{"access":"Y"}]
            ,["seed_prio_limitul",0,"500",{"access":"Y"}]
            ,["seed_prio_limitul_flag",1,"false",{"access":"Y"}]
            ,["seeds_prioritized",1,"false",{"access":"Y"}]
            ,["seed_ratio",0,"0",{"access":"Y"}]
            ,["seed_time",0,"0",{"access":"Y"}]
            ,["seed_num",0,"0",{"access":"Y"}]
            ,["resolve_peerips",1,"true",{"access":"Y"}]
            ,["check_update",1,"true",{"access":"Y"}]
            ,["mutable_cfu_interval",0,"0",{"access":"Y"}]
            ,["check_update_beta",1,"false",{"access":"Y"}]
            ,["anoninfo",1,"true",{"access":"Y"}]
            ,["upnp",1,"true",{"access":"Y"}]
            ,["use_udp_trackers",1,"true",{"access":"Y"}]
            ,["upnp.external_tcp_port",0,"0",{"access":"R"}]
            ,["upnp.external_udp_port",0,"0",{"access":"R"}]
            ,["upnp.external_ip",2,"",{"access":"R"}]
            ,["natpmp",1,"true",{"access":"Y"}]
            ,["lsd",1,"true",{"access":"Y"}]
            ,["disable_fw",1,"true",{"access":"Y"}]
            ,["dw",0,"0",{"access":"R"}]
            ,["tu",0,"2555552685003",{"access":"R"}]
            ,["td",0,"23451123282",{"access":"R"}]
            ,["fd",0,"32",{"access":"R"}]
            ,["k",2,"",{"access":"R"}]
            ,["v",0,"111915940",{"access":"R"}]
            ,["asip",2,"",{"access":"R"}]
            ,["asdlurl",2,"",{"access":"R"}]
            ,["asdns",0,"0",{"access":"R"}]
            ,["ascon",0,"0",{"access":"R"}]
            ,["asdl",0,"0",{"access":"R"}]
            ,["assz",0,"0",{"access":"R"}]
            ,["sched_enable",1,"false",{"access":"Y"}]
            ,["sched_ul_rate",0,"0",{"access":"Y"}]
            ,["sched_interaction",1,"false",{"access":"Y"}]
            ,["sched_dl_rate",0,"0",{"access":"Y"}]
            ,["sched_table",2,"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",{"access":"Y"}]
            ,["sched_dis_dht",1,"true",{"access":"Y"}]
            ,["enable_scrape",1,"true",{"access":"Y"}]
            ,["show_toolbar",1,"true",{"access":"Y"}]
            ,["show_details",1,"false",{"access":"Y"}]
            ,["show_status",1,"true",{"access":"Y"}]
            ,["show_category",1,"true",{"access":"Y"}]
            ,["show_tabicons",1,"true",{"access":"Y"}]
            ,["rand_port_on_start",1,"false",{"access":"Y"}]
            ,["prealloc_space",1,"false",{"access":"Y"}]
            ,["language",0,"30066",{"access":"Y"}]
            ,["logger_mask",0,"0",{"access":"Y"}]
            ,["autostart",1,"true",{"access":"Y"}]
            ,["dht",1,"true",{"access":"Y"}]
            ,["dht_per_torrent",1,"true",{"access":"Y"}]
            ,["pex",1,"true",{"access":"Y"}]
            ,["rate_limit_local_peers",1,"true",{"access":"Y"}]
            ,["multi_day_transfer_limit_en",1,"false",{"access":"Y"}]
            ,["multi_day_transfer_mode_ul",1,"false",{"access":"Y"}]
            ,["multi_day_transfer_mode_dl",1,"false",{"access":"Y"}]
            ,["multi_day_transfer_mode_uldl",1,"true",{"access":"Y"}]
            ,["multi_day_transfer_limit_unit",0,"1",{"access":"Y"}]
            ,["multi_day_transfer_limit_value",0,"200",{"access":"Y"}]
            ,["multi_day_transfer_limit_span",0,"11",{"access":"Y"}]
            ,["net.bind_ip",2,"",{"access":"Y"}]
            ,["net.outgoing_ip",2,"",{"access":"Y"}]
            ,["net.outgoing_port",0,"0",{"access":"Y"}]
            ,["net.outgoing_max_port",0,"0",{"access":"Y"}]
            ,["net.low_cpu",1,"false",{"access":"Y"}]
            ,["net.calc_overhead",1,"false",{"access":"Y"}]
            ,["net.calc_rss_overhead",1,"true",{"access":"Y"}]
            ,["net.calc_tracker_overhead",1,"true",{"access":"Y"}]
            ,["net.max_halfopen",0,"500",{"access":"Y"}]
            ,["net.limit_excludeslocal",1,"false",{"access":"Y"}]
            ,["net.upnp_tcp_only",1,"false",{"access":"Y"}]
            ,["net.disable_incoming_ipv6",1,"false",{"access":"Y"}]
            ,["net.ratelimit_utp",1,"true",{"access":"Y"}]
            ,["net.friendly_name",2,"",{"access":"Y"}]
            ,["isp.bep22",1,"true",{"access":"Y"}]
            ,["isp.primary_dns",2,"208.67.222.222",{"access":"Y"}]
            ,["isp.secondary_dns",2,"208.67.220.220",{"access":"Y"}]
            ,["isp.fqdn",2,"",{"access":"Y"}]
            ,["isp.peer_policy_enable",1,"true",{"access":"Y"}]
            ,["isp.peer_policy_url",2,"",{"access":"Y"}]
            ,["isp.peer_policy_override",1,"false",{"access":"Y"}]
            ,["dir_autoload_flag",1,"true",{"access":"Y"}]
            ,["dir_autoload_delete",1,"false",{"access":"Y"}]
            ,["dir_autoload",2,"C:\\Users\\Administrator\\Downloads\\tm",{"access":"Y"}]
            ,["ipfilter.enable",1,"true",{"access":"Y"}]
            ,["dht.collect_feed",1,"false",{"access":"Y"}]
            ,["dht.rate",0,"-1",{"access":"Y"}]
            ,["append_incomplete",1,"false",{"access":"Y"}]
            ,["show_add_dialog",1,"true",{"access":"Y"}]
            ,["always_show_add_dialog",1,"false",{"access":"Y"}]
            ,["gui.log_date",1,"true",{"access":"Y"}]
            ,["remove_torrent_files_with_private_data",1,"true",{"access":"Y"}]
            ,["boss_key",0,"0",{"access":"Y"}]
            ,["boss_key_salt",0,"",{"access":"W"}]
            ,["use_boss_key_pw",1,"false",{"access":"Y"}]
            ,["boss_key_pw",0,"",{"access":"W"}]
            ,["encryption_mode",0,"0",{"access":"Y"}]
            ,["encryption_allow_legacy",1,"true",{"access":"Y"}]
            ,["enable_share",1,"false",{"access":"Y"}]
            ,["rss.update_interval",0,"15",{"access":"Y"}]
            ,["rss.smart_repack_filter",1,"true",{"access":"Y"}]
            ,["rss.feed_as_default_label",1,"true",{"access":"Y"}]
            ,["bt.save_resume_rate",0,"120",{"access":"Y"}]
            ,["bt.magnetlink_check_existing_files",1,"true",{"access":"Y"}]
            ,["gui.delete_to_trash",1,"true",{"access":"Y"}]
            ,["gui.default_del_action",0,"0",{"access":"Y"}]
            ,["gui.speed_in_title",1,"false",{"access":"Y"}]
            ,["gui.limits_in_statusbar",1,"false",{"access":"Y"}]
            ,["gui.graphic_progress",1,"true",{"access":"Y"}]
            ,["gui.piecebar_progress",1,"false",{"access":"Y"}]
            ,["gui.show_status_icon_in_dl_list",1,"false",{"access":"Y"}]
            ,["gui.tall_category_list",1,"true",{"access":"Y"}]
            ,["gui.wide_toolbar",1,"false",{"access":"Y"}]
            ,["gui.find_pane",1,"true",{"access":"Y"}]
            ,["gui.toolbar_labels",1,"false",{"access":"Y"}]
            ,["gui.category_list_spaces",1,"true",{"access":"Y"}]
            ,["streaming.preview_player",2,"uTorrent Player",{"access":"Y"}]
            ,["streaming.playback_player",2,"uTorrent Player",{"access":"Y"}]
            ,["avwindow",0,"0",{"access":"R"}]
            ,["stats.video1.time_watched",0,"0",{"access":"Y"}]
            ,["stats.video2.time_watched",0,"0",{"access":"Y"}]
            ,["stats.video3.time_watched",0,"0",{"access":"Y"}]
            ,["stats.video1.finished",1,"false",{"access":"Y"}]
            ,["stats.video2.finished",1,"false",{"access":"Y"}]
            ,["stats.video3.finished",1,"false",{"access":"Y"}]
            ,["stats.welcome_page_useful",0,"0",{"access":"Y"}]
            ,["store_torr_infohash",1,"false",{"access":"Y"}]
            ,["magnet.download_wait",0,"60",{"access":"Y"}]
            ,["av_enabled",1,"true",{"access":"R"}]
            ,["av_auto_update",1,"true",{"access":"R"}]
            ,["av_last_update_date",2,"",{"access":"R"}]
            ,["plus_player_installed",1,"false",{"access":"R"}]
            ,["move_if_defdir",1,"true",{"access":"Y"}]
            ,["gui.combine_listview_status_done",1,"true",{"access":"Y"}]
            ,["gui.update_rate",0,"1000",{"access":"Y"}]
            ,["client_uuid",2,"",{"access":"R"}]
            ,["next_market_share_report",0,"1620366443",{"access":"R"}]
            ,["queue.dont_count_slow_dl",1,"true",{"access":"Y"}]
            ,["queue.dont_count_slow_ul",1,"true",{"access":"Y"}]
            ,["queue.slow_dl_threshold",0,"1000",{"access":"Y"}]
            ,["queue.slow_ul_threshold",0,"1000",{"access":"Y"}]
            ,["queue.use_seed_peer_ratio",1,"true",{"access":"Y"}]
            ,["queue.prio_no_seeds",1,"true",{"access":"Y"}]
            ,["bt.tcp_rate_control",1,"true",{"access":"Y"}]
            ,["gui.graph_tcp_rate_control",1,"false",{"access":"Y"}]
            ,["gui.graph_overhead",1,"true",{"access":"Y"}]
            ,["gui.graph_legend",1,"true",{"access":"Y"}]
            ,["bt.ratelimit_tcp_only",1,"false",{"access":"Y"}]
            ,["bt.prioritize_partial_pieces",1,"false",{"access":"Y"}]
            ,["bt.transp_disposition",0,"31",{"access":"Y"}]
            ,["net.utp_target_delay",0,"100",{"access":"Y"}]
            ,["net.utp_packet_size_interval",0,"10",{"access":"Y"}]
            ,["net.utp_receive_target_delay",0,"100",{"access":"Y"}]
            ,["net.utp_initial_packet_size",0,"4",{"access":"Y"}]
            ,["net.utp_dynamic_packet_size",1,"true",{"access":"Y"}]
            ,["bt.enable_pulse",1,"true",{"access":"Y"}]
            ,["bt.pulse_weight",0,"200",{"access":"Y"}]
            ,["bt.compact_allocation",1,"false",{"access":"Y"}]
            ,["bt.use_dns_tracker_prefs",1,"true",{"access":"Y"}]
            ,["bt.connect_speed",0,"25",{"access":"Y"}]
            ,["bt.determine_encoded_rate_for_streamables",1,"true",{"access":"Y"}]
            ,["streaming.min_buffer_piece",0,"5",{"access":"Y"}]
            ,["bt.allow_same_ip",1,"true",{"access":"Y"}]
            ,["bt.use_similar_torrent_data",1,"true",{"access":"Y"}]
            ,["bt.no_connect_to_services",1,"true",{"access":"Y"}]
            ,["bt.no_connect_to_services_list",2,"25,80,110,443,6666,6667",{"access":"Y"}]
            ,["bt.ban_threshold",0,"3",{"access":"Y"}]
            ,["bt.use_ban_ratio",1,"true",{"access":"Y"}]
            ,["bt.ban_ratio",0,"128",{"access":"Y"}]
            ,["bt.use_rangeblock",1,"true",{"access":"Y"}]
            ,["bt.graceful_shutdown",1,"true",{"access":"Y"}]
            ,["bt.shutdown_tracker_timeout",0,"15",{"access":"Y"}]
            ,["bt.shutdown_upnp_timeout",0,"5",{"access":"Y"}]
            ,["peer.lazy_bitfield",1,"true",{"access":"Y"}]
            ,["peer.resolve_country",1,"false",{"access":"Y"}]
            ,["peer.disconnect_inactive",1,"true",{"access":"Y"}]
            ,["peer.disconnect_inactive_interval",0,"300",{"access":"Y"}]
            ,["diskio.flush_files",1,"true",{"access":"Y"}]
            ,["proxy.proxy",2,"",{"access":"Y"}]
            ,["proxy.type",0,"0",{"access":"Y"}]
            ,["proxy.port",0,"8080",{"access":"Y"}]
            ,["proxy.auth",1,"false",{"access":"Y"}]
            ,["proxy.p2p",1,"false",{"access":"Y"}]
            ,["proxy.resolve",1,"false",{"access":"Y"}]
            ,["proxy.username",2,"",{"access":"Y"}]
            ,["proxy.password",2,"",{"access":"Y"}]
            ,["webui.enable",1,"true",{"access":"Y"}]
            ,["webui.enable_guest",1,"false",{"access":"Y"}]
            ,["webui.enable_listen",1,"true",{"access":"Y"}]
            ,["webui.token_auth",1,"true",{"access":"Y"}]
            ,["webui.token_auth_filter",0,"0",{"access":"Y"}]
            ,["webui.username",2,"admin123",{"access":"Y"}]
            ,["webui.password",2,"",{"access":"W"}]
            ,["webui.uconnect_enable",1,"false",{"access":"Y"}]
            ,["webui.uconnect_username",2,"",{"access":"Y"}]
            ,["webui.uconnect_password",2,"",{"access":"W"}]
            ,["webui.uconnect_username_anonymous",2,"",{"access":"Y"}]
            ,["webui.uconnect_question_opted_out",1,"false",{"access":"R"}]
            ,["webui.uconnect_computername",2,"",{"access":"Y"}]
            ,["webui.allow_pairing",1,"true",{"access":"Y"}]
            ,["webui.ssdp_uuid",2,"23a27b1c-dfa7-eb11-80d8-cdcc2caada5c",{"access":"R"}]
            ,["webui.guest",2,"guest",{"access":"Y"}]
            ,["webui.restrict",2,"",{"access":"Y"}]
            ,["webui.port",0,"51000",{"access":"Y"}]
            ,["webui.cookie",2,"{}",{"access":"Y"}]
            ,["webui.uconnect_toolbar_ever",1,"false",{"access":"R"}]
            ,["webui.uconnect_enable_ever",1,"false",{"access":"R"}]
            ,["webui.uconnect_connected_ever",1,"false",{"access":"R"}]
            ,["webui.uconnect_actions_count",0,"0",{"access":"R"}]
            ,["webui.uconnect_actions_list_count",0,"0",{"access":"R"}]
            ,["webui.uconnect_cred_status",0,"0",{"access":"R"}]
            ,["webui.update_message",2,"",{"access":"R"}]
            ,["webui.proxy_auth",1,"true",{"access":"R"}]
            ,["webui.update_url",2,"http://pr.apps.bittorrent.com/client-webui/%s/client-webui.json",{"access":"Y"}]
            ,["webui.track",2,"stable",{"access":"Y"}]
            ,["webui.version",0,"45988",{"access":"Y"}]
            ,["diskio.sparse_files",1,"true",{"access":"Y"}]
            ,["diskio.no_zero",1,"true",{"access":"Y"}]
            ,["diskio.use_partfile",1,"true",{"access":"Y"}]
            ,["diskio.smart_hash",1,"true",{"access":"Y"}]
            ,["diskio.smart_sparse_hash",1,"true",{"access":"Y"}]
            ,["diskio.coalesce_writes",1,"true",{"access":"Y"}]
            ,["diskio.coalesce_write_size",0,"2097152",{"access":"Y"}]
            ,["diskio.max_write_queue",0,"32",{"access":"Y"}]
            ,["diskio.cache_reduce_minutes",0,"9",{"access":"Y"}]
            ,["diskio.cache_stripe",0,"128",{"access":"Y"}]
            ,["diskio.quick_hash",1,"false",{"access":"Y"}]
            ,["diskio.mark_of_the_web",1,"true",{"access":"Y"}]
            ,["diskio.minimize_kernel_caching",1,"false",{"access":"Y"}]
            ,["diskio.all_writes_sync",1,"false",{"access":"Y"}]
            ,["cache.override",1,"false",{"access":"Y"}]
            ,["cache.override_size",0,"128",{"access":"Y"}]
            ,["cache.reduce",1,"true",{"access":"Y"}]
            ,["cache.write",1,"true",{"access":"Y"}]
            ,["cache.writeout",1,"true",{"access":"Y"}]
            ,["cache.writeout_age_max",0,"30000",{"access":"Y"}]
            ,["cache.writeout_headspace",0,"4",{"access":"Y"}]
            ,["cache.writeimm",1,"true",{"access":"Y"}]
            ,["cache.read",1,"true",{"access":"Y"}]
            ,["cache.read_turnoff",1,"true",{"access":"Y"}]
            ,["cache.read_prune",1,"true",{"access":"Y"}]
            ,["cache.read_thrash",1,"false",{"access":"Y"}]
        ]
    }

}
