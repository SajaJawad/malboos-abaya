'use client';

import React, { useState } from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'abayas' | 'makhawer';
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'abayas',
}) => {
  const [tab, setTab] = useState<'abayas' | 'makhawer'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#151311]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-2xl transform overflow-hidden bg-[#F7F2EA] p-6 text-right shadow-2xl transition-all border border-[#C4A36B]/30 rounded-[3px]">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E8DDD0]">
            <div className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-[#C4A36B]" />
              <h3 className="text-xl font-normal text-[#151311]">
                دليل المقاسات — ملبوس
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#151311] hover:text-[#C4A36B] transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#E8DDD0] my-6">
            <button
              onClick={() => setTab('abayas')}
              className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${
                tab === 'abayas'
                  ? 'border-[#151311] text-[#151311]'
                  : 'border-transparent text-[#7B746E] hover:text-[#151311]'
              }`}
            >
              مقاسات العبايات (بالطول)
            </button>
            <button
              onClick={() => setTab('makhawer')}
              className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${
                tab === 'makhawer'
                  ? 'border-[#151311] text-[#151311]'
                  : 'border-transparent text-[#7B746E] hover:text-[#151311]'
              }`}
            >
              مقاسات المخاوير (قياسية)
            </button>
          </div>

          {/* Table Content */}
          {tab === 'abayas' ? (
            <div>
              <p className="text-xs text-[#7B746E] mb-4 font-light">
                * تُقاس العباية بطول الجسم الإجمالي من الكتف وحتى القدمين بالإنش.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-right border-collapse">
                  <thead>
                    <tr className="bg-[#151311] text-[#F7F2EA]">
                      <th className="p-3 font-medium">المقاس</th>
                      <th className="p-3 font-medium">الطول المناسب للجسم</th>
                      <th className="p-3 font-medium">طول العباية (إنش)</th>
                      <th className="p-3 font-medium">طول الكم (إنش)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DDD0] bg-white">
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">52</td>
                      <td className="p-3 text-[#7B746E]">150 - 155 سم</td>
                      <td className="p-3 text-[#151311]">52 إنش</td>
                      <td className="p-3 text-[#151311]">27 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">54</td>
                      <td className="p-3 text-[#7B746E]">156 - 160 سم</td>
                      <td className="p-3 text-[#151311]">54 إنش</td>
                      <td className="p-3 text-[#151311]">28 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">56</td>
                      <td className="p-3 text-[#7B746E]">161 - 165 سم</td>
                      <td className="p-3 text-[#151311]">56 إنش</td>
                      <td className="p-3 text-[#151311]">29 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">58</td>
                      <td className="p-3 text-[#7B746E]">166 - 170 سم</td>
                      <td className="p-3 text-[#151311]">58 إنش</td>
                      <td className="p-3 text-[#151311]">30 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">60</td>
                      <td className="p-3 text-[#7B746E]">171 - 175 سم</td>
                      <td className="p-3 text-[#151311]">60 إنش</td>
                      <td className="p-3 text-[#151311]">31 إنش</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xs text-[#7B746E] mb-4 font-light">
                * المخاوير تُخاط بمقاسات مريحة وتناسب معظم أجسام النساء مع إمكانية تعديل الخصر.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-right border-collapse">
                  <thead>
                    <tr className="bg-[#151311] text-[#F7F2EA]">
                      <th className="p-3 font-medium">المقاس</th>
                      <th className="p-3 font-medium">محيط الصدر (إنش)</th>
                      <th className="p-3 font-medium">محيط الخصر (إنش)</th>
                      <th className="p-3 font-medium">الطول الإجمالي (إنش)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DDD0] bg-white">
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">S (صغير)</td>
                      <td className="p-3 text-[#151311]">36 - 38</td>
                      <td className="p-3 text-[#7B746E]">30 - 32</td>
                      <td className="p-3 text-[#151311]">56 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">M (وسط)</td>
                      <td className="p-3 text-[#151311]">40 - 42</td>
                      <td className="p-3 text-[#7B746E]">34 - 36</td>
                      <td className="p-3 text-[#151311]">57 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">L (كبير)</td>
                      <td className="p-3 text-[#151311]">44 - 46</td>
                      <td className="p-3 text-[#7B746E]">38 - 40</td>
                      <td className="p-3 text-[#151311]">58 إنش</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#151311]">XL (كبير جداً)</td>
                      <td className="p-3 text-[#151311]">48 - 50</td>
                      <td className="p-3 text-[#7B746E]">42 - 44</td>
                      <td className="p-3 text-[#151311]">59 إنش</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#E8DDD0] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#151311] text-[#F7F2EA] text-sm font-medium hover:bg-[#C4A36B] hover:text-[#151311] transition-all"
            >
              فهمت، شكراً
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
