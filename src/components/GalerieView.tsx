"use client";

import { useState, useEffect } from "react";
import { Painting } from "@/models/Painting";
import tableauxStore from "@/stores/Tableaux";
import TableauCard from "./TableauCard";
import { useTranslations } from "next-intl";

export default function GalerieView() {
  const t = useTranslations("galerie");

  const [, setSelectedPainting] = useState<Painting | null>(null);
  const { tableaux, fetchTableaux, loading } = tableauxStore();

  useEffect(() => {
    fetchTableaux();
  }, [fetchTableaux]);

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t("titre")}</h1>
        {/* <p className="text-lg text-gray-600 mt-2">Découvrez notre collection de peintures</p> */}
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-600"> {t("chargement")}</p>
        </div>
      ) : tableaux.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-700"> {t("rien")}</p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {tableaux.map((painting: Painting) => (
            <div
              key={painting.id}
              className="break-inside-avoid cursor-pointer"
              onClick={() => setSelectedPainting(painting)}
            >
              <TableauCard painting={painting} getInformations={false} />
            </div>
          ))}
        </div>
      )}

      {/* {selectedPainting && (
        <PaintingDetails
          painting={selectedPainting}
          onClose={() => setSelectedPainting(null)}
        />
      )} */}
    </div>
  );
}
